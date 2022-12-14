import styled from 'styled-components';
import { FlexWrapper } from '../../shared/FlexWrapper';
import { colors } from '../../../constants/colors';
import { BluePlate } from '../../shared/svg/BluePlate';
import { Description } from '../../shared/styledTexts';
import { Button } from '../../shared/Button';
import { TopLine } from './svg/TopLine';
import { BottomLine } from './svg/BottomLine';
import { Atom } from '../../shared/svg/Atom';
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

  @media screen and (min-width: 450px) {
    bottom: 8%;
  }

  @media screen and (max-width: 320px) {
    font-size: 13px;
  }

  @media screen and (min-width: 700px) {
    font-size: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  
  @media screen and (max-height: 600px) {
    font-size: 28px;
  }

  @media screen and (max-width: 320px) {
    font-size: 24px;
  }
`;

export const MiniLabelWrapper = styled(FlexWrapper)`
  margin: 2.2489% 0;
  min-height: 7.7961vh;
  
  @media screen and (min-height: 700px) {
    margin: 3.2% 0;
    min-height: unset;
    height: ${({hasShortLabel}) => hasShortLabel ? '52px' : 'auto'};
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

  @media screen and (min-width: 700px) {
    justify-content: center;
  }
`;

export const BluePlateWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  margin-left: 10px;
  width: calc(30% - 10px);
  height: 52px;

  @media screen and (min-height: 700px){
    width: calc(36% - 10px);
  }
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
  max-width: 200px;
  max-height: 60px;
  font-size: 20px;
  border-radius: 27px;
  
  @media screen and (max-width: 325px) {
    min-height: 30px;
    height: 35px;
    min-width: 110px;
    font-size: 14px;
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
  };

  @media screen and (max-height: 550px) {
    height: 30vw;
  };
`;
export const TopLineStyled = styled(TopLine)`
  width: 100%;
  height: 100%;
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


export const ContentWrapperStyled = styled(ContentWrapper)`
  display: grid;
  font-size: 12px;
  grid-template-rows: minmax(42.666vw, 160px) minmax(15.58em, 275px) 1fr;
  grid-template-columns: 1fr;

  @media screen and (min-height: 750px) and (max-width: 700px){
    grid-template-rows: minmax(42.666vw, 160px) minmax(15.58em, 300px) 1fr;
  }
  
  @media screen and (max-height: 650px) {
    grid-template-rows: minmax(35vw, 130px) minmax(15.58em, 275px) 1fr;
  }

  @media screen and (max-height: 550px) {
    grid-template-rows: minmax(30vw, 110px) minmax(15.58em, 275px) 1fr;
  }
  
  @media screen and (min-width: 700px) {
    overflow-x: visible;
    grid-template-rows: 24vh 330px 1fr;
  }
`;

export const ImageStyled = styled.div`
  position: absolute;
  z-index: 2;
  ${({styles}) => styles};
  max-height: 37vh;

  & svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 400px) and (min-height: 550px) {
    max-height: calc(76vh - 64px - 20em);
  }
  
  @media screen and (max-height: 580px) and (min-width: 335px){
    max-height: calc(38vh - 64px);
  }
`;

export const Content = styled.div`
  min-height: 15.58em;
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
  bottom: ${({bottom}) => bottom};
  left: 0;
  width: 100%;
`;

export const DescriptionStyled = styled(Description)`
  min-height: 8.2em;
  
  @media screen and (max-width: 374px) {
    white-space: normal;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 10.9333vw;
  top: ${({top}) => top};
  height: calc(100vw / (375 / 167));
  
  @media screen and (min-width: 700px) {
    right: 0;
  }
`;

export const ButtonTextContainer = styled(FlexWrapper)`
  margin-top: 3px;
  justify-content: center;
  & p {
    color: white;
    font-size: 8px;
  }
`;

export const Emoji = styled.p`
  font-size: 29px !important;
  margin-right: 4px;
`