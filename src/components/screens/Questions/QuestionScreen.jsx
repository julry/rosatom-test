import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../hooks/useProgress';
import { QUESTION_TYPES } from '../../../constants/cards.config';
import { getCardById } from '../../../utils/getCardById';
import { Card } from './Card';

const CardContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const QuestionScreen = () => {
    const {
        cards = [], updateAnswer, answers, updateCards, updateProgress, skipToRandomCards, next
    } = useProgress();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [skippedCards, setSkippedCards] = useState([]);
    const [prevCardId, setPrevCardId] = useState('');

    const onAnswer = ({isAgreed, card, index}) => {
        const {id} = card;
        updateAnswer(id, {isAgreed});
        if (currentIndex + 1 === cards.length){
            updateProgress('hasAllAnswers', true);
            next();
        }
        setSkippedCards(skipped => [...skipped, id]);
        if (card.type === QUESTION_TYPES.differentiating && isAgreed && card?.answer?.agree) {
            skipToRandomCards(index, cards);
            updateProgress('resultType', card?.answer?.agree)
        }
        // setTimeout(() => {
            setPrevCardId(id);
            setCurrentIndex(index => ++index);
        // }, 250);
    };

    useEffect(() => {
        if (!!prevCardId && getCardById(prevCardId)) {
            if (getCardById(prevCardId)?.isDepending) {
                updateCards(getCardById(prevCardId)?.dependType, prevCardId);
            }
        }
    }, [prevCardId])

    return (
        <Wrapper>
            <CardContainer>
                {cards.map((card, index) => (
                    <Card
                        key={card.id}
                        inProp={index === currentIndex}
                        isAgreed={answers[card.id]?.isAgreed}
                        index={cards.length - index}
                        curIndex={index + 1}
                        amount={cards.length}
                        onAnswer={onAnswer}
                        card={card}
                    />
                ))}
                {/*<SwitchTransition mode={'in-out'}>*/}
                {/*    <CSSTransition*/}
                {/*        key={usedCards[currentIndex]?.id}*/}
                {/*        nodeRef={usedCards[currentIndex]?.ref}*/}
                {/*        addEndListener={(done) => {*/}
                {/*            usedCards[currentIndex]?.ref?.current.addEventListener("transitionend", done, false);*/}
                {/*        }}*/}
                {/*        classNames="fade"*/}
                {/*        unmountOnExit*/}
                {/*    >*/}
                {/*        <div ref={usedCards[currentIndex]?.ref} className="button-container">*/}
                {/*            <Card*/}
                {/*                key={usedCards[currentIndex]?.id}*/}
                {/*                // active={index === currentIndex}*/}
                {/*                // next={currentIndex + 1 === index}*/}
                {/*                // hadSkipped={skippedCards.includes(card.id)}*/}
                {/*                // currentSkipped={[...skippedCards].reverse()[0] === card.id}*/}
                {/*                isAgreed={answers[usedCards[currentIndex]]?.isAgreed}*/}
                {/*                index={cards.length - currentIndex}*/}
                {/*                curIndex={currentIndex + 1}*/}
                {/*                amount={cards.length}*/}
                {/*                onAnswer={onAnswer}*/}
                {/*                card={usedCards[currentIndex]}*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </CSSTransition>*/}
                {/*</SwitchTransition>*/}

                {/*</AnimatePresence>*/}
            </CardContainer>
        </Wrapper>
    );
};
