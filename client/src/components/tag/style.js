import styled, {css} from "styled-components";
import theme from "../../global/theme";
import {Link} from "react-router-dom";

const variantCSS = {
    themePrimary: css`
        background-color: ${({theme}) => theme.primary};
    `,
    lightGray: css`
        background-color: ${() => theme.PALLETE.gray["100"]};
    `,
    gray: css`
        background-color: ${() => theme.PALLETE.gray["200"]};
    `,
    white: css`
        background-color: ${() => theme.PALLETE.white};
    `,
};

const colorCSS = {
    white: css`
        color: ${theme.PALLETE.textColor.light};
    `,
    black: css`
        color: ${theme.PALLETE.textColor.dark};
    `,
};

const Tag = styled.div`
    ${({$variant}) => variantCSS[$variant]}
    ${({$color}) => colorCSS[$color]}

    min-width: 68px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;

    & span {
        margin: 0 12px;
    }
`;

const LinkTag = styled(Link)`
    ${({$variant}) => variantCSS[$variant]}
    ${({$color}) => colorCSS[$color]}

    min-width: 68px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;

    & span {
        margin: 0 12px;
    }
`;

export {Tag, LinkTag};