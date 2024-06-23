import {useTheme} from "../../context/ThemeContext";
import S from "./styled";

const Planet1 = () => {
    const [themeMode] = useTheme();

    return (
        <svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_195_1893" maskUnits="userSpaceOnUse" x="0" y="0" width="124" height="124">
                <circle cx="62" cy="62" r="62" fill="white"/>
            </mask>
            <g mask="url(#mask0_195_1893)">
                <S.Circle cx="62" cy="62" r="62" fill={themeMode === 'light' ? "#BA0437" : "#3AC69F"}/>
                <circle cx="8" cy="81" r="1" fill="#D9D9D9"/>
                <circle cx="23" cy="87" r="1" fill="#D9D9D9"/>
                <ellipse cx="56.5" cy="119" rx="1.5" ry="1" fill="#D9D9D9"/>
                <circle cx="78" cy="21" r="3" fill="#D9D9D9"/>
                <circle cx="96.5" cy="45.5" r="1.5" fill="#D9D9D9"/>
                <circle cx="33" cy="22" r="1" fill="#D9D9D9"/>
                <circle cx="25" cy="25" r="1" fill="#D9D9D9"/>
                <circle cx="40" cy="15" r="1" fill="#D9D9D9"/>
                <circle cx="28.5" cy="44.5" r="2.5" fill="#D9D9D9"/>
                <circle cx="95" cy="95" r="4" fill="#D9D9D9"/>
                <circle cx="72" cy="105" r="2" fill="#D9D9D9"/>
                <circle cx="48.5" cy="104.5" r="1.5" fill="#D9D9D9"/>
                <circle cx="34" cy="110" r="1" fill="#D9D9D9"/>
                <circle cx="63.5" cy="74.5" r="1.5" fill="#D9D9D9"/>
                <path
                    d="M8.99999 28C7.99999 35.5 7.29999 47.7 12.5 36.5C19 22.5 53.5 -7.49998 48 12C42.5 31.5 79 7.5 79.5 2"
                    stroke="white" strokeWidth="3"/>
                <path
                    d="M0.0293577 60.1402C-0.138105 60.8157 0.330791 62.2679 3.54608 62.6732C7.56519 63.1798 71.871 68.2458 99 11"
                    stroke="white" strokeWidth="3"/>
                <path
                    d="M121 42C104.5 90.8312 36.5 106.416 7 90.8312C6.2 90.4156 6 90.3117 6 90.3117M42.5 122C43.8333 119.229 48.1 113.584 54.5 113.169C62.5 112.649 62.5 112.649 81.5 122"
                    stroke="white" strokeWidth="3"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M27.1107 113.259C20.6943 102.684 17 90.2732 17 77C17 38.3401 48.3401 7 87 7C88.2897 7 89.5712 7.03488 90.8437 7.10374C82.2277 2.56739 72.4137 0 62 0C27.7583 0 0 27.7583 0 62C0 83.3038 10.7448 102.098 27.1107 113.259Z"
                      fill="black" fillOpacity="0.3"/>
            </g>
        </svg>
    );
};

export default Planet1;
