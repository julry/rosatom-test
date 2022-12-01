import { keyframes } from 'styled-components';

export const shining = (shadowColor) => keyframes`
  0% {
    box-shadow: 0 0 10px ${shadowColor};
  }
  70% {
    box-shadow: 0 0 10px 2px ${shadowColor};
  }
  100% {
    box-shadow: 0 0 10px ${shadowColor};
  }
`;