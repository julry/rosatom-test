import styled from 'styled-components';
import { MDCat } from '../../Questions/svg/MDCat';

const SvgStyled = styled(MDCat)`
  transform: scale(-1, 1);
`;

export const RitaFinalCat = (props) => (
    <SvgStyled {...props} />
)