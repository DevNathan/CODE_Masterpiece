import React, {useEffect} from 'react';
import {useHeaderColor} from "../../context/headerColorContext";
import {useParams} from "react-router-dom";
import S from "./style";
import {techCategory} from "../../type/categories";
import CardArticle from "../../components/article/cardType/CardArticle";
import GridContainer from "./gridArticle/GridContainer";
import ListArticle from "./listTypeArticle/ListArticle";

const ListContainer = () => {
    const {category} = useParams();

    const {setIsHeaderSpecialized} = useHeaderColor();

    useEffect(() => {
        setIsHeaderSpecialized(false);
    }, [setIsHeaderSpecialized]);

    return (
        <S.ListContainer>
            <S.Grid>
                <S.Title>{techCategory[category]?.name}</S.Title>
                <S.TitleDivider>
                    <S.DividerCircle/>
                    <S.DividerLine/>
                </S.TitleDivider>
                <S.ContentsWrapper>
                    <GridContainer/>
                    {/*<S.listWrapper>*/}
                    {/*    <S.CategorySection>*/}
                    {/*        카테고리 섹션*/}
                    {/*    </S.CategorySection>*/}
                    {/*    <S.ArticleWrapper>*/}
                    {/*        {Array.from({length: 6}).map((_, index) => (*/}
                    {/*            <ListArticle/>*/}
                    {/*        ))}*/}
                    {/*    </S.ArticleWrapper>*/}
                    {/*</S.listWrapper>*/}
                    {/*<S.bannerWrapper>*/}
                    {/*    <S.DetailBanner>*/}
                    {/*        <S.BannerHeader>*/}
                    {/*            뭔가 있긴할건데 아직은 모르겠음*/}
                    {/*        </S.BannerHeader>*/}
                    {/*        <S.ImageWrapper>*/}
                    {/*            <img src={process.env.PUBLIC_URL + '/images/temp/articleImg2.jpg'} alt=""/>*/}
                    {/*        </S.ImageWrapper>*/}
                    {/*        <S.BannerContent>*/}
                    {/*            <div className="grid">*/}
                    {/*                <S.BannerTitle>*/}
                    {/*                    자바는 모두 다 자바?*/}
                    {/*                </S.BannerTitle>*/}
                    {/*            </div>*/}
                    {/*        </S.BannerContent>*/}
                    {/*    </S.DetailBanner>*/}
                    {/*</S.bannerWrapper>*/}
                </S.ContentsWrapper>
                <div style={{height: "1000px"}}></div>
            </S.Grid>
        </S.ListContainer>
    );
};

export default ListContainer;