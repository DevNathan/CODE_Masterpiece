import React from "react";
import S from "./style";
import BasicInput from "../../input/BasicInput";
import WarningMark from "../../../assets/misc/WarningMark";
import BasicButton from "../../buttons/BasicButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import theme from "../../../global/theme";

const Login = () => {
  const validationSchema = yup.object().shape({
    id: yup.string().required("아이디를 입력해주세요."),
    password: yup.string().required("비밀번호를 입력해주세요."),
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const loginRequest = async (data) => {
    // todo: fetch()
    console.log(data);
  };

  return (
    <S.Wrapper onClick={(e) => e.stopPropagation()}>
      {/*<S.BackLight />*/}
      <S.Form onSubmit={handleSubmit(loginRequest)}>
        <S.Grid>
          <S.InnerWrapper>
            <S.Title>관리자 로그인</S.Title>
            <S.Label $err={Boolean(errors.id) ? "true" : "false"}>
              <S.Input
                id="id"
                type="text"
                placeholder="아이디를 입력해주세요."
                style={{
                  borderColor: errors.id ? theme.PALLETE.error : "#aea8b2",
                }}
                {...register("id")}
              />
              {errors.id && (
                <>
                  <WarningMark />
                  <S.InputIndi>{errors.id.message}</S.InputIndi>
                </>
              )}
            </S.Label>
            <S.Label $err={Boolean(errors.password) ? "true" : "false"}>
              <S.Input
                id="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                style={{
                  borderColor: errors.password
                    ? theme.PALLETE.error
                    : "#aea8b2",
                }}
                {...register("password")}
              />
              {errors.password && (
                <>
                  <WarningMark />
                  <S.InputIndi>{errors.password.message}</S.InputIndi>
                </>
              )}
            </S.Label>
            <S.Submit disabled={isSubmitting}>
              <span>로그인</span>
            </S.Submit>
          </S.InnerWrapper>
        </S.Grid>
      </S.Form>
    </S.Wrapper>
  );
};

export default Login;
