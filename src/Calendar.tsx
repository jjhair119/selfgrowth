import styled, {css} from "styled-components"
import {useEffect, useState} from "react";
import {ConfirmButton} from "./App.tsx";
import Diary from "./Diary.tsx";
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

const HeaderWrap = styled.div`
    display: flex;
    justify-content: space-between;
    vertical-align: center;
    text-align: center;

    width: 100%;
    padding: 12px;
`

const CalendarHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 20%;

    font-weight: bolder;
    font-size: 20px;

    opacity: 60%;

    margin: 16px 0;

    a {
        width: 40px;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        flex-shrink: 1;
    }
`

const CalendarWeek = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 100%;
`

const DayWrap = styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;

    justify-content: space-around;

`

const WeekWrap = styled.div`
    display: flex;
    flex-direction: row;

    height: 100%;

    justify-content: space-around;

`

const BlankDay = styled.div`
    display: flex;

    width: 46px;
    height: 46px;
`

const CalendarDayButton = styled.div<{ $selectedDay?: number, $self?: number }>`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    display: flex;

    width: 46px;
    height: 46px;
    border-radius: 8px;

    align-items: center;
    justify-content: center;

    margin: 16px 0;

    background: #fff;

    color: #000;

    &:hover {
        ${(props) => (props.$selectedDay !== props.$self) && css`
            background: #e6e6e6;
        `}
    }

    ${(props) => (props.$selectedDay && (props.$selectedDay === props.$self)) && css`
        background: #FFA07D;
    `}
`

const ConfirmButtonWrap = styled.div`
    display: flex;
    align-items: center;
`

const ChangeMonthButton = styled.div`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    width: 40px;
    height: 40px;
    border-radius: 8px;

    color: #fff;
    background: #000;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    font-weight: bolder;

    margin: 0 18px;
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


//state로 저장해야할게
//currentMonth (YYYYMM)
//선택한 날짜 Dayjs | undefined
const Calendar: React.FC<CalendarProps> = () => {
    //달 영문 표기용
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    //날짜 선언
    const currentDate = new Date();
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [selectedDay, setSelectedDay] = useState<number>();

    //calendar, diary 중 현재 view 구분
    const [currentView, setCurrentView] = useState<CalendarView>("CALENDAR");


    //날짜 선택
    const handleDate = (currentDay: number) => {
        if (selectedDay == currentDay) {
            setSelectedDay(undefined);
        } else {
            setSelectedDay(currentDay);
        }
    }

    //총 날짜 수, 시작 요일
    const days_n = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    //앞쪽 black 처리
    const blanks = Array(firstDay).fill(null).map((value, index) => (
        <BlankDay key={`blank-${index}`} className="calendar-day empty"></BlankDay>
    ));

    //날짜 처리
    const days = Array.from({length: days_n}, (_, index) => (
        <CalendarDayButton className="calendar-day fill" key={`day-${index}`} onClick={() => handleDate(index)}
                           $selectedDay={selectedDay} $self={index}>
            {index + 1}
        </CalendarDayButton>
    ));

    //6주 처리
    let endBlanksNum = 35 - (firstDay + days_n);
    if (endBlanksNum < 0) {
        endBlanksNum = 7 + endBlanksNum;
    }

    //뒤쪽 blank 처리
    const endBlanks = Array(endBlanksNum).fill(null).map((value, index) => (
        <BlankDay key={`blank-${index}`} className="calendar-day empty"></BlankDay>
    ));

    //blank 포함한 모든 날짜
    const full_days = [...blanks, ...days, ...endBlanks];

    //주 단위로 분리
    const weeks = Array.from({length: Math.ceil(full_days.length / 7)}, (_, index) => (
        <WeekWrap key={`week-${index}`} className="calendar-week day">
            {full_days.slice(index * 7, index * 7 + 7)}
        </WeekWrap>
    ));

    //날짜 선택 후 Diary로 이동
    const onClickApply = () => {
        if (selectedDay) {
            setCurrentView("DIARY");
        }
    }

    //이전 달로 이동
    const onClickPrevious = () => {
        const updatedMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        const updatedYear = currentMonth === 0 ? currentYear - 1 : currentYear;
        setCurrentMonth(updatedMonth);
        setCurrentYear(updatedYear);
    }

    // 다음 달로 이동
    const onClickNext = () => {
        const updatedMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        const updatedYear = currentMonth === 11 ? currentYear + 1 : currentYear;
        setCurrentMonth(updatedMonth);
        setCurrentYear(updatedYear);
    }

    useEffect(() => {
        setSelectedDay(undefined);
    }, [currentMonth]);

    const navigate = useNavigate();

    //이전 페이지로 돌아가기
    //라우팅이 안되어있어서 작동 x -> 라우팅 작업 필요함...
    const onClickPreviousButton = () => {
        //navigate(-1);
        console.log("이전 페이지로")
    }

    return <CalendarWrap>
        <PreviousButton onClick={onClickPreviousButton}>X</PreviousButton>
        {
            currentView == "CALENDAR" && <><CalendarView>
                <HeaderWrap>
                    <ChangeMonthButton onClick={() => onClickPrevious()}>&lt;</ChangeMonthButton>
                    <div style={{height: 64, fontSize: 24, fontWeight: "bolder"}}>
                        {monthNames[currentMonth]} {currentYear}
                    </div>
                    <ChangeMonthButton onClick={() => onClickNext()}>&gt;</ChangeMonthButton>
                </HeaderWrap>
                <CalendarHeader>
                    <a>Sun</a>
                    <a>Mon</a>
                    <a>Tue</a>
                    <a>Wed</a>
                    <a>Thu</a>
                    <a>Fri</a>
                    <a>Sat</a>
                </CalendarHeader>
                <CalendarWeek>
                    <DayWrap>
                        {weeks}
                    </DayWrap>
                </CalendarWeek>
                <ConfirmButtonWrap>
                    <ConfirmButton $bgColor={"#e6e6e6"} $isSelected={selectedDay}
                                   onClick={() => onClickApply()}>apply</ConfirmButton>
                </ConfirmButtonWrap>

            </CalendarView>
                <div style={{marginTop: 32}}>💡 일기를 작성할 날짜를 선택해주세요</div>
            </>
        }
        {
            currentView == "DIARY" && <Diary
                year={currentYear} month={currentMonth} day={selectedDay}
                setCurrentView={setCurrentView}
            ></Diary>
        }
    </CalendarWrap>
}

export default Calendar
