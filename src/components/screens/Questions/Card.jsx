import React, { useRef, useState } from 'react';
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
import { LogoStyled } from '../../shared/LogoStyled';
import { SWIPE_DURATION } from '../../../constants/durations';

export const Card = (props) => {
    const {inProp, isAgreed, index, curIndex, amount, card, onAnswer} = props;
    const [clicked, setClicked] = useState({});
    const isFun = card.id?.includes(CARD_TYPES.fun);
    const isAddLine = card.type === QUESTION_TYPES.random;
    const nodeRef = useRef(null);

    const onClick = (isAgreed) => {
        setClicked({isAgreed});
        onAnswer({isAgreed, card, index: curIndex})
    }
    const duration = SWIPE_DURATION;

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
                                clicked={clicked.isAgreed === false}
                                onClick={() => onClick(false)}
                                shadowColor={'#B6CE38'}
                            >
                                <DisagreeIcon/>
                            </NoBtn>
                            <YesBtn
                                clicked={clicked.isAgreed}
                                onClick={() => onClick(true)}
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
                        <LogoStyled/>
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