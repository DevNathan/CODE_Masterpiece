import styled from 'styled-components';
import {THEME_TRANSITION_DURATION} from "../../global/constant";
import GeneralCSS from "../../global/generalCSS";
import GeneralAnim from "../../global/generalAnimations";

const S = {};

S.MainContainer = styled.div`
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    position: relative;
    ${GeneralCSS.flexCenter};
`;

S.ScreenSizeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    ${GeneralCSS.flexCenterColumn};
`;

S.MainScreen = styled.div.attrs(({theme}) => ({
    style: {
        backgroundColor: theme.bgColor.primary
    }
}))`
    position: relative;
    width: 100%;
    height: 100%;
    ${GeneralCSS.transitionBackgroundColorEase(THEME_TRANSITION_DURATION)};
    ${GeneralCSS.flexCenter};
`;

S.WhiteStars = styled.div.attrs(({theme, $top, $left}) => ({
    style: {
        backgroundColor: theme.themeMode === "light" ? "#030303" : "#f1f1f1",
        top: $top + "%",
        left: $left + "%"
    }
}))`
    position: absolute;
    z-index: 1;
    border-radius: 50%;
    width: 4px;
    height: 4px;
    ${GeneralCSS.transitionBackgroundColorEase(THEME_TRANSITION_DURATION)};
`;

S.ThemeStars = styled.div.attrs(({theme, $top, $left}) => ({
    style: {
        backgroundColor: theme.themeMode === "light" ? "#CC003C" : "#3EC69F",
        top: $top + "%",
        left: $left + "%"
    }
}))`    
    position: absolute;
    z-index: 1;
    border-radius: 50%;
    width: 4px;
    height: 4px;
    ${GeneralCSS.transitionBackgroundColorEase(THEME_TRANSITION_DURATION)};
`;

S.Planet = styled.div.attrs(({$top, $left}) => ({
    style: {
        top: $top + "%",
        left: $left + "%"
    }
}))` 
    position: absolute;
    z-index: 2;
    animation: ${GeneralAnim.bounceAnimation} 2s ease-in-out infinite;
    display: block;
`;

S.MainButton = styled.button.attrs(({theme}) => ({
    style: {
        border: "1px solid" + theme.contrast,
        color: theme.contrast
    }
}))`
    width: 80px;
    height: 80px;
    background-color: transparent;
    font-size: 20px;
    border-radius: 50%;
    position: absolute;
    bottom: 30px;
    cursor: pointer;
    animation: ${GeneralAnim.bounceAnimation} 2s ease-in-out infinite;
`;

S.SlideUpContainer = styled.div`
    width: 100vw;
    height: 100vh;
    ${GeneralCSS.flexCenterRow};
    position: absolute;
    z-index: 20;
    overflow: hidden;
    top: 0;
`;

S.SlideUpWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: overlay;
`;

export default S;
