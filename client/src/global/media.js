import {css} from "styled-components";

const DEVICE_WIDTH = {
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
};

/*
 * media.js: 미디어쿼리 호출
 *
 * 호출 종류: mobileM, tablet, laptop, laptopL
 * max-width 기준이므로 항상 작은 기기순으로 문법이 작동한다.
 * 예를 들어 desktopSmall의 css는 tablet에서 따로 설정되지 않는 이상 desktopSmall의 css가 동일하게 적용된다.
 */
const media = Object.keys(DEVICE_WIDTH).reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
        @media screen and (max-width: ${DEVICE_WIDTH[label]}px) {
            ${css(...args)};
        }
    `;
    return accumulator;
}, {});

export {DEVICE_WIDTH};
export default media;
