import styled from 'styled-components';
import { FlexWrapper } from '../../shared/FlexWrapper';
import { colors } from '../../../constants/colors';
import { BluePlate } from '../../shared/svg/BluePlate';
import { Description } from '../../shared/styledTexts';
import { Button } from '../../shared/Button';
import { TopLine } from './svg/TopLine';
import { BottomLine } from './svg/BottomLine';
import { Atom } from '../../shared/svg/Atom';
import { SmallCircle } from '../../shared/svg/SmallCircle';
import { ContentWrapper } from '../../shared/wrappers';

export const Wrapper = styled.div`
  padding: 24.2879vh 5.5vw 0;
`;

export const Title = styled.h1`
  font-size: 32px;
`;

export const MiniLabelWrapper = styled(FlexWrapper)`
  margin: 2.2489vh 0;

`;
export const MiniLabelContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 100%;
  width: 100%;
  flex-grow: 1;
  border-radius: 10px;
  background: ${colors.green};
`;

export const BluePlateWrapper = styled.div`
  margin-left: 10px;
  width: 23.46667vw;
  height: 7.7961vh;
  flex-grow: 1;
`;

export const BluePlateStyled = styled(BluePlate)`
  height: 100%;
`;
export const MiniTitle = styled(Description)`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ButtonStyled = styled(Button)`
  width: 39.2vw;
  min-width: 147px;
  height: 7.7961vh;
  min-height: 50px;
  font-size: 20px;
  border-radius: 27px;
  margin: 3.5982vh 5.3vh 0 auto;
`;

export const TopLineStyled = styled(TopLine)`
  width: 100%;
  height: 42.666vw;
`;

export const BottomLineStyled = styled(BottomLine)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const AtomStyledWrapper = styled.div`
  position: absolute;
  right: 0;
  height: 21.8666vw;
  width: 8vw;
  top: 17.5412vh;
  overflow: hidden;
`;

export const AtomStyled = styled(Atom)`
  height: 100%;
`;

export const SmallCircleStyled = styled(SmallCircle)`
  position: absolute;
  right: 11.4666vw;
  bottom: 2.6987vh;
  z-index: 3;
  height: 14.4vw;
  width: 14.4vw;
`;

export const ContentWrapperStyled = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
`;