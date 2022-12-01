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
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const SubTitle = styled.p`
  position: absolute;
  bottom: 8vw;
  left: 5.5vw;
  font-size: 15px;
  font-weight: bold;
  
  @media screen and (min-width: 450px){
    bottom: 8%;
  }

  @media screen and (max-width: 320px){
    font-size: 13px;
  }
  
  @media screen and (min-width: 700px){
    font-size: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  @media screen and (max-height: 600px){
    font-size: 28px;
  }
  
  @media screen and (max-width: 320px){
    font-size: 24px;
  }
`;

export const MiniLabelWrapper = styled(FlexWrapper)`
  margin: 2.2489% 0;
  @media screen and (min-height: 700px) {
    margin: 3.2% 0;
  }
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
  margin-right: ${({hasShortLabel}) => hasShortLabel ? '-0.3vw' : 0};
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
  position: absolute;
  top: -3.4vh;
  right: 5.4333vw;
  z-index: 10;
  width: 39.2vw;
  min-width: 147px;
  height: 7.7961vh;
  min-height: 50px;
  max-width: 200px;
  max-height: 60px;
  font-size: 20px;
  border-radius: 27px;
  
  @media screen and (min-width: 700px){
    top: auto;
    bottom: 28.4vh;
  }
`;

export const TopLineWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 42.666vw;
  max-height: 24vh;
  max-width: 450px;
  @media screen and (max-height: 650px) {
    height: 35vw;
  }
`
export const TopLineStyled = styled(TopLine)`
  width: 100%;
  height: 100%;
  @media screen and (min-width: 700px) {
    display: none
  }
`;

export const BottomLineWrapperStyled = styled.div`
  position: absolute;
  display: flex;
  flex-shrink: 0;
  bottom: ${({ bottom }) => bottom};
  left: 0;
  width: 100vw;
  
  @media screen and (min-width: 700px) {
    bottom: 0;
  }
`;

export const BottomLineStyled = styled(BottomLine)`
  width: 100%;
  flex-shrink: 0;
  @media screen and (min-width: 700px) {
    display: none
  }
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
  @media screen and (min-width: 700px) {
    display: none
  }
`;

export const ContentWrapperStyled = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: 700px){
    overflow-x: visible;
  }
`;

export const ImageStyled = styled.div`
  position: absolute;
  z-index: 2;
  ${({ styles }) => styles};
  max-height: 37vh;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  padding: 0 5.5vw;
`;


export const TopLineStyledBg = styled(TopLine)`
  width: 100%;
  height: 42.666vw;
  max-height: 24vh;
  @media screen and (max-width: 699px) {
    display: none
  }
`;

export const BottomLineStyledBg = styled(BottomLine)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  @media screen and (max-width: 699px) {
    display: none
  }
`;


export const SmallCircleStyledBg = styled(SmallCircleStyled)`
  position: absolute;
  right: 11.4666vw;
  bottom: 2.6987vh;
  z-index: 3;
  height: 14.4vw;
  width: 14.4vw;
  @media screen and (max-width: 699px) {
    display: none
  }
  @media screen and (min-width: 700px) {
    display: block;
  }
`;