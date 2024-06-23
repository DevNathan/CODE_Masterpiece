import styled, {css} from "styled-components";
import theme from "../../global/theme";

const variantCSS = {
    dark: css`
        background-color: ${() => theme.PALLETE.background.dark};
    `,
    light: css`
        background-color: ${() => theme.PALLETE.background.light};
    `,
    transparent: css`
        background-color: transparent;
    `,
    theme: css`
        background-color: ${({theme}) => theme.bgColor.primary};
    `,
}

const shapeCSS = {
    default: css``,
    small: css`
        border-radius: 10px;
    `,
    large: css`
        border-radius: 20px;
    `,
    big: css`
        border-radius: 30px;
    `,
    round: css`
        border-radius: 50%;
    `,
}

const sizeCSS = {
    full: css`
        width: 100%;
        aspect-ratio: 8 / 1;
        padding: 12px 24px;
    `,
}

const colorCSS = {
    light: css`
        color: ${() => theme.PALLETE.textColor.light};    
    `,
    dark: css`
        color: ${() => theme.PALLETE.textColor.dark};
    `,
}

const Input = styled.input`
    ${({$variant}) => variantCSS[$variant]};
    ${({$shape}) => shapeCSS[$shape]};
    ${({$size}) => sizeCSS[$size]};
    ${({$color}) => colorCSS[$color]};
`;

export default Input;