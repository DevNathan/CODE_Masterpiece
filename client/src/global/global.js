import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Noto-Sans-KR';
        src: url("/fonts/NotoSansKR-VariableFont_wght.ttf") format('truetype');
        font-weight: 400;
        font-style: normal;
        unicode-range: U+1100-11FF, U+3130-318F, U+A960-A97F, U+AC00-D7A3, U+D7B0-D7FF;
    }
    
    @font-face {
        font-family: 'Roboto';
        src: url("/fonts/Roboto-Medium.ttf") format('truetype');
        font-weight: 400;
        unicode-range: U+0030-0039, U+0041-005A, U+0061-007A
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
        font-family: 'Noto-Sans-KR', 'Roboto', Serif !important;
        box-sizing: border-box;
        line-height: 1.2;
    }

    ${reset};
    
    body {
        background: ${({ theme }) => theme.background.m1};
        color: ${({ theme }) => theme.text.t1};
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        text-decoration: none;
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
            -webkit-box-shadow: 0 0 0 1000px white inset;
            box-shadow: 0 0 0 1000px white inset;
            -webkit-text-fill-color: #000;
        }
    }

`;

export default GlobalStyle;
