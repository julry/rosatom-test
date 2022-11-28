import { colors } from '../../../../constants/colors';

export const AddictiveElement = (props) => {
    const {isFun, ...restProps} = props;
    return (
        <svg {...restProps} viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.3189 68.7016L14.3189 80.8605L9.11157 80.8605L9.11157 68.7016L11.2217 68.7016L11.2217 11.8496L11.2217 11.3289L11.7424 11.3289L68.6597 11.3289L68.6597 9.12504L80.8124 9.12504L80.8124 14.3324L68.6597 14.3324L68.6597 12.3703L12.2631 12.3703L12.2631 68.7016L14.3189 68.7016Z" stroke={isFun ? colors.blue : colors.green} />
            <path d="M14.3189 80.8605L14.3189 89.5393C19.1121 89.5393 22.9978 85.6537 22.9978 80.8605L14.3189 80.8605ZM14.3189 68.7016L22.9978 68.7016C22.9978 63.9084 19.1121 60.0228 14.3189 60.0228L14.3189 68.7016ZM9.11157 80.8605L0.43271 80.8605C0.43271 85.6537 4.31837 89.5393 9.11157 89.5393L9.11157 80.8605ZM9.11157 68.7016L9.11157 60.0228C4.31837 60.0228 0.432709 63.9084 0.432709 68.7016L9.11157 68.7016ZM11.2217 68.7016L11.2217 77.3805C16.0149 77.3805 19.9005 73.4948 19.9005 68.7016L11.2217 68.7016ZM11.2217 11.3289L11.2217 2.64999C6.42846 2.64999 2.5428 6.53565 2.5428 11.3289L11.2217 11.3289ZM68.6597 11.3289L68.6597 20.0077C73.4529 20.0077 77.3385 16.1221 77.3385 11.3289L68.6597 11.3289ZM68.6597 9.12504L68.6597 0.44618C63.8665 0.44618 59.9808 4.33184 59.9808 9.12504L68.6597 9.12504ZM80.8124 9.12504L89.4913 9.12506C89.4913 6.82328 88.5769 4.61577 86.9493 2.98816C85.3217 1.36056 83.1142 0.446179 80.8124 0.446179L80.8124 9.12504ZM80.8124 14.3324L80.8124 23.0112C85.6056 23.0112 89.4913 19.1256 89.4913 14.3324L80.8124 14.3324ZM68.6597 14.3324L59.9808 14.3324C59.9808 16.6341 60.8952 18.8416 62.5228 20.4692C64.1504 22.0968 66.3579 23.0112 68.6597 23.0112L68.6597 14.3324ZM68.6597 12.3703L77.3385 12.3703C77.3385 10.0685 76.4241 7.86104 74.7965 6.23344C73.1689 4.60583 70.9614 3.69146 68.6597 3.69146L68.6597 12.3703ZM12.2631 12.3703L12.2631 3.69146C7.46992 3.69146 3.58426 7.57712 3.58426 12.3703L12.2631 12.3703ZM12.2631 68.7016L3.58426 68.7016C3.58426 73.4948 7.46992 77.3805 12.2631 77.3805L12.2631 68.7016ZM22.9978 80.8605L22.9978 68.7016L5.64003 68.7016L5.64003 80.8605L22.9978 80.8605ZM9.11157 89.5393L14.3189 89.5393L14.3189 72.1816L9.11157 72.1816L9.11157 89.5393ZM0.432709 68.7016L0.43271 80.8605L17.7904 80.8605L17.7904 68.7016L0.432709 68.7016ZM11.2217 60.0228L9.11157 60.0228L9.11157 77.3805L11.2217 77.3805L11.2217 60.0228ZM19.9005 68.7016L19.9005 11.8496L2.5428 11.8496L2.5428 68.7016L19.9005 68.7016ZM19.9005 11.8496L19.9005 11.3289L2.5428 11.3289L2.5428 11.8496L19.9005 11.8496ZM11.2217 20.0077L11.7424 20.0077L11.7424 2.64999L11.2217 2.64999L11.2217 20.0077ZM11.7424 20.0077L68.6597 20.0077L68.6597 2.64999L11.7424 2.64999L11.7424 20.0077ZM59.9808 9.12504L59.9808 11.3289L77.3385 11.3289L77.3385 9.12504L59.9808 9.12504ZM80.8124 0.446179L68.6597 0.44618L68.6597 17.8039L80.8124 17.8039L80.8124 0.446179ZM89.4913 14.3324L89.4913 9.12506L72.1336 9.12503L72.1336 14.3323L89.4913 14.3324ZM68.6597 23.0112L80.8124 23.0112L80.8124 5.6535L68.6597 5.6535L68.6597 23.0112ZM59.9808 12.3703L59.9808 14.3324L77.3385 14.3324L77.3385 12.3703L59.9808 12.3703ZM68.6597 3.69146L12.2631 3.69146L12.2631 21.0492L68.6597 21.0492L68.6597 3.69146ZM3.58426 12.3703L3.58426 68.7016L20.942 68.7016L20.942 12.3703L3.58426 12.3703ZM14.3189 60.0228L12.2631 60.0228L12.2631 77.3805L14.3189 77.3805L14.3189 60.0228Z" fill={isFun ? colors.green : colors.blue}/>
            <g clipPath="url(#clip0_373_606)">
                <path d="M80.6179 11.7772H68.4675" stroke={isFun ? colors.blue : colors.green} strokeWidth="5.20732" strokeMiterlimit="10"/>
                <path d="M11.5342 80.861L11.5342 68.7106" stroke={isFun ? colors.blue : colors.green} strokeWidth="5.20732" strokeMiterlimit="10"/>
                <path d="M11.5613 68.8353L11.5613 11.8979L68.4987 11.8979" stroke={isFun ? colors.blue : colors.green} strokeWidth="1.73577" strokeMiterlimit="10"/>
            </g>
            <defs>
                <clipPath id="clip0_373_606">
                    <rect width="74.6382" height="74.6382" fill="white" transform="translate(8.06274 83.291) rotate(-90)"/>
                </clipPath>
            </defs>
        </svg>

    )
}