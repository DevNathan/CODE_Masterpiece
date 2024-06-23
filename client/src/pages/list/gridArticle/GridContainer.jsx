import React from 'react';
import S from "./style";
import CardArticle from "../../../components/article/cardType/CardArticle";

const GridContainer = () => {
    return (
        <S.GridContainer>
            {Array.from({length: 6}).map((_, index) => (
                <CardArticle key={index}/>
            ))}
        </S.GridContainer>
    );
};

export default GridContainer;