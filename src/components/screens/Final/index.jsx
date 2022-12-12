import React, { useEffect, useRef } from 'react';
import { useProgress } from '../../../hooks/useProgress';
import { Description } from '../../shared/styledTexts';
// import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';
import { resultTypes } from '../../../constants/resultTypes.config';
import { BackgroundWrapper } from '../../shared/wrappers';
import {
    BluePlateStyled,
    BluePlateWrapper,
    ButtonStyled,
    MiniLabelContainer,
    MiniLabelWrapper,
    MiniTitle,
    Title,
    TopLineStyled,
    Wrapper,
    AtomStyled,
    AtomStyledWrapper,
    Content,
    ContentWrapperStyled,
    ImageStyled,
    SubTitle,
    TopLineWrapper,
    TopLineStyledBg,
    BottomLineStyledBg,
    DescriptionStyled,
    ButtonWrapper,
    ButtonTextContainer, Emoji
} from './styledComponents';
import { openHref } from '../../../utils/openHref';

export const Final = () => {
    const {progress} = useProgress();
    const {resultType} = progress;
    const result = resultTypes[resultType];
    const smallTextRef = useRef();

    const getBottomLinePosition = () => {
        const heightProportion = document.documentElement.clientHeight * 0.25 / document.documentElement.clientWidth;
        if (heightProportion < 0.44) {
            return document.documentElement.clientHeight * 0.25 - document.documentElement.clientWidth * 0.45 + 'px';
        }
        return '0';
    };

    const isSmallTextNotOnLine = () => {
        const lineProportion = 375 / 167;
        const partWidthProportion = 375 / 112;
        if (!smallTextRef.current) return;
        const {clientHeight, clientWidth: width} = document.documentElement;
        const {offsetTop} = smallTextRef.current;
        const bottomLinePosition = +getBottomLinePosition().replace('px', '');
        const height = clientHeight - bottomLinePosition;
        const linePosition = height - width / lineProportion;
        return linePosition > offsetTop || (height - width / partWidthProportion) < offsetTop;
    }

    useEffect(() => {
        if (smallTextRef.current && isSmallTextNotOnLine()) {
            smallTextRef.current.style.color = '#000000';
            smallTextRef.current.style.textShadow = '0px 0px 4px white';
        }
    }, []);

    return (
        <Wrapper>
            <BackgroundWrapper>
                <TopLineStyledBg/>
                <AtomStyledWrapper>
                    <AtomStyled/>
                </AtomStyledWrapper>
                <BottomLineStyledBg bottom={getBottomLinePosition()}/>
            </BackgroundWrapper>
            <ContentWrapperStyled>
                <TopLineWrapper>
                    <SubTitle>среди Аtomic IT</SubTitle>
                    <TopLineStyled/>
                </TopLineWrapper>
                <Content>
                    <Title>
                        Ты{'\n'}
                        {result.label}!
                    </Title>
                    <MiniLabelWrapper hasShortLabel={result.shortMiniLabel}>
                        <MiniLabelContainer hasShortLabel={result.shortMiniLabel}>
                            <Description>{result.miniLabel}</Description>
                        </MiniLabelContainer>
                        {result.shortMiniLabel && <BluePlateWrapper>
                            <BluePlateStyled/>
                        </BluePlateWrapper>}
                    </MiniLabelWrapper>
                    <MiniTitle> Чем будешь заниматься?</MiniTitle>
                    <DescriptionStyled>{result.description}</DescriptionStyled>
                    {result.image && (
                        <ImageStyled styles={result.image.styles}>
                            {result.image.svg()}
                        </ImageStyled>
                    )}
                </Content>
                <ButtonWrapper>
                    <ButtonStyled onClick={() => openHref('https://clck.ru/32rkiQ')}>я в деле!</ButtonStyled>
                    <ButtonTextContainer>
                        <Emoji>👆🏻</Emoji>
                        <p ref={smallTextRef}>{'Знакомься с другими\nAtomic IT-котиками тут'} </p>
                    </ButtonTextContainer>
                </ButtonWrapper>
            </ContentWrapperStyled>
        </Wrapper>
    );
};
