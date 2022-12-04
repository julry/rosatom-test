import styled from 'styled-components';

export const ContentWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 2;
  
  @media screen and (min-width: 700px) {
    max-width: 550px;
    margin: 0 auto;
    & svg {
      max-width: 350px;
    }
  }
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
  overflow: hidden;
`;