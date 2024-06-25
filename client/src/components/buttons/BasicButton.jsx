import React from "react";
import styled from "styled-components";
import GeneralCSS from "../../global/generalCSS";

const Button = styled.button`
  ${GeneralCSS.flexCenterRow};
  padding: 16px 0;
  border-radius: 20px;
  cursor: pointer;
`;

// radious 20px의 일반 버튼.
const BasicButton = ({ children, className, ...props }) => {
  return (
    <Button className={className} {...props}>
      {children}
    </Button>
  );
};

export default BasicButton;
