import styled from 'styled-components';
import { colors } from '../../constants/colors';

const Highlighted = styled.span`
  position: relative;
    &::before{
      content: '';
      width: 100%;
      height: 1.4em;
      z-index: -1;
      border-radius: 20px;
      top: 0.7em;
      left: ${({isFirstWord}) => isFirstWord ? '-10px' : '-5px'};
      position: absolute;
      transform: translateY(-50%);
      background: ${colors.lightGreen};
      padding: 0 5px 0 ${({isFirstWord}) => isFirstWord ? '10px' : '5px'};
    }
`;

export const HighlightedText = (props) => (
    <Highlighted isFirstWord={props.isFirstWord}>{props.children}</Highlighted>
)