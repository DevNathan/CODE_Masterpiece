import styled from "styled-components";
import {Link} from "react-router-dom";
import generalCSS from "../../../global/generalCSS";
import {THEME_TRANSITION_DURATION} from "../../../global/constant";

const S = {};

S.Article = styled.article`
    width: 285px;
    height: 360px;
`;

S.Link = styled(Link).attrs(({theme}) => ({
    style: {
        backgroundColor: theme.bgColor.primary
    }
}))`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    ${generalCSS.transitionBackgroundColorEase(THEME_TRANSITION_DURATION)}
`;

S.ImgWrapper = styled.div`
    width: 100%;
    height: 208px;
    overflow: hidden;
    position: relative;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

S.ArticleInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 24px;
    bottom: 12px;
`;

S.ArticleInfo = styled.div`
    display: flex;
    align-items: flex-end;
    
    &:not(:last-child) {
        margin-right: 12px;
    }
    
    & svg {
        width: 14px;
        height: 14px;
        margin-right: 4px;
    }
    
    & p {
        font-size: 14px;
        color: #ffffff;
    }
`;

S.ContentWrapper = styled.div`
    margin: 24px 40px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;

S.ContentSection = styled.div`
    width: 100%;
    height: 100%;
`;

S.Title = styled.h3.attrs(({theme}) => ({
    style : {
        color: theme.themeMode === "light" ? "#3a3a3a" : "#D8D8D8"
    }
}))`
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 8px;
    padding-bottom: 0.14em
`;

S.HeadContent = styled.p.attrs(({theme}) => ({
    style : {
        color: theme.themeMode === "light" ? "#797878" : "#B3B3B3"
    }
}))`
    font-size: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 0.14em
`;

S.SpaceBetween = styled.div`
    width: 100%;
    ${generalCSS.spaceBetween};
`;

S.Timestamp = styled.time`
    font-size: 12px;
    color: #9f9f9f;
`;

S.More = styled.div`
    ${generalCSS.flexCenterRow};
    
    & p {
        font-size: 10px;
        color: #9f9f9f;
    }
    
    & svg {
        width: 5px;
        height: 5px;
        color: #9f9f9f;
    }
`;

export default S;