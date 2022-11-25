import { colors } from '../../../../constants/colors';

export const SmallCircle = (props) => {
    const {isFun, ...restProps} = props;
    return (
        <svg {...restProps} viewBox="0 0 47 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="27.6598" cy="27.0881" r="26.9045" fill={isFun ? colors.green : colors.blue} />
            <path
                d="M38.6983 24.0789C38.6983 30.896 33.2059 36.3875 26.3877 36.3875C20.8952 36.4822 16.4445 32.0322 16.4445 26.5407C16.4445 22.1853 19.9483 18.6821 24.3043 18.6821C27.8081 18.6821 30.649 21.5226 30.649 25.0258C30.649 27.7715 28.3763 30.0439 25.6301 30.0439C23.3574 30.0439 21.5581 28.2449 21.5581 25.9726"
                stroke={isFun ? colors.blue : colors.green} strokeWidth="0.694309" strokeMiterlimit="10"
            />
        </svg>
    );
};