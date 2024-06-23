import styled from "styled-components";

const S = {};

S.Article = styled.article`
    width: 100%;
    height: 152px;
    display: flex;
    align-items: center;
    background-color: #d9d9d9;
    position: relative;

    .image-wrapper {
        position: absolute;
        left: 0;
        min-width: 232px;
        width: 232px;
        height: 152px;
    }

    .image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .image-wrapper::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
                to right,
                #d9d9d91a 70%,
                #d9d9d980 85%,
                #d9d9d9ff 100%
        );
        pointer-events: none;
    }
`;

S.ContentWrapper = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
    margin: 0 16px 0 246px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    & .upper {
        width: 100%;
        margin-top: 8px;
    }

    & .lower {
        width: 100%;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        & a:not(:last-child) {
            margin-right: 12px;
        }
    }
`;

S.Title = styled.h3`
    font-size: 22px;
    font-weight: 600;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

S.HeadContent = styled.p`
    margin-top: 8px;
    font-size: 18px;
    letter-spacing: 0.75px;
    padding-bottom: 0.14em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export default S;