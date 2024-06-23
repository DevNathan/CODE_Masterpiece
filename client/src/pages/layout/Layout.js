import React, {useCallback, useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import S from "./style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faGear} from "@fortawesome/free-solid-svg-icons";
import TechCategory from "./TechCategory";
import {useHeaderColor} from "../../context/headerColorContext";
import {useModal} from "../../context/ModalContext";
import Login from "../../components/modal/loginForm/Login";
import Logo from "../../assets/logo/Logo";
import Menu from "../../assets/interface/Menu";
import Setting from "../../components/modal/setting/Setting";
import LinkShare from "../../components/modal/linkShare/LinkShare";
import useBodyScrollLock from "../../hook/useBodyScrollLock";

const Layout = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const {lockScroll, openScroll} = useBodyScrollLock();
    const {selectedModal, setSelectedModal} = useModal();

    const handleMenuClick = (menuName) => {
        // 현재 클릭된 메뉴가 이미 선택된 메뉴와 같으면 선택 취소
        setSelectedModal((prevMenu) => (prevMenu === menuName ? null : menuName));
    };

    const handleKeyDown = useCallback((e) => {
        if (e.ctrlKey && e.key === 'a') {
            e.preventDefault();
            setSelectedModal((prev) => (prev === "Login" ? null : "Login"));
        }

        if (e.ctrlKey && e.key === 'f') {
            e.preventDefault();
        }
    }, [setSelectedModal]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    const {isHeaderSpecialized} = useHeaderColor();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 1000);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        selectedModal ? lockScroll() : openScroll();
    }, [selectedModal, lockScroll, openScroll]);

    return (
        <S.Wrapper>
            <S.Header $isSpecialized={isHeaderSpecialized} $isScrolled={isScrolled}>
                <S.Logo to="/">
                    <Logo/>
                </S.Logo>

                <S.NavUl>
                    <S.NavLi onClick={() => handleMenuClick("Tech Stack")}
                             className={selectedModal === "Tech Stack" ? "selected" : ""}>
                        <p>Tech Stack</p>
                    </S.NavLi>
                    <S.NavLi onClick={() => handleMenuClick("Blog Dev Diary")}
                             className={selectedModal === "Blog Dev Diary" ? "selected" : ""}>
                        <p>Blog Dev Diary</p>
                    </S.NavLi>
                    <S.NavLi onClick={() => handleMenuClick("Computer Science")}
                             className={selectedModal === "Computer Science" ? "selected" : ""}>
                        <p>Computer Science</p>
                    </S.NavLi>
                    <S.NavLi onClick={() => handleMenuClick("My Daily")}
                             className={selectedModal === "My Daily" ? "selected" : ""}>
                        <p>My Daily</p>
                    </S.NavLi>
                </S.NavUl>

                <S.HeaderMiscRightWrapper>
                    <S.IconBox className="menu">
                        <Menu fill="#ffffff"/>
                    </S.IconBox>
                    <S.IconBox className="search">
                        <FontAwesomeIcon icon={faSearch}/>
                    </S.IconBox>
                </S.HeaderMiscRightWrapper>
            </S.Header>

            <S.MobileHeader>
                <S.MobileLogoWrapper>
                    <img src={process.env.PUBLIC_URL + "/images/avatar/avatar.jpg"} alt=""/>
                </S.MobileLogoWrapper>
            </S.MobileHeader>

            <S.ModalWrapper
                style={{
                    opacity: selectedModal !== null ? 1 : 0,
                    visibility: selectedModal !== null ? 'visible' : 'hidden',
                }}
                onClick={() => handleMenuClick(null)}
            >
                {(() => {
                    switch (selectedModal) {
                        case "Settings":
                            return <Setting/>;
                        case "Tech Stack":
                            return <TechCategory/>;
                        case "Login":
                            return <Login/>;
                        case "LinkShare":
                            return <LinkShare/>;
                        default:
                            return null;
                    }
                })()}
            </S.ModalWrapper>

            <S.Main>
                <Outlet/>
            </S.Main>

            <S.HoverButtonsWrapper>
                <S.SettingButton onClick={() => handleMenuClick("Settings")}>
                    <FontAwesomeIcon icon={faGear}/>
                </S.SettingButton>
            </S.HoverButtonsWrapper>
        </S.Wrapper>
    );
};

export default Layout;
