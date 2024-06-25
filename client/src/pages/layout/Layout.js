import React, { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faGear } from "@fortawesome/free-solid-svg-icons";
import TechCategory from "./TechCategory";
import { useHeaderColor } from "../../context/headerColorContext";
import { useModal } from "../../context/ModalContext";
import Login from "../../components/modal/form/Login";
import Logo from "../../assets/logo/Logo";
import Menu from "../../assets/interface/Menu";
import Setting from "../../components/modal/setting/Setting";
import LinkShare from "../../components/modal/linkShare/LinkShare";
import useModalControl from "../../hook/useModalControl";
import Subscription from "../../components/modal/form/Subscription";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { selectedModal } = useModal();
  const controlModal = useModalControl();

  const handleModal = useCallback(
    (menuName) => {
      controlModal(menuName);
    },
    [controlModal],
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.ctrlKey && e.key === "a") {
        e.preventDefault();
        handleModal("Login");
      }

      if (e.ctrlKey && e.key === "f") {
        e.preventDefault();
      }
    },
    [handleModal],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const { isHeaderSpecialized } = useHeaderColor();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Wrapper>
      <S.Header $isSpecialized={isHeaderSpecialized} $isScrolled={isScrolled}>
        <S.Logo to="/">
          <Logo />
        </S.Logo>

        <S.NavUl>
          <S.NavLi
            onClick={() => handleModal("Tech Stack")}
            className={selectedModal === "Tech Stack" ? "selected" : ""}
          >
            <p>Tech Stack</p>
          </S.NavLi>
          <S.NavLi
            onClick={() => handleModal("Blog Dev Diary")}
            className={selectedModal === "Blog Dev Diary" ? "selected" : ""}
          >
            <p>Blog Dev Diary</p>
          </S.NavLi>
          <S.NavLi
            onClick={() => handleModal("Computer Science")}
            className={selectedModal === "Computer Science" ? "selected" : ""}
          >
            <p>Computer Science</p>
          </S.NavLi>
          <S.NavLi
            onClick={() => handleModal("My Daily")}
            className={selectedModal === "My Daily" ? "selected" : ""}
          >
            <p>My Daily</p>
          </S.NavLi>
        </S.NavUl>

        <S.HeaderMiscRightWrapper>
          <S.IconBox className="menu">
            <Menu fill="#ffffff" />
          </S.IconBox>
          <S.IconBox className="search">
            <FontAwesomeIcon icon={faSearch} />
          </S.IconBox>
        </S.HeaderMiscRightWrapper>
      </S.Header>

      <S.MobileHeader>
        <S.MobileLogoWrapper>
          <img
            src={process.env.PUBLIC_URL + "/images/avatar/avatar.jpg"}
            alt=""
          />
        </S.MobileLogoWrapper>
        <S.MobileMenuWrapper>
          <S.MobileMenuButton></S.MobileMenuButton>
        </S.MobileMenuWrapper>
      </S.MobileHeader>

      <S.ModalWrapper
        style={{
          opacity: selectedModal !== null ? 1 : 0,
          visibility: selectedModal !== null ? "visible" : "hidden",
        }}
        onClick={() => handleModal(null)}
      >
        {(function () {
          // 함수 선언 후 바로 사용
          switch (selectedModal) {
            case "Settings":
              return <Setting />;
            case "Tech Stack":
              return <TechCategory />;
            case "Login":
              return <Login />;
            case "Subscription":
              return <Subscription />;
            case "LinkShare":
              return <LinkShare />;
            default:
              return null;
          }
        })()}
      </S.ModalWrapper>

      <S.Main>
        <Outlet />
      </S.Main>

      <S.HoverButtonsWrapper>
        <S.SettingButton onClick={() => handleModal("Settings")}>
          <FontAwesomeIcon icon={faGear} />
        </S.SettingButton>
      </S.HoverButtonsWrapper>
    </S.Wrapper>
  );
};

export default Layout;
