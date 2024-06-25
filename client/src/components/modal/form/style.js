import styled from "styled-components";
import GeneralAnim from "../../../global/generalAnimations";
import generalCSS from "../../../global/generalCSS";
import GeneralCSS from "../../../global/generalCSS";
import { THEME_TRANSITION_DURATION } from "../../../global/constant";
import theme from "../../../global/theme";
import BasicButton from "../../buttons/BasicButton";

const S = {};

S.Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 360px;
  width: 100%;
  height: auto;
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
  height: 100%;
  width: 100%;
  z-index: 51;
  filter: blur(140px);
`;

S.Form = styled.form.attrs(({ theme }) => ({
  style: {
    backgroundColor:
      theme.themeMode === "light" ? "#ffffff" : "rgba(53,53,53,0.9)",
  },
}))`
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  height: 100%;
  ${GeneralCSS.transitionBackgroundColorEase(THEME_TRANSITION_DURATION)};
  box-shadow: 0 14px 23px 0 rgb(28, 37, 44, 0.08);
  border-radius: 20px;
  position: relative;
  z-index: 52;
`;

S.Grid = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 32px 0;
  padding: 0 32px;
`;

S.InnerWrapper = styled.div`
  width: 100%;
  ${generalCSS.flexCenterColumn};

  & > *:not(:last-child) {
    margin-bottom: 32px;
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
  ${GeneralCSS.transitionColorEase(THEME_TRANSITION_DURATION)};
`;

S.Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  & svg {
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

S.Input = styled.input.attrs(({ theme }) => ({
  style: {
    color: theme.themeMode === "light" ? "#666666" : "#F1F1F1",
    backgroundColor: theme.themeMode === "light" ? "#ffffff" : "#838383",
    boxShadow: `0 4px 8px 0 ${
      theme.themeMode === "light"
        ? "rgb(150, 150, 150, 0.5)"
        : "rgb(28, 37, 44, 0.08)"
    }}`,
  },
}))`
  border: 1px solid;
  border-radius: 20px;
  height: 48px;
  font-size: 16px;
  padding: 12px 80px 12px 24px;
  ${GeneralCSS.transitionBackgroundColorEase(THEME_TRANSITION_DURATION)};

  &:focus {
    border: 2px solid ${({ theme }) => theme.primary};
  }

  &:disabled {
    background-color: #e9e9e9 !important;
  }

  &::placeholder {
    color: ${({ theme }) =>
      theme.themeMode === "light" ? "#b8b8b8" : "#F1F1F1"};
  }
`;

S.AuthReqBtn = styled.button.attrs(({ theme }) => ({
  style: {
    backgroundColor: theme.primary,
  },
}))`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 16px;
  width: 64px;
  padding: 8px 0;
  z-index: 53;
  cursor: pointer;

  & span {
    font-family: "Noto Sans KR";
    font-size: 14px;
    color: ${theme.PALLETE.textColor.light};
  }

  &:not(:disabled):hover {
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    background-color: #c0c0c0 !important;
    cursor: not-allowed;
  }
`;

S.InputIndi = styled.p`
  position: absolute;
  font-size: 14px;
  top: 52px;
  left: 0;
  color: ${() => theme.PALLETE.error};
  margin-left: 16px;
`;

S.Timer = styled.time`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  color: #777777;
`;

S.Submit = styled.button.attrs(({ theme }) => ({
  style: {
    backgroundColor: theme.primary,
  },
}))`
  border-radius: 20px;
  width: 120px;
  padding: 16px 0;
  z-index: 53;
  cursor: pointer;

  & span {
    font-family: "Noto Sans KR";
    font-size: 16px;
    font-weight: 600;
    color: ${theme.PALLETE.textColor.light};
  }

  &:not(:disabled):hover {
    transform: scale(1.1);
  }

  &:disabled {
    background-color: #c0c0c0 !important;
    cursor: not-allowed;
  }
`;

export default S;
