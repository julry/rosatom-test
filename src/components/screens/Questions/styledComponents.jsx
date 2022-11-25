import styled from 'styled-components';
import { swipe } from '../../shared/keyframes';
import { ContentWrapper } from '../../shared/wrappers';
import { FlexWrapper } from '../../shared/FlexWrapper';
import { Button } from '../../shared/Button';
import { colors } from '../../../constants/colors';
import { Line } from './svg/Line';
import { AddictiveElement } from './svg/AddictiveElement';
import { Atom } from './svg/Atom';
import { SmallCircle } from './svg/SmallCircle';
import { TopLine } from './svg/TopLine';

export const StyledCard = styled.div`
  position: absolute;
  height: 100%;
  padding: 7.4962vh 8.2666vw 0;
  font-size: 20px;
  background-color: white;
  left: 0;
  right: 0;
  top: ${({hadSkipped}) => hadSkipped ? '100vh' : '0'};
  animation: ${({currentSkipped, isAgreed}) => currentSkipped ? swipe(isAgreed) : 'none'};
  animation-duration: 0.95s;
  animation-timing-function: cubic-bezier(.57,.21,.69,3.25);
  animation-fill-mode: forwards;
  z-index: ${({index}) => 100 + index};
`;

export const StyledContentCard = styled(ContentWrapper)`
  display: grid;
  grid-template-rows: 1.15em minmax(7.6em, 25.5vh) minmax(10.4948vh, 70px) 1fr;
  grid-row-gap: 1.73em;
`;

export const StyledAmount = styled.span`
  font-size: 20px;
  color: ${({isAddLine}) => isAddLine ? 'white' : colors.darkBlue}
`;

export const StyledRemainingCards = styled.span`
  color: ${({isAddLine}) => isAddLine ? 'rgba(255,255,255,0.3)' : 'rgba(0, 0, 0, 0.3)'};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  font-weight: 400;
  font-size: 23px;
  line-height: 33px;
  letter-spacing: -0.01em;
`;

export const ButtonsWrapper = styled(FlexWrapper)`
  justify-content: space-between;
  padding: 0 7.2vw;
`;

export const AnswerButton = styled(Button)`
  width: 10.4948vh;
  height: 10.4948vh;
  max-width: 70px;
  max-height: 70px;
  border-radius: 50%;
  
  & svg {
    width: 8.0453vh;
    height: 7.784vh;
    max-width: 31px;
    max-height: 30px;
  }
`;

export const NoBtn = styled(AnswerButton)`
  background: ${colors.blue};
  box-shadow: 0 0 10px #B6CE38;
  & svg {
    margin-top: 0.27vw;
  }
`;

export const YesBtn = styled(AnswerButton)`
  background: ${colors.green};
  box-shadow: 0 0 10px #003274;
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
  flex-shrink: 1;
`;

export const LineStyled = styled(Line)`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export const ImageStyled = styled.div`
  position: relative;
  z-index: 2;
  ${({ styles }) => styles};

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const AddictiveElementStyled = styled(AddictiveElement)`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 23.838vh;
  width: 24vw;
  height: 24vw;
  min-width: 40px;
  min-height: 40px;
`;

export const AtomStyled = styled(Atom)`
  position: absolute;
  right: 0;
  height: 21.6613vw;
  width: 10.8307vw;
  top: 31.1844vh;
`;

export const SmallCircleStyled = styled(SmallCircle)`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 3;
  height: 11.4666vw;
  width: 12.5333vw;
`;

export const TopLineStyled = styled(TopLine)`
  position: absolute;
  top: 0;
  left: 0;
  width: 50.1333vw;
  height: 16.7916vh;
`;