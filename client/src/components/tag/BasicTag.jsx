import React from 'react';
import {Tag} from "./style";

/*
* 태그 컴포넌트
*
* @Param variant - 백그라운드 색상; themePrimary(테마색), lightGray(밝은 회색), gray(회색)
* @Param color - 글자 색상; white, black
*
* 태그들 간의 간격 설정은 부모태그에서 태그들의 간격을 설정할 것.
* */
const BasicTag = ({children, ...rest}) => {
    return (
        <Tag {...rest}>
            <span>
                {children}
            </span>
        </Tag>
    );
};

export default BasicTag;