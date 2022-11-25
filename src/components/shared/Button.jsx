import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { shining } from './keyframes';

const StyledButton = styled.button`
  outline: none;
  border: none;
  color: ${colors.green};
  background: ${colors.blue};
  font-weight: 700;
  text-transform: uppercase;
  box-shadow: 0 0 10px #AFD000;
  animation: ${({shadowColor}) => shining(shadowColor ?? colors.green)} 4s infinite;
`;

export const Button = (props) => {
    return <StyledButton {...props}>{props.children}</StyledButton>
};
