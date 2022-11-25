import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../hooks/useProgress';
import { QUESTION_TYPES } from '../../../constants/cards.config';
import { getCardById } from '../../../utils/getCardById';
import { Card } from './Card';

const CardContainer = styled.div`
  display: flex;
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
        setTimeout(() => {
            setPrevCardId(id);
            setCurrentIndex(index => ++index);
        }, 300);
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
                        active={index === currentIndex}
                        hadSkipped={skippedCards.includes(card.id)}
                        currentSkipped={[...skippedCards].reverse()[0] === card.id}
                        isAgreed={answers[card.id]?.isAgreed}
                        index={cards.length - index}
                        curIndex={index + 1}
                        amount={cards.length}
                        onAnswer={onAnswer}
                        card={card}
                    />
                ))}
            </CardContainer>
        </Wrapper>
    );
};
