import React from 'react';
import { useProgress } from '../../../hooks/useProgress';
import { Description } from '../../shared/styledTexts';
// import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';
import { resultTypes } from '../../../constants/resultTypes.config';
import { BackgroundWrapper, ContentWrapper } from '../../shared/wrappers';
import {
    BluePlateStyled, BluePlateWrapper, BottomLineStyled, ButtonStyled,
    MiniLabelContainer,
    MiniLabelWrapper, MiniTitle,
    Title,
    TopLineStyled,
    Wrapper, AtomStyled, AtomStyledWrapper, SmallCircleStyled, ContentWrapperStyled
} from './styledComponents';
export const Final = () => {
    const {progress} = useProgress();
    const {resultType} = progress;
    const result = resultTypes[resultType];
    return (
        <Wrapper>
            <BackgroundWrapper>
                <TopLineStyled />
                <BottomLineStyled />
                <AtomStyledWrapper>
                    <AtomStyled />
                </AtomStyledWrapper>
                <SmallCircleStyled isFun={true}/>
            </BackgroundWrapper>
            <ContentWrapperStyled>
                <Title>
                    Ты{'\n'}
                    {result.label}!
                </Title>
                <MiniLabelWrapper>
                    <MiniLabelContainer>
                        <Description>{result.miniLabel}</Description>
                    </MiniLabelContainer>
                    {result.shortMiniLabel && <BluePlateWrapper>
                        <BluePlateStyled/>
                    </BluePlateWrapper>}
                </MiniLabelWrapper>
                <MiniTitle> Чем будешь заниматься?</MiniTitle>
                <Description>{result.description}</Description>
                <ButtonStyled>я в деле!</ButtonStyled>
            </ContentWrapperStyled>
        </Wrapper>
    );
};
