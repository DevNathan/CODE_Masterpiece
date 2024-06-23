import React from 'react';
import S from "./styled";
import {useTheme} from "../../context/ThemeContext";

const Planet4 = () => {
    const [themeMode] = useTheme();

    return (
        <svg width="196" height="124" viewBox="0 0 196 124" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_218_1915" maskUnits="userSpaceOnUse" x="35" y="0" width="124"
                  height="124">
                <circle cx="97" cy="62" r="62" fill="white"/>
            </mask>
            <g mask="url(#mask0_218_1915)">
                <S.Circle cx="97" cy="62" r="62" fill={themeMode === 'light' ? "#EDBB7E" : "#39AECB"}/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M130.784 113.996C130.523 113.999 130.262 114 130 114C91.3401 114 60 82.6599 60 44C60 29.7509 64.2575 16.4961 71.5698 5.43848C50.0097 15.147 35 36.8206 35 62C35 96.2416 62.7583 124 97 124C109.462 124 121.065 120.323 130.784 113.996Z"
                      fill="black" fillOpacity="0.3"/>
            </g>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M153.408 36.2323C207.32 36.5675 152.566 88.8029 92.2222 97.2835C31.1443 105.867 24.4639 97.2835 21.6008 88.6997C19.2101 81.5319 30.1284 73.034 34.907 69.3148C35.0739 69.1849 35.2333 69.0608 35.3844 68.9428C35.1304 66.6636 35 64.347 35 62C35 60.6832 35.041 59.3759 35.1219 58.0795C-16.3171 83.5434 -4.75155 108.76 28.2813 111.59C57.7731 114.116 110.355 104.913 147.574 85.8382C184.793 66.7632 205.789 43.8733 191.474 33.382C181.446 26.0331 160.444 25.4601 147.686 26.2849C149.886 29.401 151.805 32.729 153.408 36.2323Z"
                  fill="#D9D9D9"/>
        </svg>

    );
};

export default Planet4;