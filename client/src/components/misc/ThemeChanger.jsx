import React from 'react';
import {useTheme} from "../../context/ThemeContext";
import ThemeIcon from "../../assets/misc/ThemeIcon";
import S from "./style";

const ThemeChanger = () => {
    const [themeMode, toggleTheme] = useTheme();

    return (
        <S.ThemeChanger onClick={toggleTheme}>
            <S.ThemeIndicator style={{ transform: `translateX(${themeMode === "light" ? "12px" : "-12px"})` }}>
                <ThemeIcon />
                <S.IconHider style={{ transform: `translate(${themeMode === "light" ? "10px, -10px" : "2px, -2px"})` }} />
            </S.ThemeIndicator>
        </S.ThemeChanger>
    );
};

export default ThemeChanger;
