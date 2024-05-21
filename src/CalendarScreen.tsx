import styled from "styled-components"
import {useState} from "react";
import Diary from "./Diary/Diary.tsx";
import Calendar from "./Calendar.tsx";
import {Route, Routes} from "react-router-dom";

const CalendarWrap = styled.div`

    display: flex;
    vertical-align: center;
    justify-content: center;
    align-items: center;

    background: #FFD66C;

    padding: 128px;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;

    position: relative;

`

const CalendarView = styled.div`
    display: flex;
    background: white;
    flex-direction: column;
    align-items: center;
    flex-grow: 0;

    width: 48%;
    min-width: 560px;

    padding: 64px 32px;
    border-radius: 64px;
`

const PreviousButton = styled.div`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    position: absolute;
    top: 32px;
    right: 32px;

    width: 60px;
    height: 60px;

    color: #9E9E9E;
    font-size: 70px;
    font-weight: bolder;
`

interface CalendarProps {
}

export type CalendarView = "CALENDAR" | "DIARY";

const CalendarScreen: React.FC<CalendarProps> = () => {

    //날짜 선언
    const currentDate = new Date();
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [selectedDay, setSelectedDay] = useState<number>();

    const onClickPreviousButton = () => {
        //navigate(-1);
        console.log("이전 페이지로")
    }

    return <CalendarWrap>
        <PreviousButton onClick={onClickPreviousButton}>X</PreviousButton>
        <Routes>
            <Route
                path="/"
                element={
                    <Calendar
                        currentYear={currentYear}
                        currentMonth={currentMonth}
                        selectedDay={selectedDay}
                        setCurrentYear={setCurrentYear}
                        setCurrentMonth={setCurrentMonth}
                        setSelectedDay={setSelectedDay}
                    />
                }
            />
            <Route
                path="/diary"
                element={
                    <Diary year={currentYear} month={currentMonth} day={selectedDay} />
                }
            />
        </Routes>
    </CalendarWrap>
}

export default CalendarScreen