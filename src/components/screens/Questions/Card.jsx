import { DisagreeIcon } from '../../shared/svg/DisagreeIcon';
import { AgreeIcon } from '../../shared/svg/AgreeIcon';
import { BackgroundWrapper } from '../../shared/wrappers';
import { Line } from './svg/Line';
import React from 'react';
import {
    AddictiveElementStyled, AtomStyled,
    ButtonsWrapper, ImageStyled, ImageWrapper, LineStyled, NoBtn, SmallCircleStyled,
    StyledAmount,
    StyledCard,
    StyledContentCard,
    StyledRemainingCards,
    TextWrapper, TopLineStyled, YesBtn
} from './styledComponents';
import { CARD_TYPES, QUESTION_TYPES } from '../../../constants/cards.config';

export const Card = (props) => {
    const {active, hadSkipped, currentSkipped, isAgreed, index, curIndex, amount, card, onAnswer} = props;
    const isFun = card.id?.includes(CARD_TYPES.fun);
    const isAddLine = card.type === QUESTION_TYPES.random;
    return (
        <StyledCard
            active={active}
            hadSkipped={hadSkipped}
            currentSkipped={currentSkipped}
            isAgreed={isAgreed}
            index={index}
        >
            <StyledContentCard>
                <StyledAmount isAddLine={isAddLine}>
                    {curIndex}<StyledRemainingCards isAddLine={isAddLine}>/{amount}</StyledRemainingCards>
                </StyledAmount>
                <TextWrapper>
                    {card.text}
                </TextWrapper>
                <ButtonsWrapper>
                    <NoBtn
                        onClick={() => onAnswer({isAgreed: false, card, curIndex})}
                        shadowColor={'#B6CE38'}
                    >
                        <DisagreeIcon/>
                    </NoBtn>
                    <YesBtn
                        onClick={() => onAnswer({isAgreed: true, card, curIndex})}
                        shadowColor={'#003274'}
                    >
                        <AgreeIcon />
                    </YesBtn>
                </ButtonsWrapper>
                <ImageWrapper>
                    {
                        card.image?.addictiveElement && <AddictiveElementStyled isFun={isFun}/>
                    }
                    <ImageStyled styles={card.image?.styles}>
                        {card.image?.svg ? card.image.svg() : null}
                    </ImageStyled>
                </ImageWrapper>
            </StyledContentCard>
            <BackgroundWrapper>
                {isAddLine && <TopLineStyled />}
                <AtomStyled />
                <SmallCircleStyled isFun={isFun} />
                <LineStyled isFun={isFun} />
            </BackgroundWrapper>
        </StyledCard>
    )
}