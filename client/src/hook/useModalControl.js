import useBodyScrollLock from "./useBodyScrollLock";
import { useModal } from "../context/ModalContext";
import { useEffect } from "react";

const useModalControl = () => {
  const { lockScroll, openScroll } = useBodyScrollLock();
  const { selectedModal, setSelectedModal } = useModal();

  const handleMenuClick = (menuName) => {
    // 현재 클릭된 메뉴가 이미 선택된 메뉴와 같으면 선택 취소
    setSelectedModal((prevMenu) => (prevMenu === menuName ? null : menuName));
  };

  useEffect(() => {
    selectedModal ? lockScroll() : openScroll();
  }, [selectedModal, lockScroll, openScroll]);

  return handleMenuClick;
};

export default useModalControl;
