import React, {useState, useEffect, useRef} from 'react';
import S from "./style";
import CategoryItem from "../../components/category/CategoryItem";
import {rootCategory} from "../../type/categories";

const TechCategory = () => {
    const categoryRef = useRef(null);
    const [showToUp, setShowToUp] = useState(false);
    const [showToDown, setShowToDown] = useState(true);

    const scrollToTop = () => {
        categoryRef.current.scrollTo({top: 0, behavior: 'smooth'});
    };

    const scrollToBottom = () => {
        categoryRef.current.scrollTo({top: categoryRef.current.scrollHeight, behavior: 'smooth'});
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = categoryRef.current.scrollTop;
            const scrollHeight = categoryRef.current.scrollHeight;
            const clientHeight = categoryRef.current.clientHeight;
            setShowToUp(scrollTop > 0);
            setShowToDown(scrollHeight - scrollTop !== clientHeight);
        };

        const categoryElement = categoryRef.current;
        if (categoryElement) {
            categoryElement.addEventListener('scroll', handleScroll);
            return () => {
                categoryElement.removeEventListener('scroll', handleScroll);
            };
        }
    }, [categoryRef]);

    return (
        <S.TechCategory onClick={(e) => e.stopPropagation()}>
            {showToUp && (
                <img
                    className="toUp"
                    src={process.env.PUBLIC_URL + '/images/icons/resources/upMark.svg'}
                    onClick={scrollToTop}
                />
            )}
            <S.CategoryWrapper ref={categoryRef}>
                {rootCategory.map((category, index) => (
                    <S.CategorySection key={index}>
                        <h3>{category.title}</h3>
                        <ul>
                            {category.items.map((item, index) => (
                                <li key={index}>
                                    <CategoryItem item={item}/>
                                </li>
                            ))}
                        </ul>
                    </S.CategorySection>
                ))}
                <S.Empty/>
            </S.CategoryWrapper>
            {showToDown && (
                <img
                    className="toDown"
                    src={process.env.PUBLIC_URL + '/images/icons/resources/downMark.svg'}
                    onClick={scrollToBottom}
                />
            )}
        </S.TechCategory>
    );
};

export default TechCategory;