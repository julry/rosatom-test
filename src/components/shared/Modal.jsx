import React from 'react';
import styled from 'styled-components';
import { CloseIcon } from './svg/CloseIcon';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`;

const BackgroundModal = styled(Wrapper)`
  z-index: 1;
  opacity: 80%;
  background: black;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 66.8vw;
  padding: 5.847vh 6.9333vw 4.6476vh;
  background: white;
  max-width: 310px;
  font-weight: 300;
  
  @media screen and (min-width: 1000px) {
    padding: 32px;
  }
`;

const CloseIconStyled = styled(CloseIcon)`
  position: absolute;
  top: 1.9vh;
  right: 1.9vh;
  max-width: 13px;
  max-height: 13px;
  width: 1.9vh;
  height: 1.9vh;

  & svg {
    height: 100%;
  }
`;


export const Modal = (props) => (
    <Wrapper>
        <BackgroundModal onClick={props.onClose}/>
        <ContentWrapper>
            {props.onClose && <CloseIconStyled onClick={props.onClose}/>}
            {props.children}
        </ContentWrapper>
    </Wrapper>
);
