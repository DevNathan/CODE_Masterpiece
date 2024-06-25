import React, { forwardRef } from "react";
import Input from "./style";

const BasicInput = forwardRef((props, ref) => {
  return (
    // size={size} shape={shape} variant={variant} color={color}
    <Input {...props} ref={ref} />
  );
});

export default BasicInput;
