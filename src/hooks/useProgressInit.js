import { useState } from 'react';
import { cards, CARD_TYPES, QUESTION_TYPES } from '../constants/cards.config';
import { forks } from '../constants/forks.config';
import { screens } from '../constants/screens.config';
import { getCardById } from '../utils/getCardById'
import { answerTypes } from '../constants/answersTypes';

const getCardsByFork = (fork) => {
    if (!fork) return;
    const cardsByFork = [...cards];
    const dependentCards = cards.filter(card => card.type === QUESTION_TYPES.differentiating);
    const firstDependentIndex = cards.indexOf(dependentCards[0]);
    const dependentCardsCount = dependentCards.length;
    cardsByFork.splice(firstDependentIndex, dependentCardsCount, ...fork.cards.map(id => getCardById('card-' + id)));
    return cardsByFork.slice(0, MAX_CARDS_LENGTH);
};

const DEPEND_COMMON_CARD_ID = 'startCard-' + CARD_TYPES.code;
const DEPEND_DIFFERENTIATING_CARD_ID = 'startCard-' + CARD_TYPES.math;
const INITIAL_FORK = forks[0];
const INITIAL_ANSWERS = {};
const INITIAL_RESULT_TYPE = answerTypes.MultiD;
const MAX_CARDS_LENGTH = 10;

const INITIAL_PROGRESS = {
    answers: INITIAL_ANSWERS,
    fork: INITIAL_FORK,
    dependDifCardId: DEPEND_DIFFERENTIATING_CARD_ID,
    cards: getCardsByFork(INITIAL_FORK),
    resultType: INITIAL_RESULT_TYPE
};

export function useProgressInit() {
    const [progress, setProgress] = useState(INITIAL_PROGRESS);
    /////////////////// for development ////////////////////////////////////
    const urlParams = new URLSearchParams(window.location.search);
    const screenParam = urlParams.get('screen');
    ////////////////////////////////////////////////////////////////////////

    const [currentScreenIndex, setCurrentScreenIndex] = useState(+screenParam || 0);
    const screen = screens[currentScreenIndex];

    const setPrev = () => {
        const canSet = currentScreenIndex > 0;
        if (canSet) {
            setCurrentScreenIndex(currentScreenIndex - 1);
        }
    };

    const next = () => {
        const nextScreenIndex = currentScreenIndex + 1;
        const canNext = nextScreenIndex <= screens.length - 1;
        const nextScreen = screens[nextScreenIndex];

        if (canNext) {
            if (nextScreen?.ref?.current) nextScreen.ref.current.scrollTop = 0;
            setCurrentScreenIndex(nextScreenIndex);
        }
    };

    const updateCards = (type, id) => {
        if (type === QUESTION_TYPES.common) updateCommonCards();
        else if (id === progress.dependDifCardId) updateDifferentiatingCards();
    };

    const swipeCards = (swipedIds) => {
        const cards = [...progress.cards];
        if (swipedIds.length < 2) return cards;
        const cardSwiped = getCardById('startCard-' + swipedIds[0]);
        const cardSwiped2 = getCardById('startCard-' + swipedIds[1]);
        if (!cardSwiped || !cardSwiped2) return cards;
        cards[progress.cards.indexOf(cardSwiped)] = cardSwiped2;
        cards[progress.cards.indexOf(cardSwiped2)] = cardSwiped;

        return {cards, dependDifCardId: 'startCard-' + swipedIds[0]};
    };

    const updateCommonCards = () => {
        const isAgreed = progress.answers[DEPEND_COMMON_CARD_ID].isAgreed;
        if (isAgreed){
            const swipedIds = getCardById(DEPEND_COMMON_CARD_ID).cardsDepending || [];
            const swipeResult = swipeCards(swipedIds);
            setProgress(progress => ({
                    ...progress,
                    ...swipeResult,
                })
            );
        }
    }

    const skipToRandomCards = (curIndex, curCards) => {
        const randomCards = cards.filter(card => card.type === QUESTION_TYPES.random);
        const firstRandomIndex = cards.indexOf(randomCards[0]);
        const newCards = curCards.slice(0, curIndex).concat(cards.slice(firstRandomIndex));
        setProgress(progress => ({
                ...progress,
                cards: newCards.slice(0, MAX_CARDS_LENGTH),
            })
        );
    }

    const updateDifferentiatingCards = () => {
        const answers = {...progress.answers};

        const resultPoints = Object.entries(answers).reduce((res, cardAnswer) => {
            const [ id, answerAgreed ] = cardAnswer;
            if (!id) return res;
            const card = getCardById(id);
            const { answer } = card;
            const answerTypes = answer[answerAgreed.isAgreed ? 'agree' : 'disagree'];
            return { ...answerTypes.reduce((result, t) => ({ ...result, [t]: (result[t] || 0) + 1 }), {...res}) };
        }, {});

        const maxPoints = Math.max(...Object.keys(resultPoints).map(key => resultPoints[key]));
        const maxPointsFork = forks.filter(fork => {
            const {points} = fork;
            const {max} = points;
            const answersPoints = Object.entries(resultPoints);
            const maxForks = answersPoints
                .filter(point => max[point[0]] === point[1] && point[1] === maxPoints);
            const resOnlyMaxPoints = answersPoints.filter(point => point[1] === maxPoints);
            return maxForks.length === Object.keys(max).length  && resOnlyMaxPoints.length === maxForks.length;
        });
        let finalFork = maxPointsFork[0];
        if (!finalFork) return;

        if (maxPointsFork.length > 1) {
            finalFork = maxPointsFork.filter(fork => {
                const {dependent} = fork.points;
                const dependentKeys = Object.keys(dependent);
                if (!dependentKeys.length) return true;
                return resultPoints[dependentKeys[0]] ? resultPoints[dependentKeys[0]] === dependent[dependentKeys[0]]
                    : dependent[dependentKeys[0]] === 0;
            })[0]
        }

        setProgress(progress => ({
                ...progress,
                cards: getCardsByFork(finalFork),
                fork: finalFork,
                resultType: finalFork?.result || INITIAL_RESULT_TYPE
            })
        );
    }

    const updateAnswer = (name, value) => {
        const answers = {...progress.answers, [name]: value};
        setProgress(progress => {
            return {
                ...progress,
                answers
            };
        });
    };

    const updateProgress = (name, value) => {
        setProgress(progress => ({...progress, [name]: value}));
    };

    return {
        progress,
        currentScreenIndex,
        cards: progress.cards,
        answers: progress.answers,
        fork: progress.fork,
        screen,
        next,
        updateAnswer,
        setPrev,
        updateProgress,
        updateCards,
        skipToRandomCards
    };
}
