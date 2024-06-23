import {css} from "styled-components";

const GeneralCSS = {};

GeneralCSS.webGrid = css`
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
`;

GeneralCSS.flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

GeneralCSS.flexCenterColumn = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

GeneralCSS.flexCenterRow = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

GeneralCSS.spaceBetween = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

GeneralCSS.transitionAllEaseOut = (duration) => css`
    transition: all ease-out ${duration};
`;

GeneralCSS.transitionAllEase = (duration) => css`
    transition: all ease ${duration};
`;

GeneralCSS.transitionColorEase = (duration) => css`
    transition: color ease ${duration};
`;

GeneralCSS.transitionBackgroundColorEase = (duration) => css`
    transition: background-color ease ${duration};
`;

export default GeneralCSS;
