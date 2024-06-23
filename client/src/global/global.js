import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Noto-Sans-KR';
        src: url("/fonts/Noto_Sans_KR/NotoSansKR-VariableFont_wght.ttf") format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    ::-webkit-scrollbar {
        display: none;
        width: 6px;
    }

    ::-webkit-scrollbar-track {
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(112, 112, 112, 0.71);
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555555;
    }

    * {
        box-sizing: border-box;
    }

    ${reset}
    body {
        background: ${theme.lightTheme.bgColor.primary};
        color: ${theme.lightTheme.textColor};
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        font-family: 'Noto-Sans-KR';
        font-weight: 500;
        letter-spacing: -0.2px;
        text-decoration: none;
        line-height: 1.2;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        border: none;
        background-color: transparent;
        margin: 0;
        padding: 0;

        &:focus {
            outline: none;
        }
    }

    input {
        box-sizing: border-box;
        border: none;
        background-color: transparent;
        outline: none;
        padding: 0;

        &:focus {
            outline: none;
        }

        &:-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px white inset;
            box-shadow: 0 0 0px 1000px white inset;
            -webkit-text-fill-color: #000;
        }
    }

`;

export default GlobalStyle;
