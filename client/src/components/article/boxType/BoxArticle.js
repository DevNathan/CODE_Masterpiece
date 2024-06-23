import React from 'react';
import S from "./style";
import EyeIcon from "../../../assets/basics/EyeIcon";
import {localeString} from "../../../utils/util";
import HeartFull from "../../../assets/basics/HeartFull";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

const BoxArticle = () => {
    return (
        <S.Article>
            <S.Link to="/test/1234">
                <S.ImgWrapper>
                    <img src={process.env.PUBLIC_URL + "/images/temp/articleImg.jpg"} alt=""/>
                    <S.ArticleInfoWrapper>
                        <S.ArticleInfo>
                            <EyeIcon fill="#ffffff"/>
                            <p>{localeString(22308)}</p>
                        </S.ArticleInfo>
                        <S.ArticleInfo>
                            <HeartFull fill="#ff3535"/>
                            <p>{localeString(142)}</p>
                        </S.ArticleInfo>
                    </S.ArticleInfoWrapper>
                </S.ImgWrapper>
                <S.ContentWrapper>
                    <S.ContentSection>
                        <S.Title>Lorem ipsum ggg</S.Title>
                        <S.HeadContent>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in eros purus. Praesent
                            sollicitudin blandit risus, a elementum orci placerat eu. Sed gravida dignissim porta. Sed
                            tellus metus, pharetra imperdiet lectus ut, aliquam vulputate purus. Nunc convallis gravida
                            dapibus. Pellentesque molestie elementum lorem, in malesuada lorem viverra eu. Sed
                            sollicitudin,
                            nibh ac mollis pharetra, lectus augue venenatis erat, varius rutrum nibh lectus a ex. Donec
                            in
                            auctor nunc, nec finibus mauris. Nulla id tincidunt diam. Suspendisse placerat ex in
                            ullamcorper
                            convallis. Proin magna lacus, molestie non diam et, efficitur pretium purus. Quisque rhoncus
                            felis ac cursus faucibus. Praesent et placerat metus. Praesent tincidunt suscipit nisi sit
                            amet
                            iaculis. Quisque ultricies, diam ut cursus hendrerit, leo tellus pellentesque velit, a
                            sagittis
                            orci erat at elit.
                        </S.HeadContent>
                    </S.ContentSection>
                    <S.SpaceBetween>
                        <S.Timestamp>2024.06.21</S.Timestamp>
                        <S.More>
                            <p>더 알아보기</p>
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </S.More>
                    </S.SpaceBetween>
                </S.ContentWrapper>
            </S.Link>
        </S.Article>
    );
};

export default BoxArticle;