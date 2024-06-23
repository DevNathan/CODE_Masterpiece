import React from 'react';
import S from "./styled";
import {useTheme} from "../../context/ThemeContext";

const Planet3 = () => {
    const [themeMode] = useTheme();

    return (
        <svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_217_1891" maskUnits="userSpaceOnUse" x="0" y="0" width="124"
                  height="124">
                <circle cx="62" cy="62" r="62" fill="white"/>
            </mask>
            <g mask="url(#mask0_217_1891)">
                <S.Circle cx="62" cy="62" r="62" fill={themeMode === 'light' ? "#BA0437" : "#3AC69F"}/>
                <path
                    d="M0.5 52.5001C18.5 53.5001 50.3 39.9001 55.5 37.5001C69.5 31.0386 96 22.5 107 19M3 42.5L16 38L31.5 32.5L70.5 19L97 9.5M7.5 31.5C19.5 23.5 39.5 14.5 49.5 12.5L83.5 3.5M20 16C24.5 13 37.3 6.1 52.5 2.5C56 1.67105 62 -0.166667 62.5 -0.5M1 75C24 66.5 35 64 57.5 63C74.7239 62.2345 82 64.3784 95.5 60C114 54 119.5 47.5 122 44.5M5 87.5C26 86.5 29 88.5 61 81C93.0333 73.4922 115.5 66 124.5 66M12.5 100.5C23.8333 97.6667 46.5 93 75 87.5C101.2 82.4439 114 81 121 81.5M22.5 110.5C67 99.5 67 99.5 114.5 95.5M99 112.5L70 116L40.5 120.5"
                    stroke="white"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M48.6119 122.551C75.1298 112.59 94 86.9984 94 56.9999C94 33.5305 82.4501 12.7588 64.7242 0.0587158C97.7019 1.48447 124 28.6711 124 61.9999C124 96.2416 96.2417 124 62 124C57.4033 124 52.9235 123.5 48.6119 122.551Z"
                      fill="black" fillOpacity="0.3"/>
            </g>
        </svg>
    );
};

export default Planet3;