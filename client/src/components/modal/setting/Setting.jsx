import React from 'react';
import ThemeChanger from "../../misc/ThemeChanger";
import S from "./style";

const Setting = () => {
    return (
        <S.Settings onClick={(e) => e.stopPropagation()}>
            <ThemeChanger/>
        </S.Settings>
    );
};

export default Setting;