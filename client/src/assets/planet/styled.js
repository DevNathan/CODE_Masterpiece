import styled from "styled-components";
import {THEME_TRANSITION_DURATION} from "../../global/constant";

const S = {};

S.Circle = styled.circle`
    transition: fill ${THEME_TRANSITION_DURATION} ease;
`;

export default S