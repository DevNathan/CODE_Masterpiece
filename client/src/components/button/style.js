import styled, {css} from "styled-components";
import theme from "../../global/theme";
import GeneralCSS from "../../global/generalCSS";

const variantCSS = {
    themePrimary: css`
        background-color: ${({theme}) => theme.primary};
    `,
    lightGray: css`
        background-color: ${() => theme.PALLETE.background.dark};
    `,
};

const shapeCSS = {
    default: css``,
    small: css`
        border-radius: 10px;
    `,
    large: css`
        border-radius: 20px;
    `,
    round: css`
        border-radius: 50%;
    `,
};

const sizeCSS = {
    small: css`
        width: 64px;
        height: 32px;
    `,
    medium: css`
        width: 96px;
        height: 48px;
    `,
    large: css`
        width: 180px;
        height: 52px;
    `,
    full: css`
        width: 100%;
        aspect-ratio: 8/1;
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

const Button = styled.button`
    ${({$variant}) => variantCSS[$variant]}
    ${({$shape}) => shapeCSS[$shape]}
    ${({$size}) => sizeCSS[$size]}
    ${({$color}) => colorCSS[$color]}

    ${GeneralCSS.flexCenterRow};
    gap: 10px;
    padding: 16px 0;
    cursor: pointer;
`;

export default Button;
