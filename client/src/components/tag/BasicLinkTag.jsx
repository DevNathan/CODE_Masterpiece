import React from 'react';
import {LinkTag} from "./style";

/*
* 링크형 태그 컴포넌트.
*
* @Param variant - 백그라운드 색상; themePrimary(테마색), lightGray(밝은 회색), gray(회색)
* @Param color - 글자 색상; white, black
* @Param to - 이동할 uri 경로 설정
*
* 태그들 간의 간격 설정은 부모태그에서 태그들의 간격을 설정할 것.
* */
const BasicLinkTag = ({children, ...rest}) => {
    return (
        <LinkTag {...rest}>
            <span>
                {children}
            </span>
        </LinkTag>
    );
};

export default BasicLinkTag;