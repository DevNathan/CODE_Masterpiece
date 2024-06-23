import styled, {keyframes} from "styled-components";
import {THEME_TRANSITION_DURATION} from "../../global/constant";
import theme from "../../global/theme";
import GeneralCSS from "../../global/generalCSS";

const expand = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`;

const S = {};

S.ListContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${({theme}) => theme.bgColor.primary};
    ${GeneralCSS.transitionBackgroundColorEase(THEME_TRANSITION_DURATION)};
`;

S.Grid = styled.div`
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding-top: 200px;
`;

S.Title = styled.h1`
    margin: 0 12px;
    font-size: 75px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${() => theme.textColor};
`;

S.TitleDivider = styled.div`
    margin: 20px 0;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

S.DividerCircle = styled.div`
    position: absolute;
    width: 9px;
    height: 9px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #000000;
    border-radius: 50%;
`;

S.DividerLine = styled.div`
    position: relative;
    width: 100%;
    height: 1px;
    background: none;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 1px;
        width: 0;
        background: #000;
        animation: ${expand} 1.5s cubic-bezier(0.12, 0.69, 0.47, 0.9) forwards;
    }
`;

S.ContentsWrapper = styled.div`
    width: 100%;
    ${GeneralCSS.flexCenter};
`;

S.listWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 760px;
`;

S.CategorySection = styled.section`
    width: 100%;
    height: 40px;
    margin-bottom: 16px;
    background-color: #d9d9d9;
    display: flex;
    align-items: center;
`;

S.ArticleWrapper = styled.div`
    width: 100%;
    height: 100%;

    & article:not(:last-child) {
        margin-bottom: 16px;
    }
`;

S.bannerWrapper = styled.div`
    min-width: 400px;
    width: 400px;
    background-color: transparent;
    margin-left: 32px;
    position: relative;
    display: flex;
    flex-grow: 1;
`;

S.DetailBanner = styled.div`
    width: 100%;
    height: 480px;
    position: sticky;
    top: calc(40vh - 240px);
    background-color: #d9d9d9;
`;

S.BannerHeader = styled.div`
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 16px;
`;

S.ImageWrapper = styled.div`
    width: 100%;
    height: calc(100% - 56px);
    ${GeneralCSS.flexCenter};

    & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;

S.BannerContent = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 184px;
    background-color: rgba(0, 0, 0, 0.5);

    & .grid {
        margin: 16px;
    }
`;

S.BannerTitle = styled.h2`
    font-size: 32px;
    font-weight: 600;
    color: ${theme.PALLETE.textColor.light};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export default S;