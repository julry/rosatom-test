import { colors } from '../../../../constants/colors';

export const Line = (props) => {
    const {isFun, ...restProps} = props;
    return (
        <svg {...restProps} viewBox="0 0 375 490" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-36.7403 234.891C9.87812 299.391 193.031 507.595 325.173 462.477C457.315 417.36 354.256 72.02 493.577 38.8327C632.898 5.64536 780.646 352.136 801.521 362.2" stroke={isFun ? colors.blue : '#B6CE38'} strokeWidth="72.9024"/>
        </svg>
    );
};

