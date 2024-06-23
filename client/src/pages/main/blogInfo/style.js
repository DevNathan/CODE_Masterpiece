import styled from "styled-components";
import GeneralCSS from "../../../global/generalCSS";
import {THEME_TRANSITION_DURATION} from "../../../global/constant";
import generalCSS from "../../../global/generalCSS";
import media from "../../../global/media";

const S = {};

S.BlogInfo = styled.div`
    width: 100vw;
    height: auto;
    min-height: 100vh;
    ${GeneralCSS.flexCenterColumn};
    padding-top: 160px;
    background-color: ${({theme}) => theme.bgColor.secondary};
    ${GeneralCSS.transitionBackgroundColorEase(THEME_TRANSITION_DURATION)};
`;

S.VisitorInfoWrapper = styled.div`
    ${generalCSS.webGrid};
    width: 100%;
    height: auto;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 122px;
    color: ${({theme}) => theme.themeMode === 'light' ? "#f1f1f1" : "#6b6b6b"};
    
    ${media.laptop`
        flex-direction: column;
    `}
`;

S.Visitors = styled.div`
    width: 320px;
    margin-right: 80px;

    & p {
        font-size: 25px;
        font-weight: 600;
    }

    ${media.laptop`
        margin-right: 0;
        margin-bottom: 80px;
    `}
`;

S.VisitorCount = styled.h1`
    font-size: 60px;
    font-weight: 600;
`;

S.VisitorStat = styled.div`
    box-sizing: border-box;
    flex: 1;
    position: relative;
    max-width: 780px;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    
    ${media.laptop`
        max-width: 700px;
    `};
`;

S.MonthVisitorStat = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

S.StatVisitors = styled.div`
    position: absolute;
    top: -20px;
`;

S.StatBar = styled.div`
    background-color: #8a8a8a;
    width: 60px;
    height: ${({$percentage}) => ($percentage / 100) * 300}px;
    flex-grow: 1;
`;

S.StatName = styled.div`
    position: absolute;
    bottom: -20px;
    white-space: nowrap;
`;

S.ManagerInfoWrapper = styled.div`
    width: 100%;
    //height: 640px;
    ${GeneralCSS.flexCenterRow};
`;

S.SubscriptionSection = styled.div`
    width: 320px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

S.AvatarWrapper = styled.div`
    width: 184px;
    height: 184px;
    border-radius: 50%;
    ${GeneralCSS.flexCenter};
    overflow: hidden;
    margin-bottom: 16px;

    & img {
        width: 184px;
        height: 184px;
    }
`;

S.UserName = styled.p`
    font-size: 30px;
    font-weight: 600;
    color: ${({theme}) => theme.textColor};
    margin-bottom: 8px;
`;

S.SubscriptionCountWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 28px;

    & p {
        font-size: 12px;
        color: ${({theme}) => theme.themeMode === "light" ? "#868686" : "#868686"};
        margin-right: 4px;
    }
`;

S.SubscriptionCount = styled.h3`
    font-size: 22px;
    color: ${({theme}) => theme.themeMode === "light" ? "#717171" : "#868686"};
    font-weight: 600;
    font-family: 'Noto-Sans-KR-Medium';
`;

S.SubscriptionButtonLine = styled.p`
    font-size: 20px;
    font-weight: 600;
`;

export default S;