import React from 'react';
import S from "./style";
import BasicInput from "../../input/BasicInput";
import WarningMark from "../../../assets/misc/WarningMark";
import BasicButton from "../../button/BasicButton";
import {useForm} from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: {isSubmitting, errors},
    } = useForm({mode: "onChange"});

    const loginRequest = async (data) => {
        console.log(data);
    };

    return (
        <S.LoginWrapper onClick={(e) => e.stopPropagation()}>
            <S.BackLight/>
            <S.LoginContainer>
                <S.InnerGrid>
                    <S.Form onSubmit={handleSubmit(loginRequest)}>
                        <div className="upper">
                            <S.Title>
                                관리자 로그인
                            </S.Title>
                            <S.Label $err={Boolean(errors.id) ? "true" : "false"}>
                                <BasicInput
                                    $variant="theme"
                                    $shape="large"
                                    $size="full"
                                    $color="dark"
                                    id="id"
                                    type="text"
                                    placeholder="아이디를 입력해주세요."
                                    {...register("id", {required: "아이디를 입력해주세요."})}
                                />
                                {errors.id && (
                                    <>
                                        <WarningMark/>
                                        <S.InputError>{errors.id.message}</S.InputError>
                                    </>
                                )}
                            </S.Label>
                            <S.Label $err={Boolean(errors.password) ? "true" : "false"}>
                                <BasicInput
                                    $variant="theme"
                                    $shape="large"
                                    $size="full"
                                    $color="dark"
                                    id="password"
                                    type="password"
                                    placeholder="비밀번호를 입력해주세요."
                                    {...register("password", {required: "비밀번호를 입력해주세요."})}

                                />
                                {errors.password && (
                                    <>
                                        <WarningMark/>
                                        <S.InputError>{errors.password.message}</S.InputError>
                                    </>
                                )}
                            </S.Label>
                        </div>
                        <div className="lower">
                            <BasicButton $variant="themePrimary" $shape="large" $size="medium" $color="white"
                                         disabled={isSubmitting}>
                                <S.ButtonFont>로그인</S.ButtonFont>
                            </BasicButton>
                        </div>
                    </S.Form>
                </S.InnerGrid>
            </S.LoginContainer>
        </S.LoginWrapper>
    );
};

export default Login;