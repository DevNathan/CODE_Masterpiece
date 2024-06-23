import styled from "styled-components";
import media from "../../../global/media";
import GeneralCSS from "../../../global/generalCSS";

const S = {};

S.GridContainer = styled.div`
    width: 100%;
    ${GeneralCSS.flexCenterRow};
    flex-wrap: wrap;
    gap: 45px;
    
    ${media.tablet`
        gap: 20px;
    `}
`;

export default S;