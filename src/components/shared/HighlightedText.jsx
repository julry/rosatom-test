import styled from 'styled-components';
import { colors } from '../../constants/colors';

const Highlighted = styled.span`
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 1.4em;
    z-index: -1;
    border-radius: 0.87em;
    top: calc(0.7em + 1px);
    left: ${({isFirstWord}) => isFirstWord ? '-0.43em' : '-0.18em'};
    position: absolute;
    transform: translateY(-50%);
    background: ${colors.lightGreen};
    padding: 0 ${({isFirstWord}) => isFirstWord ? '0.33em' : '0.22em'};
  }
`;

export const HighlightedText = (props) => (
    <Highlighted isFirstWord={props.isFirstWord}>{props.children}</Highlighted>
);
