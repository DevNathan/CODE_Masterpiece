import styled from "styled-components";
import {THEME_TRANSITION_DURATION} from "../../../global/constant";
import {Link} from "react-router-dom";
import media from "../../../global/media";
import GeneralCSS from "../../../global/generalCSS";

const S = {};

S.Article = styled(Link)`
    width: 336px;
    height: 420px;
    display: block;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.25);
    transition: color ${THEME_TRANSITION_DURATION} ease, background-color ${THEME_TRANSITION_DURATION} ease, transform 0.2s ease;
    position: relative;

    & img {
        width: 100%;
        height: calc(100% * (9 / 19));
        border-radius: 20px 20px 20px 0;
        background-color: #b7b7b7;
    }

    ${media.tablet`
        max-width: 520px;
        width: 100%;
        height: 500px;
        margin: 0 8px;
    `}
`;

S.TagWrapper = styled.div`
    position: absolute;
    left: 16px;
    top: 16px;
    display: flex;

    & div:not(:last-child) {
        margin-right: 4px;
    }
`;

S.ArticleContentWrapper = styled.div`
    height: 142px;
    display: flex;
    flex-direction: column;
    margin: 32px 24px;
`;

S.ArticleUpperWrapper = styled.div`
    & h3 {
        width: 100%;
        font-size: 20px;
        font-weight: 600;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 12px;
    }

    p {
        font-size: 15px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

S.ArticleBottomWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;

    div {
        ${GeneralCSS.flexCenterRow};
        color: #a5a5a5;

        p {
            font-size: 14px;
            margin-right: 4px;
        }

        svg {
            font-size: 10px;
        }
    }
    
    time {
        font-size: 15px;
    }
`;

export default S;