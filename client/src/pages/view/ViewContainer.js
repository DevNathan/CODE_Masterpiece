import React, {useEffect, useState} from 'react';
import S from "./style";
import WriteIcon from "../../assets/basics/WriteIcon";
import HeartFull from "../../assets/basics/HeartFull";
import {localeString} from "../../utils/util";
import Comment from "../../assets/basics/Comment";
import {useHeaderColor} from "../../context/headerColorContext";
import ShareIcon from "../../assets/basics/ShareIcon";
import {useModal} from "../../context/ModalContext";
import BoxArticle from "../../components/article/boxType/BoxArticle";

const ViewContainer = () => {
    const [opacity, setOpacity] = useState(1);
    const [scale, setScale] = useState(1);

    const {setSelectedModal} = useModal();

    const handleMenuClick = (menuName) => {
        setSelectedModal((prevMenu) => (prevMenu === menuName ? null : menuName));
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const newOpacity = Math.max(1 - scrollY / 688, 0);
        const newScale = Math.min(1 + scrollY / 688 * 0.5, 1.5);
        setOpacity(newOpacity);
        setScale(newScale);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const {setIsHeaderSpecialized} = useHeaderColor();

    useEffect(() => {
        setIsHeaderSpecialized(false);
    }, [setIsHeaderSpecialized]);

    return (
        <S.ViewContainer>
            <S.TopImageWrapper className="image-wrapper" style={{opacity}}>
                <img src={process.env.PUBLIC_URL + '/images/temp/articleImg3.jpg'} alt=""
                     style={{transform: `scale(${scale})`}}/>
            </S.TopImageWrapper>
            <S.ViewWrapper>
                <S.GradientMask/>
                <S.ArticleContainer>
                    <S.Grid>
                        <S.Article>

                            <S.Header>
                                <S.HeaderWrapper>
                                    <S.SpaceBetween style={{alignItems: "flex-end"}}>
                                        <S.Title>자바는 모든 걸 다 자바?</S.Title>
                                        <S.RowWrapper>
                                            <S.InfoWrapper>
                                                <HeartFull fill="#FF3636"/>
                                                <p>{localeString(11234)}</p>
                                            </S.InfoWrapper>
                                            <S.InfoWrapper>
                                                <Comment fill="#575757"/>
                                                <p>{localeString(1234)}</p>
                                            </S.InfoWrapper>
                                            <S.InfoWrapper>
                                                <S.ShareButton onClick={() => handleMenuClick("LinkShare")}>
                                                    <ShareIcon/>
                                                </S.ShareButton>
                                            </S.InfoWrapper>
                                        </S.RowWrapper>
                                    </S.SpaceBetween>
                                    <div className="divider">
                                        <hr/>
                                    </div>
                                    <S.SpaceBetween style={{alignItems: "flex-start"}}>
                                        <S.HeadContent>
                                            <p>자바는 객체지향언어로써, 쉽게 풀어 우리가 사물을 바라보는 관점을 언어로 옮겨놓은 것과 거의 동일하다. 객체지향언어의 장점은 인간의
                                                언어를 그대로 대입해 놓은 것과 비슷한 효과를 주기 때문에 타인이 작성한 코드를 해석하기가 객체지향언어가 아닌 다른 언어들과
                                                비교했을 때 더욱 수월한 면이 있다. 그러나 자바는 당연히 누구나 알고, 혹은 예상하듯 만능 언어가 당연히 아니다. 이 글을 통해
                                                자바의 장단점과 이 언어를 채택하기 적절한 상황에 대해 생각해보고 마지막으로 오늘날과 앞으로의 미래세대에 자바의 입지에 대해
                                                예상해보자.</p>
                                        </S.HeadContent>
                                        <S.InfoWrapper>
                                            <WriteIcon fill="#575757"/>
                                            <time>2024.04.14</time>
                                        </S.InfoWrapper>
                                    </S.SpaceBetween>
                                </S.HeaderWrapper>
                            </S.Header>

                            <S.Content>
                                <figure>
                                    <a href="https://blog.kakaocdn.net/dn/NzjYc/btrZzK4GVQg/ZJkKUq1wDpMYhvyUdDatYK/img.webp">
                                        <img
                                            src="https://blog.kakaocdn.net/dn/NzjYc/btrZzK4GVQg/ZJkKUq1wDpMYhvyUdDatYK/img.webp"
                                            alt="시맨틱태그"/>
                                    </a>
                                </figure>
                                <h2>시맨틱 태그 (Semantic Tag)</h2>
                                <p>사람이 이해하기 쉽도록 태그의 이름만 보고도 역할이나 위치를 알 수 있도록(=의미가 통하는, semantic) 만든 태그들이다.</p>
                                <p>semantic 태그가 나오기 이전 아래 그림과 같이 &lt;div&gt; 태그로 일일히 위치 범위를 지정하고 각 태그의 class 명으로 이
                                    요소의 역할을 명시해야 했지만, semantic 태그를 이용하면 태그 이름에서 이 엘리먼트의 위치와 역할을 단번에 알 수 있기 때문에 좀
                                    더 <b>모던</b>하다고 말할 수 있는 것이다.</p>
                                <figure>
                                    <a href="https://blog.kakaocdn.net/dn/db9BeX/btrZr0g3iYx/M3De8LEE9drfawmqpjRppk/img.png">
                                        <img
                                            src="https://blog.kakaocdn.net/dn/db9BeX/btrZr0g3iYx/M3De8LEE9drfawmqpjRppk/img.png"
                                            alt="시맨틱태그"/>
                                    </a>
                                </figure>
                                <hr/>
                                <h3>시맨틱 태그 구성 요소</h3>
                                <figure>
                                    <img
                                        src="https://blog.kakaocdn.net/dn/cr3BEG/btrf7z7yVNy/wBhdCQh4TB2V3juwHesOG0/img.png"
                                        alt="시맨틱태그"/>
                                </figure>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td><b>시맨틱 웹을 위한 태그</b></td>
                                        <td><b>&nbsp; 설명</b></td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp; header</td>
                                        <td>&nbsp; 페이지의 머리글, 제목, 로고, 메뉴, 검색 관련, 유틸, 작성자의 이름 등등으로 구성</td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp; nav</td>
                                        <td>&nbsp; 페이지의 내비게이션 영역. (사이트 내, 외부로 이동). 메뉴, 목차, 색인 등등</td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp; main</td>
                                        <td>&nbsp; 메인 컨텐츠 영역. 문서 내에서 반드시 <span>한 번만</span> 사용 다른 header, footer,
                                            nav, article, section, aside의 하위로 작성할 수 없다.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp; section</td>
                                        <td>&nbsp; 본문의 여러 내용(article)을 포함하는 부분을 의미</td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp; article</td>
                                        <td>&nbsp; 본문의 주 내용이 들어가는 부분을 의미</td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp; aside</td>
                                        <td>&nbsp; 간접 컨텐츠, 보조 컨텐츠를 의미하며, 대체적으로 옆에 위치하는 내용의 부분을 의미</td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp; footer</td>
                                        <td>&nbsp; 하단 바닥글을 의미합니다. 주로 들어가는 정보는 회사정보, 저작권, 연락처 등등이 있다.</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <p>위의 시맨틱 태그 레이아웃을 네이버 홈페이지로 비유하자면 아래와 같이 구성할 수 있다.</p>
                                <figure>
                                    <img
                                        src="https://blog.kakaocdn.net/dn/bqiMT0/btrfXGl6XFs/S9sKI92wtQCLuURlYHZx00/img.png"
                                        alt="시맨틱태그"/>
                                </figure>
                                <figure>
                                    <img
                                        src="https://blog.kakaocdn.net/dn/BG81Q/btrf3yOAWwu/mdnBASssBh2AV05SpBtIk1/img.png"
                                        alt="시맨틱태그"/>
                                </figure>
                                <hr/>
                                <h4><span><b>&lt;header&gt;</b></span></h4>
                                <ul>
                                    <li>문서나 특정 섹션(section)의 헤더(header)를 정의할 때 사용한다.</li>
                                    <li>헤더(header)는 보통 도입부에 해당하는 콘텐츠나 네비게이션 링크의 집합 등과 같은 정보를 포함하게 된다.
                                        <ul>
                                            <li>하나 이상의 제목 요소(h1 ~ h6)</li>
                                            <li>로고(logo)나 아이콘(icon)</li>
                                            <li>저자(author) 정보</li>
                                        </ul>
                                    </li>
                                </ul>
                                <pre>&lt;header&gt;
                                    &lt;h3&gt;날씨 정보&lt;/h4&gt;
                                    &lt;h4&gt;2월 19일&lt;/h4&gt;
                                    &lt;p&gt;- 기상청 제공 -&lt;/p&gt;
                                    &lt;/header&gt;</pre>
                                <h4><span><b>&lt;footer&gt;</b></span></h4>
                                <ul>
                                    <li>문서나 특정 섹션(section)의 푸터(footer)를 정의할 때 사용합니다.</li>
                                    <li>푸터(footer)는 보통 &lt;footer&gt; 요소가 포함되어 있는 문서나 섹션에 대한 아래와 같은 정보를 포함한다.
                                        <ul>
                                            <li>저자(author) 정보</li>
                                            <li>저작권 정보</li>
                                            <li>연락처</li>
                                            <li>사이트맵(sitemap)</li>
                                            <li>페이지 맨 위로 되돌아갈 수 있는 Top 버튼</li>
                                            <li>연관 페이지 등</li>
                                        </ul>
                                    </li>
                                </ul>
                                <h4><span><b>&lt;address&gt;</b></span></h4>
                                <ul>
                                    <li>사이트 제작자 정보, 연락처 정보</li>
                                    <li>실제 우편 주소를 넣는 태그는 아니지만 웹사이트와 관련된 주소를 넣을 때 사용.</li>
                                </ul>
                                <h4><span><b>&lt;main&gt;</b></span></h4>
                                <ul>
                                    <li>해당 문서의 &lt;body&gt; 요소의 주 콘텐츠(main content)를 정의하는 데 사용합니다.</li>
                                    <li>단 하나의 &lt;main&gt; 요소만 포함할 수 있습니다.</li>
                                    <li>문서의 주 콘텐츠 영역을 가리키며, 광고 또는 사이드바와 같은 부수적인 콘텐츠를 포함할 수 있습니다.</li>
                                    <li>구조적으로 &lt;header&gt;, &lt;footer&gt; 등과 같은 요소들의 하위로 올 수 없습니다.</li>
                                    <li>원칙적으로 문서 내에서 하나의 &lt;main&gt; 요소만을 포함해야 한다는 사실을 반드시 준수해야 합니다.</li>
                                    <li>추가적으로 &lt;main&gt; 요소는 구성 요소가 포함되어 있는 웹사이트의 맨 위의 부분을 정의하는 데 사용할 수
                                        있습니다.
                                    </li>
                                    <li>구조적으로 &lt;header&gt;, &lt;footer&gt; 등과 같은 요소들의 하위로 올 수 있습니다.</li>
                                </ul>
                                <h4><span><b>&lt;nav&gt;</b></span></h4>
                            </S.Content>

                            <S.OtherContentsWrapper>
                                <div className="upper">
                                    <h3>Title</h3>
                                    <p>Main Text</p>
                                </div>
                                <div className="lower">
                                    <S.ArticlesWrapper>
                                        <BoxArticle/>
                                        <BoxArticle/>
                                        <BoxArticle/>
                                        <BoxArticle/>
                                    </S.ArticlesWrapper>
                                </div>
                            </S.OtherContentsWrapper>

                        </S.Article>
                    </S.Grid>
                </S.ArticleContainer>
            </S.ViewWrapper>
        </S.ViewContainer>
    );
};

export default ViewContainer;
