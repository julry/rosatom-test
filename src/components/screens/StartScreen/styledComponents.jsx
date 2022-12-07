import styled from 'styled-components';
import { FlexWrapper } from '../../shared/FlexWrapper';
import { Atom } from '../../shared/svg/Atom';
import { Button } from '../../shared/Button';
import { BoldText, ColoredText, RegularText } from '../../shared/styledTexts';
import { InfoIcon } from '../../shared/svg/InfoIcon';
import { GreenLine } from './svg/GreenLine';
import { TopBlueLine } from './svg/TopBlueLine';
import { BottomBlueLine } from './svg/BottomBlueLine';
import { StartCat } from './svg/StartCat';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 14.6vh 5.6vw 0;
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled(BoldText)`
  font-size: 35px;
  text-transform: uppercase;

  @media screen and (max-width: 360px) {
    font-size: 25px;
  }
`;

export const DescrWrapper = styled(FlexWrapper)`
  margin: 3.5982vh 0 3.8981vh;
`;

export const AtomStyled = styled(Atom)`
  min-height: 81px;
  min-width: 81px;
  width: 21.6vw;
  height: 21.6vw;
  margin-right: 5.6vw;
`;


export const ButtonStyled = styled(Button)`
  width: 100%;
  max-width: 500px;
  border-radius: 30px;
  font-size: 30px;
  height: 63px;
`;

export const InfoWrapper = styled.span`
  position: relative;
`;

export const InfoSignWrapper = styled.span`
  position: absolute;
  top: -0.25em;
  left: -0.25em;
  height: 1em;
  width: 1em;
`;

export const InfoSignStyled = styled(InfoIcon)`
  width: 100%;
  height: 100%;
`;

export const ModalText = styled(RegularText)`
  font-size: 14px;
  line-height: 17px;
  font-weight: 300;

  @media screen and (max-width: 330px) {
    font-size: 10px;
    line-height: 13px;
  }
`;

export const GreenLineStyled = styled(GreenLine)`
  height: 100%;
`;

export const TopBlueLineStyled = styled(TopBlueLine)`
  position: absolute;
  top: 0;
  left: 0;
  width: 20.8vw;
  max-width: 78px;
  min-width: 40px;
`;

export const BottomBlueLineStyled = styled(BottomBlueLine)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 6.666vw;
  max-width: 25px;
  min-width: 15px;
`;

export const StyledCat = styled(StartCat)`
  margin: 4.1979vh 0 0 8.2666vw;
  width: 67.4666vw;
  height: 33.7333%;
`;

export const ColoredTextStyled = styled(ColoredText)`
  text-transform: uppercase;
`;
