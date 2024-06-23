import React from 'react';
import S from "./style";
import CardArticle from "../../../components/article/cardType/CardArticle";

const ArticlesContainer = () => {
    return (
        <S.Articles>
            <S.Grid>
                <S.TitleWrapper>
                    <h1>코딩 하러가기</h1>
                    <p>그들은 더 많은 노예들로 빠른 코딩을 원합니다.</p>
                </S.TitleWrapper>
                <S.ContentWrapper>
                    <CardArticle/>
                    <CardArticle/>
                    <CardArticle/>
                    <CardArticle/>
                    <CardArticle/>
                    <CardArticle/>
                </S.ContentWrapper>
            </S.Grid>
        </S.Articles>
    );
};

export default ArticlesContainer;