import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import S from "./style";
import TopMain from "./TopMain";
import BlogInfo from "./blogInfo/BlogInfo";
import {useHeaderColor} from "../../context/headerColorContext";
import ArticlesContainer from "./article/ArticlesContainer";

const MainContainer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const {setIsHeaderSpecialized} = useHeaderColor();

    const handleClick = () => {
        setIsVisible(!isVisible);
        setIsHeaderSpecialized(false);
    };

    return (
        <S.MainContainer>
            <TopMain/>
            <S.MainButton onClick={handleClick}>
                <FontAwesomeIcon icon={faChevronDown}/>
            </S.MainButton>
            {isVisible &&
                <S.SlideUpContainer>
                    <S.SlideUpWrapper>
                        <BlogInfo/>
                        <ArticlesContainer/>
                    </S.SlideUpWrapper>
                </S.SlideUpContainer>
            }
        </S.MainContainer>
    );
};

export default MainContainer;
