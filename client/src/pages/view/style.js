import styled from "styled-components";
import {THEME_TRANSITION_DURATION} from "../../global/constant";
import GeneralCSS from "../../global/generalCSS";
import generalCSS from "../../global/generalCSS";

const S = {};

S.ViewContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${({theme}) => theme.bgColor.primary};
    ${GeneralCSS.transitionBackgroundColorEase(THEME_TRANSITION_DURATION)};
    position: relative;
    overflow-x: hidden;
`;

S.TopImageWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 688px;
    top: 0;
    background-color: gray;
    z-index: 1;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

S.ViewWrapper = styled.div`
    position: relative;
    top: 0;
    width: 100%;
    z-index: 2;
`;

S.Grid = styled.div`
    ${GeneralCSS.webGrid};
    position: relative;
`;

S.ArticleContainer = styled.div`
    background-color: ${({theme}) => theme.bgColor.primary};
    ${GeneralCSS.transitionBackgroundColorEase(THEME_TRANSITION_DURATION)};
`;

S.GradientMask = styled.div`
    width: 100%;
    height: 688px;
    position: relative;
    pointer-events: none;
    z-index: 3;
    background-color: ${({theme}) => theme.themeMode === "light" ? "rgba(235, 236, 240, 0)" : "rgba(37, 37, 37, 0)"};
    transition: background-color 0.5s ease;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${({theme}) => theme.themeMode === "light"
                ? "linear-gradient(to bottom, rgba(235, 236, 240, 0.1) 70%, rgba(235, 236, 240, 0.5) 85%, rgba(235, 236, 240, 1) 100%)"
                : "linear-gradient(to bottom, rgba(37, 37, 37, 0.1) 70%, rgba(37, 37, 37, 0.5) 85%, rgba(37, 37, 37, 1) 100%)"};
        transition: background 0.5s ease;
    }
`;

S.Article = styled.article`
    width: 100%;
    height: 100%;
    position: relative;
`;

S.Header = styled.header`
    position: absolute;
    top: calc(-384px / 2);
    width: 100%;
    height: 384px;
    background-color: ${({theme}) => theme.bgColor.primary};
    border-radius: 22px;
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.25);
    z-index: 4;

    & .alert {
        position: absolute;
        left: 8px;
    }
`;

S.HeaderWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    ${GeneralCSS.flexCenterColumn};
    padding: 0 80px;

    & .divider {
        width: 100%;
        height: 1px;
        position: relative;
        margin: 24px 0 32px;

        & hr {
            width: 100%;
            height: 1px;
            border: 0;
            border-top: 1px solid #000;
            margin: 0;
        }

        & ::before {
            content: "";
            position: absolute;
            left: -24px;
            top: 50%;
            transform: translateY(-50%);
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 10px solid #000;
        }
    }
`;

S.SpaceBetween = styled.div`
    ${generalCSS.spaceBetween};
    width: 100%;
`;

S.RowWrapper = styled.div`
    display: flex;
    align-items: center;

    & :not(:last-child) {
        margin-right: 8px;
    }
`;

S.Title = styled.h1`
    font-size: 40px;
    line-height: 1.25;
    font-weight: 600;
`;

S.CategoryWrapper = styled.div`
    width: 130px;
    margin-bottom: 16px;
`;

S.ArticleInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    & svg {
        margin-right: 8px;
    }

    & time {
        color: ${({theme}) => theme.textColor};
    }
`;

S.InfoWrapper = styled.div`
    ${GeneralCSS.flexCenterRow};

    & p {
        color: ${({theme}) => theme.textColor};
    }

    & time {
        font-size: 13px;
        ${({theme}) => theme.textColor};
    }
`;

S.ShareButton = styled.button`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

S.HeadContent = styled.div`
    max-width: 812px;
    width: 100%;
    min-height: 160px;

    & p {
        font-size: 15px;
        line-height: 25px;
        ${({theme}) => theme.textColor};
    }
`;

S.WriteTime = styled.time`
    color: ${({theme}) => theme.textColor};
`;

S.Content = styled.div`
    padding-top: 300px;
    width: 100%;
    ${GeneralCSS.flexCenterColumn};
`;

S.OtherContentsWrapper = styled.div`
    width: 100vw;
    margin-left: calc(50% - 50vw);
    height: 670px;
    ${generalCSS.flexCenterColumn};

    & .upper {
        width: 100%;
        height: 130px;
        ${generalCSS.flexCenterColumn};

        & h3 {
            font-size: 40px;
            font-weight: 600;
            color: #646464;
        }

        & p {
            font-size: 20px;
            color: #666666;
        }
    }

    & .lower {
        width: 100%;
        height: 540px;
        background-color: #dcdcdc;
        ${generalCSS.flexCenter}
    }
`;

S.ArticlesWrapper = styled.div`
    ${generalCSS.flexCenterRow};
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 20px;
    overflow: hidden;
`;

export default S;
