import styled from "styled-components";
import React, { useState } from "react";
import { CalendarView } from "../Calendar.tsx";
import DiaryPop from "./components/DiaryPop.tsx";
import Date from "./components/Date.tsx";
import TitleArea from "./components/TitleArea.tsx";
import DiaryTitle from "./components/DiaryTitle.tsx";
import WriteTitle from "./components/WriteTitle.tsx";
import DiaryWrap from "./components/DiaryWrap.tsx";
import Buttons from "./components/Button.tsx";
import DiaryText from "./components/DiaryText.tsx";
import TextBox from "./components/WriteDiary.tsx";
import SaveButton from "./components/SaveButton.tsx";
import Weather from "./components/Weather.tsx";
import WeatherArea from "./components/WeatherArea.tsx";

interface DiaryProps {
  year: number;
  month: number;
  day: number;
  setCurrentView: (view: CalendarView) => void;
}

const Comment = styled.div`
  position: absolute;
  bottom: -35%;
  width: 461px;
  height: 23px;
  flex-shrink: 0;

  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;


const Diary: React.FC<DiaryProps> = ({ year, month, day, setCurrentView }) => {
  const [text, setText] = useState<string>("");
  const [savedText, setSavedText] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const defaultText = `오늘의 하루를 기록해주세요 !
오늘 하루 느꼈던 감정을 중심으로 작성해주시면 더욱 좋습니다 :)
ex) 오늘 하늘이 너무 맑아서 기분이 좋았다. 
근데 점심으로 먹은 마라탕에 바퀴벌레가 나와서 기분이 확 나빠졌다 !!
      ...`;

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    setSavedText(text);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <DiaryWrap>
      <Buttons onClick={() => setCurrentView("CALENDAR")}>back</Buttons>
      <DiaryPop>
        <Date>
          {year}/{month + 1}/{day}
        </Date>
        <TitleArea>
          <DiaryTitle>
            <WriteTitle></WriteTitle>
          </DiaryTitle>
        </TitleArea>
        <WeatherArea>
          날씨
          <Weather>🌤️</Weather>
          <Weather>⛅</Weather>
          <Weather>🌧️</Weather>
          <Weather>🌩️</Weather>
        </WeatherArea>
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
      <Comment>😉 오늘 하루를 솔직하게 기록해주세요</Comment>
    </DiaryWrap>
  );
};

export default Diary;
