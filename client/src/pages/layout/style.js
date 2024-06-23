import styled from "styled-components";
import theme from "../../global/theme";
import {INDEX, THEME_TRANSITION_DURATION} from "../../global/constant";
import media from "../../global/media";
import {Link} from "react-router-dom";
import GeneralCSS from "../../global/generalCSS";
import GeneralAnim from "../../global/generalAnimations";

const S = {};

S.Wrapper = styled.div`
    width: 100%;
    position: relative;
    ${GeneralCSS.flexCenterColumn};
`;

S.Header = styled.header.attrs(({$isSpecialized, $isScrolled, theme}) => ({
    style: {
        backgroundColor: $isSpecialized ? theme.primary : theme.headerDefault,
        opacity: $isScrolled ? 0.7 : 1
    }
}))`
    position: fixed;
    top: 35px;
    max-width: 1352px;
    width: calc(100% - 48px);
    height: 60px;
    ${GeneralCSS.transitionBackgroundColorEase(THEME_TRANSITION_DURATION)}
    border-radius: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: ${INDEX.header};
    box-shadow: 0 10px 40px 0 rgb(0, 0, 0, 0.5);

    ${media.tablet`
        display: none;
    `};
`;

S.Logo = styled(Link)`
    height: 100%;
    ${GeneralCSS.flexCenter};
    margin-left: 16px;

    & svg {
        width: 170px;
    }

    ${media.tablet`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
    `};
`;

S.NavUl = styled.ul`
    ${GeneralCSS.flexCenterRow};
    gap: 50px;
    ${GeneralCSS.transitionAllEaseOut('0.3s')}

    ${media.laptopL`
        gap: 20px;
    `};
    ${media.tablet`
        display: none;
    `};
`;

S.NavLi = styled.button.attrs(({$isSpecialized, theme}) => ({
    style: {
        color: $isSpecialized ? theme.menuTextColor : theme.textColor
    }
}))`
    ${GeneralCSS.flexCenter};
    ${GeneralCSS.transitionAllEase(THEME_TRANSITION_DURATION)};
    font-weight: 600;
    font-size: 24px;
    cursor: pointer;
    border-radius: 20px;

    ${media.laptop`
        font-size: 18px;
    `};

    &:hover {
        transform: scale(1.1);
    }

    &.selected {
        transform: scale(1.15);
    }
`;

S.HeaderMiscRightWrapper = styled.div`
    ${GeneralCSS.flexCenterRow};
    margin-right: 16px;

    & .menu {
        display: none;

        ${media.tablet`
            display: flex;
        `};
    }

    & .search {
        display: flex;

        ${media.tablet`
            display: none;
        `};
    }
`;

S.IconBox = styled.div`
    width: 40px;
    height: 40px;
    ${GeneralCSS.flexCenter};

    & svg {
        font-size: 24px;
        color: #ffffff;
        cursor: pointer;
    }
`;

S.SearchInput = styled.input`
    width: 100%;
    font-size: ${theme.FONT_SIZE.h6};
    color: ${theme.PALLETE.textColor.dark};
`;

S.MobileHeader = styled.header`
    display: none;
    position: fixed;
    top: 20px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    z-index: ${INDEX.header};

    ${media.tablet`
        display: flex;
    `}
`;

S.MobileLogoWrapper = styled.div`
    width: 60px;
    height: 60px;
    background-color: gray;
    border-radius: 50%;
    overflow: hidden;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

S.ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.45);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50;
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
`;

S.TechCategory = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation: ${GeneralAnim.slideUp} 0.2s ease-in-out;
    ${GeneralCSS.transitionAllEase('0.2s')};

    & .toUp {
        position: absolute;
        top: -50px;
        animation: ${GeneralAnim.bounceAnimation} 1s ease-in-out infinite;
        cursor: pointer;
        width: 30px;
    }

    & .toDown {
        position: absolute;
        bottom: -50px;
        animation: ${GeneralAnim.bounceAnimation} 1s ease-in-out infinite;
        cursor: pointer;
        width: 30px;
    }
`;

S.CategoryWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
    max-height: 606px;
    gap: 20px;
    overflow-y: auto;
`;

S.CategorySection = styled.section.attrs(({theme}) => ({
    style: {
        backgroundColor: theme.categorySection
    }
}))`
    flex: 1 0 auto;
    min-width: 280px;
    width: auto;
    height: 280px;
    border-radius: 25px;
    display: inline-block;

    & h3 {
        line-height: 40px;
        font-size: 40px;
        font-weight: 600;
        color: ${({theme}) => theme.primary};
        padding: 40px 40px 0 40px;
        margin-bottom: 8px;
    }

    & ul {
        width: calc(100% - 80px);
        height: calc(100% - 128px);
        margin: 0 40px 40px 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 10px 0;

        & li {
            min-width: 130px;
            margin-right: 20px;
        }
    }
`;

S.Empty = styled.div`
    flex-grow: 10000;
`;

S.Main = styled.main`
    width: 100%;
    height: 100%;
`;

S.HoverButtonsWrapper = styled.div`
    position: fixed;
    bottom: 100px;
    right: 40px;
    z-index: ${INDEX.header};

    ${media.mobileL`
        bottom: 40px;
    `};
`;

S.SettingButton = styled.button`
    position: relative;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    ${GeneralCSS.flexCenter};
    background-color: #fff;
    cursor: pointer;
    background-image: linear-gradient(225deg, ${theme.PALLETE.primary.bluesky}, ${theme.PALLETE.primary.orange});
    ${GeneralCSS.transitionAllEase("0.2s")};

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(1);
    }

    & svg {
        color: #fff;
        width: 28px;
        height: 28px;
    }

    &:hover svg {
        animation: ${GeneralAnim.rotate.roLeft} 2s linear infinite;
    }
`;

export default S;