import React from 'react';
import S from "./style";
import BasicLinkTag from "../../../components/tag/BasicLinkTag";

const ListArticle = () => {
    return (
        <S.Article>
            <div className="image-wrapper">
                <img src={process.env.PUBLIC_URL + '/images/temp/articleImg2.jpg'} alt=""/>
            </div>
            <S.ContentWrapper>
                <div className="upper">
                    <S.Title>자바는 모두 다 자바?</S.Title>
                    <S.HeadContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mattis
                        felis. Sed mi erat, sagittis eget placerat hendrerit, dignissim non odio. Sed auctor pulvinar
                        leo. Suspendisse accumsan iaculis luctus. Proin libero sem, laoreet non hendrerit tristique,
                        convallis non justo. Vestibulum congue lorem vel arcu interdum dapibus. Morbi dignissim gravida
                        nunc, id efficitur ligula euismod ut. Nulla rutrum mattis nisi eu lacinia. Aenean posuere cursus
                        ipsum a vestibulum. Etiam sit amet eros vel tortor auctor interdum. Ut ac dolor nec est
                        ultricies molestie.</S.HeadContent>
                </div>
                <div className="lower">
                    <BasicLinkTag variant="gray" color="white">
                        태그1
                    </BasicLinkTag>
                    <BasicLinkTag variant="gray" color="white">
                        태그2
                    </BasicLinkTag>
                    <BasicLinkTag variant="gray" color="white">
                        태그3
                    </BasicLinkTag>
                    <BasicLinkTag variant="gray" color="white">
                        태그4
                    </BasicLinkTag>
                    <BasicLinkTag variant="gray" color="white">
                        개처럼 박살난 시간
                    </BasicLinkTag>
                </div>
            </S.ContentWrapper>
        </S.Article>
    );
};

export default ListArticle;