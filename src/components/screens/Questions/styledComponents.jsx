import styled from 'styled-components';
import { ContentWrapper } from '../../shared/wrappers';
import { FlexWrapper } from '../../shared/FlexWrapper';
import { Button } from '../../shared/Button';
import { colors } from '../../../constants/colors';
import { Line } from './svg/Line';
import { AddictiveElement } from './svg/AddictiveElement';
import { Atom } from '../../shared/svg/Atom';
import { SmallCircle } from '../../shared/svg/SmallCircle';
import { TopLine } from './svg/TopLine';

export const StyledCard = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 7.4962vh 8.2666vw 0;
  font-size: 20px;
  background-color: white;
  z-index: ${({index}) => 100 + index};
`;

export const StyledContentCard = styled(ContentWrapper)`
  display: grid;
  grid-template-rows: 1.15em minmax(7.6em, 25.5%) minmax(10.4948%, 70px) 1fr;
  grid-row-gap: 1.73em;
`;

export const StyledAmount = styled.span`
  font-size: 20px;
  color: ${({isAddLine}) => isAddLine ? 'white' : colors.darkBlue};
  
  @media screen and (min-width: 700px){
    font-size: 33px;   
  }
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
  
  @media screen and (max-height: 650px){
    font-size: 20px;
    line-height: 30px;
  }

  @media screen and (max-width: 330px){
    font-size: 18px;
    line-height: 28px;
  }
  
  @media screen and (min-width: 700px) {
    font-size: 35px;
    line-height: 45px;
  }
`;

export const ButtonsWrapper = styled(FlexWrapper)`
  justify-content: space-between;
  padding: 0 7.2vw;
  z-index: 200;
`;

export const AnswerButton = styled(Button)`
  width: 10.4948vh;
  height: 10.4948vh;
  max-width: 90px;
  max-height: 90px;
  border-radius: 50%;
  transform: ${({clicked}) => clicked ? 'scale(0.7)' : 'none' };
  ${({clicked}) => clicked && 'animation: none'};
  & svg {
    width: 8.0453vh;
    height: 7.784vh;
    max-width: 41px;
    max-height: 40px;
  }
`;

export const NoBtn = styled(AnswerButton)`
  background: ${colors.blue};
  box-shadow: ${({clicked}) => clicked ? '' : ' 0 0 10px #B6CE38' };
  & svg {
    margin-top: 0.27vw;
  }
`;

export const YesBtn = styled(AnswerButton)`
  background: ${colors.green};
  box-shadow: ${({clicked}) => clicked ? '' : ' 0 0 10px #003274' };
`;


export const LineStyled = styled(Line)`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export const ImageStyled = styled.div`
  position: absolute;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
  ${({ styles }) => styles};
  max-height: 33vh;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const AddictiveElementStyled = styled(AddictiveElement)`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 23.838%;
  width: 24vw;
  height: 24vw;
  min-width: 40px;
  min-height: 40px;
  max-height: 14vh;


  @media screen and (max-height: 600px) {
    width: 19vw;
    height: 16%;
  }

  @media screen and (min-width: 700px) {
    left: -20%;
  }
`;

export const AtomStyledWrapper = styled.div`
  position: absolute;
  right: 0;
  height: 21.6613vw;
  width: 10.8307vw;
  top: 31.1844%;
  overflow: hidden;
  z-index: 3;
`;

export const AtomStyled = styled(Atom)`
  height: 100%;
`;

export const SmallCircleStyledWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 3;
  overflow: hidden;
  height: 11.4666vw;
  width: 12.5333vw;
`;

export const SmallCircleStyled = styled(SmallCircle)`
  width: 14.4vw;
  height: 14.4vw;
`;

export const TopLineStyled = styled(TopLine)`
  position: absolute;
  top: 0;
  left: 0;
  width: 50.1333vw;
  height: 16.7916%;
`;