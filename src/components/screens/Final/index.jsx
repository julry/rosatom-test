import React from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../hooks/useProgress';
import { Description } from '../../shared/styledTexts';
// import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';
import { resultTypes } from '../../../constants/resultTypes.config';
import { FlexWrapper } from '../../shared/FlexWrapper';
import { colors } from '../../../constants/colors';
import { BluePlate } from '../../shared/svg/BluePlate';
import { Button } from '../../shared/Button';

const Wrapper = styled.div`
  padding: 24.2879vh 5.5vw 0;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 32px;
`;

const MiniLabelWrapper = styled(FlexWrapper)`
  margin: 2.2489vh 0;

`;
const MiniLabelContainer = styled.div`
  padding: 10px;
  height: 100%;
  width: 100%;
  flex-grow: 1;
  border-radius: 10px;
  background: ${colors.green};
`;

const BluePlateWrapper = styled.div`
  margin-left: 10px;
  width: 23.46667vw;
  height: 7.7961vh;
  flex-grow: 1;
`;

const BluePlateStyled = styled(BluePlate)`
  height: 100%;
`;
const MiniTitle = styled(Description)`
  font-weight: bold;
  margin-bottom: 5px;
`;

const ButtonStyled = styled(Button)`
  width: 39.2vw;
  min-width: 147px;
  height: 7.7961vh;
  min-height: 50px;
  font-size: 20px;
  border-radius: 27px;
  margin: 3.5982vh 5.3vh 0 auto;
`;

export const Final = () => {
    const {progress} = useProgress();
    const {resultType} = progress;
    const result = resultTypes[resultType];
    return (
        <Wrapper>
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
            <ButtonStyled>я в деле</ButtonStyled>
        </Wrapper>
    );
};
