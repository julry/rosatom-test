import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';
import { DisagreeIcon } from '../../shared/svg/DisagreeIcon';
import { AgreeIcon } from '../../shared/svg/AgreeIcon';
import { BackgroundWrapper } from '../../shared/wrappers';
import {
    AddictiveElementStyled, AtomStyled, AtomStyledWrapper,
    ButtonsWrapper, ImageStyled, LineStyled, NoBtn, SmallCircleStyled, SmallCircleStyledWrapper,
    StyledAmount,
    StyledCard,
    StyledContentCard,
    StyledRemainingCards,
    TextWrapper, TopLineStyled, YesBtn
} from './styledComponents';
import { CARD_TYPES, QUESTION_TYPES } from '../../../constants/cards.config';

export const Card = (props) => {
    const {inProp, isAgreed, index, curIndex, amount, card, onAnswer} = props;
    const isFun = card.id?.includes(CARD_TYPES.fun);
    const isAddLine = card.type === QUESTION_TYPES.random;
    const nodeRef = useRef(null);

    const duration = 600;

    const defaultStyle = {
        transition: `transform ${duration}ms ease-in-out`,
    }

    const transitionStyles = {
        entering: {
            transform: 'translateY(0)'
        },
        entered:  {
           transform: 'translateY(0)'
        },
        exiting:  {
            transform: curIndex === amount ? 'translateY(0)' : isAgreed ? 'translateY(-100%)' : 'translateY(100%)'
        },
        exited:  {
            transform: curIndex === amount ? 'translateY(0)' : isAgreed ? 'translateY(-100%)' : 'translateY(100%)'
        },
    };

    return (
        <Transition nodeRef={nodeRef} in={inProp} timeout={duration} unmountOnExit>
            {state => (
                <StyledCard
                    ref={nodeRef}
                    style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                    }}
                    index={index}
                >
                    <StyledContentCard>
                        <StyledAmount isAddLine={isAddLine}>
                            {curIndex}<StyledRemainingCards isAddLine={isAddLine}>/{amount}</StyledRemainingCards>
                        </StyledAmount>
                        <TextWrapper>
                            {typeof (card.text) === 'function' ? card.text() : card.text}
                        </TextWrapper>
                        <ButtonsWrapper>
                            <NoBtn
                                onClick={() => onAnswer({isAgreed: false, card, index: curIndex})}
                                shadowColor={'#B6CE38'}
                            >
                                <DisagreeIcon/>
                            </NoBtn>
                            <YesBtn
                                onClick={() => onAnswer({isAgreed: true, card, index: curIndex})}
                                shadowColor={'#003274'}
                            >
                                <AgreeIcon />
                            </YesBtn>
                        </ButtonsWrapper>
                        {
                            card.image?.addictiveElement && <AddictiveElementStyled isFun={isFun}/>
                        }
                        <ImageStyled styles={card.image?.styles}>
                            {card.image?.svg ? card.image.svg() : null}
                        </ImageStyled>
                    </StyledContentCard>
                    <BackgroundWrapper>
                        {isAddLine && <TopLineStyled />}
                        <AtomStyledWrapper>
                            <AtomStyled />
                        </AtomStyledWrapper>
                        <SmallCircleStyledWrapper>
                            <SmallCircleStyled isFun={isFun} />
                        </SmallCircleStyledWrapper>
                        <LineStyled isFun={isFun} />
                    </BackgroundWrapper>
                </StyledCard>
            )}
        </Transition>
    );
}