import React, { useRef } from 'react';
import { useProgress } from '../../../hooks/useProgress';
import { Description } from '../../shared/styledTexts';
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

    const getLineTop = () => {
        const {clientHeight, clientWidth: width} = document.documentElement;
        const lineProportion = 375 / 167;
        const bottomLinePosition = +getBottomLinePosition().replace('px', '');
        const height = clientHeight - bottomLinePosition;
        return (height - width / lineProportion) - 25 + 'px';
    }

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
                    <SubTitle>?????????? ??tomic IT</SubTitle>
                    <TopLineStyled/>
                </TopLineWrapper>
                <Content>
                    <Title>
                        ????{'\n'}
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
                    <MiniTitle> ?????? ???????????? ?????????????????????</MiniTitle>
                    <DescriptionStyled>{result.description}</DescriptionStyled>
                    {result.image && (
                        <ImageStyled styles={result.image.styles}>
                            {result.image.svg()}
                        </ImageStyled>
                    )}
                </Content>
                <ButtonWrapper top={getLineTop()}>
                    <ButtonStyled onClick={() => openHref('https://clck.ru/32rkiQ', 'click')}>?? ?? ????????!</ButtonStyled>
                    <ButtonTextContainer>
                        <Emoji>????????</Emoji>
                        <p ref={smallTextRef}>{'?????????????????? ?? ??????????????\nAtomic IT-???????????????? ??????'} </p>
                    </ButtonTextContainer>
                </ButtonWrapper>
            </ContentWrapperStyled>
        </Wrapper>
    );
};
