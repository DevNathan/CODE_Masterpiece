import React, { useEffect, useState } from "react";
import S from "./style";
import { useForm } from "react-hook-form";
import WarningMark from "../../../assets/misc/WarningMark";
import theme from "../../../global/theme";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { formatToTimer } from "../../../utils/util";

const TIMER_TIME = 30;

const Subscription = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isTimeOut, setIsTimeOut] = useState(false);
  const [timer, setTimer] = useState(0);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("이메일을 입력해주세요.")
      .email("유효한 이메일 형식을 입력해주세요."),
    code: yup.string().required("인증번호를 입력해주세요."),
  });

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const authenticateRequest = async () => {
    const email = getValues("email");

    // todo: fetch()
    console.log(email);

    setIsTimeOut(false);
    setIsAuthenticating(true);
    setTimer(TIMER_TIME);
  };

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearTimeout(countdown);
    } else if (timer === 0 && isAuthenticating) {
      setIsAuthenticating(false);
      setIsTimeOut(true);
      setValue("code", "");
    }
  }, [timer, isAuthenticating, setValue]);

  const onSubmit = async (data) => {
    console.log(data);
  };

  const emailValue = watch("email");
  const codeValue = watch("code");

  useEffect(() => {
    if (emailValue && codeValue) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [emailValue, codeValue]);

  return (
    <S.Wrapper onClick={(e) => e.stopPropagation()}>
      {/*<S.BackLight />*/}
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Grid>
          <S.InnerWrapper>
            <S.Title>구독하기</S.Title>
            <S.Label>
              <S.Input
                id="email"
                type="email"
                placeholder="이메일을 입력해주세요."
                style={{
                  borderColor: errors.email ? theme.PALLETE.error : "#aea8b2",
                }}
                {...register("email")}
                disabled={isAuthenticating}
              />
              {!errors.email && isDirty && (
                <S.AuthReqBtn
                  onClick={authenticateRequest}
                  disabled={isAuthenticating}
                  type="button"
                >
                  <span>인증</span>
                </S.AuthReqBtn>
              )}
              {isAuthenticating ? (
                <S.InputIndi style={{ color: "#007AFF" }}>
                  인증번호가 해당 이메일로 전송되었습니다.
                </S.InputIndi>
              ) : isTimeOut ? (
                <S.InputIndi>시간이 만료되었습니다.</S.InputIndi>
              ) : errors.email ? (
                <>
                  <WarningMark />
                  <S.InputIndi>{errors.email.message}</S.InputIndi>
                </>
              ) : null}
            </S.Label>
            {isAuthenticating && (
              <S.Label>
                <S.Input
                  id="code"
                  type="text"
                  placeholder="인증번호를 입력해주세요."
                  style={{
                    borderColor: errors.code ? theme.PALLETE.error : "#aea8b2",
                  }}
                  {...register("code")}
                />
                <S.Timer>{formatToTimer(timer)}</S.Timer>
                {errors.code && (
                  <S.InputIndi>{errors.code.message}</S.InputIndi>
                )}
              </S.Label>
            )}
            <S.Submit disabled={!isFormValid}>
              <span>구독하기</span>
            </S.Submit>
          </S.InnerWrapper>
        </S.Grid>
      </S.Form>
    </S.Wrapper>
  );
};

export default Subscription;
