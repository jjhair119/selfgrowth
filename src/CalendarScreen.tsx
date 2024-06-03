import styled from "styled-components";
import { useState } from "react";
import Diary from "./Diary/Diary";
import Calendar from "./Calendar";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

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
    min-height: 1000px;
`;

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
    cursor: pointer;
`;

const CalendarScreen: React.FC = () => {
    const navigate = useNavigate();

    const currentDate = new Date();
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [selectedDay, setSelectedDay] = useState<number>();

    const onClickPreviousButton = () => {
        navigate(-1);
        console.log("이전 페이지로");
    };

    return (
        <CalendarWrap>
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
                    path="diary"
                    element={<Diary year={currentYear} month={currentMonth} day={selectedDay} />}
                />
            </Routes>
        </CalendarWrap>
    );
};

export default CalendarScreen;
