import React from 'react';
import {useModal} from "../../context/ModalContext";
import {techCategory} from "../../type/categories";
import S from "./style";

const CategoryItem = ({item}) => {
    const {name, link, file} = techCategory[item];

    const {setSelectedModal} = useModal();

    const handleClick = () => {
        setSelectedModal(null);
    };

    return (
        <S.ItemWrapper onClick={handleClick} to={link}>
            {file && (
                <img
                    src={`${process.env.PUBLIC_URL}/images/icons${file}.svg`}
                    alt={name}
                />
            )}
            <p>{name}</p>
        </S.ItemWrapper>
    );
};

export default CategoryItem;
