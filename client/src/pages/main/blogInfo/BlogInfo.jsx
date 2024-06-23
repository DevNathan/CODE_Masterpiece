import React from 'react';
import S from "./style";
import BasicButton from "../../../components/button/BasicButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {localeString} from "../../../utils/util";

const tempDatas = [
    {date: '2023-11', visitors: 3053},
    {date: '2023-12', visitors: 1240},
    {date: '2024-01', visitors: 155},
    {date: '2024-02', visitors: 1234},
    {date: '2024-03', visitors: 221},
    {date: '2024-04', visitors: 554},
    {date: '2024-05', visitors: 951},
    {date: '2024-06', visitors: 6512}
];

const maxVisitors = Math.max(...tempDatas.map(data => data.visitors));

const tempDatasWithPercentage = tempDatas.map(data => ({
    ...data,
    percentage: (data.visitors / maxVisitors) * 100,
    formattedDate: formatMonthYear(data.date)
}));

function formatMonthYear(dateString) {
    const [year, month] = dateString.split('-');
    if (month === "01") {
        return `${year}/1월`;
    }
    return `${parseInt(month, 10)}월`;
}

const BlogInfo = () => {
    return (
        <S.BlogInfo>
            <S.VisitorInfoWrapper>
                <S.Visitors>
                    <p>총 방문자 수</p>
                    <S.VisitorCount>20,234,874</S.VisitorCount>
                </S.Visitors>
                <S.VisitorStat>
                    {tempDatasWithPercentage.map((data, index) => (
                        <S.MonthVisitorStat key={index}>
                            <S.StatVisitors>{localeString(data.visitors) + "명"}</S.StatVisitors>
                            <S.StatBar $percentage={data.percentage} />
                            <S.StatName>{data.formattedDate}</S.StatName>
                        </S.MonthVisitorStat>
                    ))}
                </S.VisitorStat>
            </S.VisitorInfoWrapper>
            <S.ManagerInfoWrapper>
                <S.SubscriptionSection>
                    <S.AvatarWrapper>
                        <img src={process.env.PUBLIC_URL + '/images/avatar/avatar.jpg'} alt="아바타"/>
                    </S.AvatarWrapper>
                    <S.UserName>Nathan</S.UserName>
                    <S.SubscriptionCountWrapper>
                        <p>구독자</p>
                        <S.SubscriptionCount>12,345</S.SubscriptionCount>
                    </S.SubscriptionCountWrapper>
                    <BasicButton className="basic" $variant="themePrimary" $shape="small" $size="large" $color="white">
                        <FontAwesomeIcon icon={faBell}/>
                        <S.SubscriptionButtonLine>Subscription</S.SubscriptionButtonLine>
                    </BasicButton>
                </S.SubscriptionSection>
            </S.ManagerInfoWrapper>
        </S.BlogInfo>
    );
};

export default BlogInfo;