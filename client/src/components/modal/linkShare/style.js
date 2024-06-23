import styled from "styled-components";
import generalCSS from "../../../global/generalCSS";
import theme from "../../../global/theme";

const S = {};

S.LinkShareContainer = styled.div`
    max-width: 400px;
    width: 100%;
    background-color: ${({theme}) => theme.bgColor.primary};
    border-radius: 20px;
`;

S.ContentWrapper = styled.div`
    ${generalCSS.flexCenterColumn};
    flex: 1;
    margin: 32px;
`;

S.Title = styled.h3`
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    color: ${({theme}) => theme.textColor};
    margin-bottom: 12px;
`;

S.RowWrapper = styled.div`
    ${generalCSS.flexCenterRow};
    width: 100%;
`;

S.Label = styled.label`
    flex: 1;
    height: 40px;
    border: 1px solid #b1b1b1;
    border-right: none;
    display: flex;
    align-items: center;
`;

S.Input = styled.input`
    width: 100%;
    height: 100%;
    padding-left: 16px;
    color: ${({$status, theme}) =>
            $status ? theme.primary : theme.textColor};
    cursor: default;
`;

S.Button = styled.button`
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.primary};
    cursor: pointer;

    &:hover {
        background-color: ${({theme}) => theme.secondary};
    }

    & span {
        font-family: 'Noto-Sans-KR';
        font-size: 16px;
        font-weight: 600;
        color: ${theme.PALLETE.textColor.light};
    }
`;

S.SocialWrapper = styled.div`
    ${generalCSS.flexCenterRow};
    width: 100%;

    & :active {
        box-shadow: inset 1px 1px 2px #babebc, inset -1px -1px 2px ${theme.PALLETE.white};
    }
`;

S.SocialButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-image: ${({type}) =>
            type ? `url(${process.env.PUBLIC_URL}/images/socials/${type}.png)` : 'none'};
    cursor: pointer;
    box-shadow: -5px -5px 10px ${theme.PALLETE.white}, 5px 5px 8px #babebc;
`;

export default S;