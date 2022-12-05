import styled from 'styled-components';
import { Logo } from './svg/Logo';

const LogoWrapper = styled.div`
  position: absolute;
  top: 5.3vw;
  right: 5.3vw;
  z-index: 1000;
  height: 9.333vh;
  width: 16.8vw;
  min-width: 64px;
  min-height: 63px;
  max-width: 120px;
  max-height: 120px;
`;

const StyledLogo = styled(Logo)`
  width: 100%;
  height: 100%;
`;

export const LogoStyled = (props) => (
    <LogoWrapper {...props}>
        <StyledLogo/>
    </LogoWrapper>
);
