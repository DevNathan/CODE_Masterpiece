import styled from "styled-components";
import {Link} from "react-router-dom";
import theme from "../../global/theme";
import GeneralCSS from "../../global/generalCSS";

const S = {};

S.ItemWrapper = styled(Link)`
    height: 30px;
    ${GeneralCSS.flexCenter};
    padding: 0 20px;
    background-color: #929292;
    border-radius: 30px;
    ${GeneralCSS.transitionAllEase('0.2s')};

    &:hover {
        box-shadow: 0 0 7px 0 ${({theme}) => theme.primary};

        & p {
            scale: 1.15;
        }
    }

    & svg, img {
        margin-right: 8px;
    }

    & p {
        font-size: 15px;
        font-weight: 500;
        color: ${theme.PALLETE.textColor.light};
        ${GeneralCSS.transitionAllEase('0.2s')};
        letter-spacing: 1px;
    }
`;

export default S;