import React, {useEffect} from 'react';
import S from "./style";
import {useHeaderColor} from "../../context/headerColorContext";
import Planet1 from "../../assets/planet/Planet1";
import Planet2 from "../../assets/planet/Planet2";
import Destroyer from "../../assets/misc/Destroyer";
import Planet3 from "../../assets/planet/Planet3";
import Planet4 from "../../assets/planet/Planet4";

const NUM_STARS = 50;
const generateRandomPercentage = () => Math.floor(Math.random() * 100) + 1;

const TopMain = () => {
    const {setIsHeaderSpecialized} = useHeaderColor();

    useEffect(() => {
        setIsHeaderSpecialized(true);
    });

    const whiteStars = Array.from({length: NUM_STARS}, (_, index) => {
        const top = generateRandomPercentage();
        const left = generateRandomPercentage();
        return <S.WhiteStars key={index} $top={top} $left={left}/>;
    });

    const themeStars = Array.from({length: NUM_STARS}, (_, index) => {
        const top = generateRandomPercentage();
        const left = generateRandomPercentage();
        return <S.ThemeStars key={index} $top={top} $left={left}/>;
    });

    return (
        <S.ScreenSizeWrapper>
            <S.MainScreen>
                {whiteStars}
                {themeStars}
                <S.Planet $top={generateRandomPercentage()} $left={generateRandomPercentage()}>
                    <Planet1/>
                </S.Planet>
                <S.Planet $top={generateRandomPercentage()} $left={generateRandomPercentage()}>
                    <Planet2/>
                </S.Planet>
                <S.Planet $top={generateRandomPercentage()} $left={generateRandomPercentage()}>
                    <Planet3/>
                </S.Planet>
                <S.Planet $top={generateRandomPercentage()} $left={generateRandomPercentage()}>
                    <Planet4/>
                </S.Planet>
                <S.Planet $top={generateRandomPercentage()} $left={generateRandomPercentage()}>
                    <Destroyer/>
                </S.Planet>
            </S.MainScreen>
        </S.ScreenSizeWrapper>
    );
};

export default TopMain;