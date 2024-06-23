import styled from "styled-components";
import {THEME_TRANSITION_DURATION} from "../../global/constant";
import GeneralCSS from "../../global/generalCSS";

const S = {};

S.ThemeChanger = styled.div`
    width: 48px;
    height: 22px;
    ${GeneralCSS.flexCenter};
    background-color: #d9d9d9;
    border-radius: 20px;
    margin-right: 20px;
    cursor: pointer;
    ${GeneralCSS.transitionAllEase('0.3s')};
    position: relative;
`;

S.ThemeIndicator = styled.div`
    ${GeneralCSS.flexCenter};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #1b1b1b;
    position: absolute;
    ${GeneralCSS.transitionAllEase(THEME_TRANSITION_DURATION)};
    overflow: hidden;
`;

S.IconHider = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #1b1b1b;
    position: absolute;
    transform: translate(${({$themeMode}) => $themeMode === "light" ? "10px, -10px" : "2px, -2px"});
    ${GeneralCSS.transitionAllEase(THEME_TRANSITION_DURATION)}
`;

export default S;