import {keyframes} from "styled-components";

const GeneralAnim = {};

GeneralAnim.bounceAnimation = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(5px);
    }
`;

GeneralAnim.slideUp = keyframes`
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

GeneralAnim.rotate = {
    toRight: keyframes`
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    `,
    roLeft: keyframes`
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-360deg);
        }
    `,
};

export default GeneralAnim;
