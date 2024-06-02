import styled from "styled-components";
import React, {useEffect, useState} from "react";
import DiaryPop from "./components/DiaryPop.tsx";
import Date from "./components/Date.tsx";
import TitleArea from "./components/TitleArea.tsx";
import WriteTitle from "./components/WriteTitle.tsx";
import DiaryText from "./components/DiaryText.tsx";
import TextBox from "./components/WriteDiary.tsx";
import SaveButton from "./components/SaveButton.tsx";
import Weather from "./components/Weather.tsx";
import WeatherArea from "./components/WeatherArea.tsx";
import DiaryImage from "./components/DiaryImage.tsx";
import axios from "axios";
import dayjs from "dayjs";

interface DiaryProps {
    year: number;
    month: number;
    day?: number;
}

const Comment = styled.div`
    width: 462px;
    height: 24px;
    flex-shrink: 0;

    color: #000;
    text-align: center;
    margin-top: 32px;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const TitleWarp = styled.div`
    width: 100%;
    display: flex;
    align-content: space-around;
    align-items: center;
    text-align: center;
`

const Diary: React.FC<DiaryProps> = ({year, month, day}) => {
    const [text, setText] = useState<string>("");
    const [savedText, setSavedText] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string>(""); // 이미지 URL 상태 추가
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const date = dayjs(year.toString() + "-" + (month + 1).toString() + "-" + day?.toString()).format('YYYY-MM-DD');

    // fetch("https://port-0-rasingme-1ru12mlwbsd5mh.sel5.cloudtype.app/api/diaries/11/"+date)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setSavedText(data.content);
    //         console.log(data);
    //     });

    const defaultText = `아래의 수정버튼을 눌러 오늘의 하루를 기록해주세요 !

오늘 하루 느꼈던 감정을 중심으로 작성해주시면 더욱 좋습니다 :)

ex) 오늘 하늘이 너무 맑아서 기분이 좋았다. 

근데 점심으로 먹은 마라탕에 바퀴벌레가 나와서 기분이 확 나빠졌다 !!
      ...`;

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const handleSave = async () => {
        setSavedText(text);
        setIsEditing(false);

        fetch("https://port-0-rasingme-1ru12mlwbsd5mh.sel5.cloudtype.app/api/diaries/11/2024-06-01")
            .then((response) => response.json())
            .then((data) => console.log(data, date));

        axios
            .post(
                "https://port-0-rasingme-1ru12mlwbsd5mh.sel5.cloudtype.app/api/diaries?memberId=11",
                {
                    date: date,
                    title: "string",
                    content: savedText,
                    weather: "SUNNY",
                }
            )
            .then((response) => {
                console.log("저장 성공:", response.data);
            })
            .catch((error) => {
                console.error("저장 실패:", error);
            });
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <><DiaryPop>
            <TitleWarp>
                <Date>
                    {year}/{month + 1}/{day}
                </Date>
                <TitleArea>
                    <WriteTitle></WriteTitle>
                </TitleArea>
                <WeatherArea>
                    날씨
                    <Weather>🌤️</Weather>
                    <Weather>⛅</Weather>
                    <Weather>🌧️</Weather>
                    <Weather>🌩️</Weather>
                </WeatherArea>
            </TitleWarp>
            <DiaryImage></DiaryImage>
            <DiaryText>
                <TextBox
                    text={isEditing ? text : savedText || defaultText}
                    isEditing={isEditing}
                    handleTextChange={handleTextChange}
                />
            </DiaryText>
            <SaveButton
                isEditing={isEditing}
                handleSave={handleSave}
                handleEdit={handleEdit}
            />
        </DiaryPop>
            <Comment>😉 오늘 하루를 솔직하게 기록해주세요</Comment></>
    );
};

export default Diary;