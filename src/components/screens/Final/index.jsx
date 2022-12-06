import React from 'react';
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
    SmallCircleStyled,
    Content,
    ContentWrapperStyled,
    ImageStyled,
    SubTitle,
    TopLineWrapper, TopLineStyledBg, BottomLineStyledBg, SmallCircleStyledBg, DescriptionStyled
} from './styledComponents';
import { openHref } from '../../../utils/openHref';

export const Final = () => {
    const {progress} = useProgress();
    const {resultType} = progress;
    const result = resultTypes[resultType];

    const getBottomLinePosition = () => {
        const heightProportion = document.documentElement.clientHeight * 0.25 / document.documentElement.clientWidth;
        if (heightProportion < 0.44) {
            return document.documentElement.clientHeight * 0.25 - document.documentElement.clientWidth * 0.45 + 'px';
        }
        return 0;
    };

    return (
        <Wrapper>
            <BackgroundWrapper>
                <TopLineStyledBg/>
                <AtomStyledWrapper>
                    <AtomStyled/>
                </AtomStyledWrapper>
                <BottomLineStyledBg bottom={getBottomLinePosition()}/>
                <SmallCircleStyledBg isFun={true}/>
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
                    <MiniLabelWrapper>
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
                <ButtonStyled onClick={() => openHref('https://clck.ru/32rkiQ')}>я в деле!</ButtonStyled>
                <SmallCircleStyled isFun={true}/>
            </ContentWrapperStyled>
        </Wrapper>
    );
};
