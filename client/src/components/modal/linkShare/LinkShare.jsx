import React, {useState} from 'react';
import S from "./style";
import {useLocation} from "react-router-dom";

const LinkShare = () => {
    const location = useLocation();
    const currentUrl = window.location.origin + location.pathname;
    const [isCopied, setIsCopied] = useState(false); // 복사 상태를 관리하는 state

    const handleCopy = () => {
        navigator.clipboard.writeText(currentUrl).then(() => {
            setIsCopied(true);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <S.LinkShareContainer onClick={(e) => e.stopPropagation()}>
            <S.ContentWrapper>
                <S.Title>공유하기</S.Title>
                <S.RowWrapper style={{marginBottom: "16px"}}>
                    <S.Label>
                        <S.Input
                            $status={isCopied}
                            value={currentUrl}
                            readOnly
                        />
                    </S.Label>
                    <S.Button onClick={handleCopy}>
                        <span>URL 복사</span>
                    </S.Button>
                </S.RowWrapper>
                <S.SocialWrapper style={{gap: "24px"}}>
                    <S.SocialButton type="kakao"/>
                    <S.SocialButton type="insta"/>
                    <S.SocialButton type="x"/>
                </S.SocialWrapper>
            </S.ContentWrapper>
        </S.LinkShareContainer>
    );
};

export default LinkShare;