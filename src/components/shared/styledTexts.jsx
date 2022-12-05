import styled from 'styled-components';

export const BoldText = styled.p`
  font-weight: 700;
`;

export const RegularText = styled.p`
  font-weight: 400;
`;

export const Title = styled(BoldText)`
  font-size: 17px;

  @media screen and (max-width: 330px) {
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    font-size: 19px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 20px;
  }
`;

export const ColoredText = styled.span`
  color: ${({color}) => color};
`;

export const Description = styled(RegularText)`
  font-size: 12px;

  @media screen and (max-width: 330px) {
    white-space: initial;
    font-size: 11px;
  }

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 17px;
  }
`;
