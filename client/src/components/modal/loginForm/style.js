import styled from "styled-components";
import theme from "../../../global/theme";
import { THEME_TRANSITION_DURATION } from "../../../global/constant";
import GeneralAnim from "../../../global/generalAnimations";
import GeneralCSS from "../../../global/generalCSS";

const S = {};

S.LoginWrapper = styled.div`
  max-width: 360px;
  width: 100%;
  height: 352px;
  position: relative;
  animation: ${GeneralAnim.slideUp} 0.2s ease-in-out;
`;

S.BackLight = styled.div.attrs(({ theme }) => ({
  style: {
    backgroundColor: theme.primary,
  },
}))`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 352px;
  width: 100%;
  z-index: 51;
  filter: blur(140px);
`;

S.LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.bgColor.primary};
  ${GeneralCSS.transitionBackgroundColorEase(THEME_TRANSITION_DURATION)};
  box-shadow: 0 14px 23px 0 rgb(28, 37, 44, 0.08);
  border-radius: 20px;
  position: relative;
  z-index: 52;
`;

S.InnerGrid = styled.div`
  box-sizing: border-box;
  width: 288px;
  padding: 32px 0 32px 0;
  margin: 0 auto;
  height: 100%;
`;

S.Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  & .upper,
  .lower {
    width: 100%;
    ${GeneralCSS.flexCenterColumn};
  }
`;

S.Title = styled.h2.attrs(({ theme }) => ({
  style: {
    color: theme.textColor,
  },
}))`
  width: 100%;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 32px;
  ${GeneralCSS.transitionColorEase(THEME_TRANSITION_DURATION)};
`;

S.Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin: 0 0 32px 0;

  & input {
    border: 1px solid
      ${({ $err }) => ($err === "true" ? theme.PALLETE.error : "#aea8b2")};
    height: 48px;
    font-size: 16px;

    padding: 12px 48px 12px 24px;
    ${GeneralCSS.transitionBackgroundColorEase(THEME_TRANSITION_DURATION)};

    &:focus {
      border: 2px solid ${({ theme }) => theme.primary};
    }
  }

  & svg {
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

S.InputError = styled.p`
  position: absolute;
  top: 52px;
  left: 0;
  color: ${() => theme.PALLETE.error};
  margin-left: 16px;
`;

S.ButtonFont = styled.p.attrs(({ $err }) => ({
  style: {
    border: `1px solid ${$err === "true" ? theme.PALLETE.error : "#aea8b2"}`,
  },
}))`
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.1em;
`;

export default S;
