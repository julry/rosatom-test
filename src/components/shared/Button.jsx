import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { shining } from './keyframes';

const StyledButton = styled.button`
  outline: none;
  border: none;
  color: ${({clicked}) => clicked ? colors.blue : colors.green };
  background: ${({clicked}) => clicked ? colors.green : colors.blue };
  font-weight: 700;
  text-transform: uppercase;
  box-shadow: 0 0 10px #AFD000;
  animation: ${({shadowColor}) => shining(shadowColor ?? colors.green)} 4s infinite;
`;

export const Button = (props) => {
    const {onClick, ...restProps} = props;
    const [clicked, setClicked] = useState(false);
    const onBtnClick = () => {
        setClicked(true);
        onClick();
        setTimeout( () => {
            setClicked(false)
        }, 700)
    }
    return <StyledButton onClick={onBtnClick} {...restProps} clicked={clicked}>{props.children}</StyledButton>
};
