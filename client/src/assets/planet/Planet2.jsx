import React from 'react';
import {useTheme} from "../../context/ThemeContext";
import S from "./styled";

const Planet2 = () => {
    const [themeMode] = useTheme();

    return (
        <svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_201_1921" maskUnits="userSpaceOnUse" x="0" y="0" width="124"
                  height="124">
                <circle cx="62" cy="62" r="62" fill="white"/>
            </mask>
            <g mask="url(#mask0_201_1921)">
                <S.Circle cx="62" cy="62" r="62" fill={themeMode === 'light' ? "#EDBB7E" : "#39AECB"}/>
                <path
                    d="M47.5 78C47.5 80.2575 46.0759 82.3704 43.6291 83.9434C41.1877 85.5129 37.7846 86.5 34 86.5C30.2154 86.5 26.8123 85.5129 24.3709 83.9434C21.9241 82.3704 20.5 80.2575 20.5 78C20.5 75.7425 21.9241 73.6296 24.3709 72.0566C26.8123 70.4871 30.2154 69.5 34 69.5C37.7846 69.5 41.1877 70.4871 43.6291 72.0566C46.0759 73.6296 47.5 75.7425 47.5 78Z"
                    stroke="white"/>
                <path
                    d="M36.5 78C36.5 78.3331 36.2975 78.6959 35.844 78.9982C35.394 79.2982 34.7435 79.5 34 79.5C33.2565 79.5 32.606 79.2982 32.156 78.9982C31.7025 78.6959 31.5 78.3331 31.5 78C31.5 77.6669 31.7025 77.3041 32.156 77.0018C32.606 76.7018 33.2565 76.5 34 76.5C34.7435 76.5 35.394 76.7018 35.844 77.0018C36.2975 77.3041 36.5 77.6669 36.5 78Z"
                    stroke="white"/>
                <path
                    d="M56 16H76M59 63.5H74.5M32.5 20H35M3.5 77H13.5M19 52.5C20.2 52.5 37.8333 52.5 46.5 52.5M96 47.5H111M113 79H51.5"
                    stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M14.5 36H85.5M69.5 102C69.9 102 96.6667 102 110 102M91.5 90.5H103.5M56.5 115.5H67.5"
                      stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M92.4123 116.041C111.268 105.407 124 85.1905 124 62C124 27.7583 96.2417 0 62 0C56.1182 0 50.4278 0.819027 45.0364 2.34925C80.3922 5.87819 108 35.715 108 72C108 88.6884 102.16 104.013 92.4123 116.041Z"
                      fill="black" fillOpacity="0.3"/>
            </g>
        </svg>
    );
};

export default Planet2;