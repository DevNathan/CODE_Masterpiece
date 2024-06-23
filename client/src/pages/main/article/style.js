import styled from "styled-components";
import {THEME_TRANSITION_DURATION} from "../../../global/constant";
import GeneralCSS from "../../../global/generalCSS";
import media from "../../../global/media";

const S = {};

S.Articles = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    ${GeneralCSS.flexCenterColumn};
    background-color: ${({theme}) => theme.bgColor.primary};
    ${GeneralCSS.transitionAllEase(THEME_TRANSITION_DURATION)}
`;


S.Grid = styled.div`
    max-width: 1200px;
    height: 100%;
    margin: 120px auto;
    ${GeneralCSS.flexCenterColumn};
`;

S.TitleWrapper = styled.div`
    ${GeneralCSS.flexCenterColumn};
    margin-bottom: 72px;

    h1 {
        font-size: 50px;
        font-weight: 600;
        color: ${({theme}) => theme.themeMode === "light" ? "#515151" : "#DBDBDB"};
        margin-bottom: 8px;
        letter-spacing: 0;

        ${media.mobileL`
            font-size: 36px;
        `};
    }
    
    p {
        font-size: 20px;
        font-weight: 500;
        color: ${({theme}) => theme.themeMode === "light" ? "#5e5e5e" : "#BFBFBF"};
        letter-spacing: 1px;

        ${media.mobileL`
            font-size: 16px;
        `};
    }
`;

S.ContentWrapper = styled.div`
    width: 100%;
    ${GeneralCSS.flexCenterRow};
    flex-wrap: wrap;
    gap: 45px;
`;

export default S;