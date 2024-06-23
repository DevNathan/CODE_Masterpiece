import React, {useState} from 'react';
import S from "./style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import BasicTag from "../../tag/BasicTag";
import useMediaQuery from "../../../hook/useMediaQuery";
import {DEVICE_WIDTH} from "../../../global/media";
import {useTheme} from "../../../context/ThemeContext";

const Article = () => {
    const [themeMode] = useTheme();

    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [scale, setScale] = useState(1);

    const isTablet = useMediaQuery(`(max-width: ${DEVICE_WIDTH.tablet}px)`);

    const mouseMoveHandler = (e) => {
        if (isTablet) return;

        const article = e.currentTarget;
        const rect = article.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRotateX = -10 + (y / rect.height) * 20;
        const newRotateY = 10 - (x / rect.width) * 20;

        setRotateX(newRotateX);
        setRotateY(newRotateY);
    }

    const resetRotation = () => {
        setScale(1);
        if (isTablet) return;

        setRotateX(0);
        setRotateY(0);
    }

    const scaleUp = () => {
        setScale(1.1);
    }

    return (
        <S.Article
            to="/view/test"
            onMouseMove={mouseMoveHandler}
            onMouseLeave={resetRotation}
            onMouseEnter={scaleUp}
            style={{
                color: themeMode === "light" ? "#ffffff" : "#4d4d4d",
                transform: `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
            }}
        >
            <S.TagWrapper>
                <BasicTag $variant="white" $color="black">
                    태그1
                </BasicTag>
            </S.TagWrapper>
            <img src={process.env.PUBLIC_URL + '/images/temp/articleImg.jpg'} alt=""/>
            <S.ArticleContentWrapper>
                <S.ArticleUpperWrapper>
                    <h3 style={{color: themeMode === "light" ? "#3a3a3a" : "#D8D8D8"}}>타이틀 제목 예시 타이틀 제목 예시 타이틀 제목 예시</h3>
                    <p style={{color: themeMode === "light" ? "#797878" : "#B3B3B3"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel eros rutrum massa semper
                        imperdiet quis vitae arcu. Pellentesque sed mauris enim. Aliquam ac nunc porta, auctor risus
                        quis,
                        rutrum urna. Curabitur sed ex ut erat luctus tristique eu et augue. Pellentesque sollicitudin
                        est
                        sed lorem pretium viverra. Donec cursus ligula eu aliquet mollis. Praesent nec tempor elit, at
                        lacinia enim. Nunc ligula lorem, hendrerit ac condimentum et, pharetra eget elit. In scelerisque
                        sollicitudin sem quis varius. Donec ex nibh, eleifend cursus placerat at, mollis ut massa.</p>
                </S.ArticleUpperWrapper>
                <S.ArticleBottomWrapper>
                    <div>
                        <p>더 알아보기</p>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </div>
                    <time style={{color: themeMode === "light" ? "#797878" : "#CBCBCB"}}>n일전</time>
                </S.ArticleBottomWrapper>
            </S.ArticleContentWrapper>
        </S.Article>
    );
};

export default Article;