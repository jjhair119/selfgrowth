import styled, {css} from "styled-components"
import {useState} from "react";
import {ConfirmButton} from "./App.tsx";
import Diary from "./Diary.tsx";

const CalendarWrap = styled.div`
    
    display: flex;
    vertical-align: center;
    justify-content: center;
    align-items: center;

    background: #FFD66C;

    padding: 128px;
    flex-direction: column;
    flex-grow: 1;
`

const CalendarView = styled.div`
    display: flex;
    background: white;
    flex-direction: column;
    align-items: center;
    flex-grow: 0;

    width: 40%;

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
    height:100%;
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

    width: 40px;
    height: 40px;
`

const CalendarDayButton = styled.div<{ $selectedDay?: number, $self?:number, $isSelected?:boolean}>`
    display: flex;
    
    width: 40px;
    height: 40px;
    border-radius: 6px;
    
    align-items: center;
    justify-content: center;
    
    margin : 14px 0;

    background: #fff;
    
    color: #000;
    
    &:hover {
        ${(props) => (!props.$isSelected) && css`
            background: #e6e6e6;
        `}
    }

    ${(props) => (props.$isSelected && (props.$selectedDay === props.$self)) && css`
        background: #FFA07D;
    `}
`

const ConfirmButtonWrap = styled.div`
    display: flex;
    align-items: center;
`

const ChangeMonthButton = styled.div`
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

interface CalendarProps {
}

export type CalendarView = "CALENDAR"|"DIARY";

const Calendar: React.FC<CalendarProps> = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]; //달 영문 표기용

    //날짜 선언
    const [thisDay, setThisDay] = useState(new Date());
    const year = thisDay.getFullYear();
    const month = thisDay.getMonth();
    const day = thisDay.getDate();

    // const setYear = (data:number) => {
    //     const newDate = new Date(data, month, day)
    //     setThisDay(newDate);
    // }

    const setMonth = (data:number) => {
        const newDate = new Date(year, data-1, day)
        setThisDay(newDate);
    }

    const setDay = (data:number) => {
        const newDate = new Date(year, month, data)
        setThisDay(newDate);
    }

    //날짜 선택 여부
    const [isSelected, setIsSelected] = useState<boolean>(false);
    //calendar, diary 중 현재 view 구분
    const [currentView, setCurrentView] = useState<CalendarView>("CALENDAR");

    const handleDate = (currentDay:number) => {
        setDay(currentDay);
        if (day === currentDay){
            if (!isSelected) setIsSelected(true)
            else {
                setIsSelected(false)
            }
        }
    } //날짜 선택
    //왜 오류나는지는 알겠는데 고치지를 못하겠네

    //총 날짜 수, 시작 요일
    const days_n = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const blanks = Array(firstDay).fill(null).map((value, index) => (
        <BlankDay key={`blank-${index}`} className="calendar-day empty"></BlankDay>
    )); //앞쪽 black 처리

    const days = Array.from({length: days_n}, (_, index) => (
        <CalendarDayButton className="calendar-day fill" key={`day-${index}`} onClick={() => handleDate(index)} $selectedDay={day} $self={index} $isSelected={isSelected}>
            {index+1}
        </CalendarDayButton>
    )); //날짜 처리

    let endBlanksNum = 35 - (firstDay+days_n);
    if (endBlanksNum<0) {
        endBlanksNum = 7+endBlanksNum;
    } //6주 처리

    const endBlanks = Array(endBlanksNum).fill(null).map((value, index) => (
        <BlankDay key={`blank-${index}`} className="calendar-day empty"></BlankDay>
    )); //뒤쪽 blank 처리

    //blank 포함한 모든 날짜
    const full_days = [...blanks, ...days, ...endBlanks];

    const weeks = Array.from({length: Math.ceil(full_days.length / 7)}, (_, index) => (
        <WeekWrap key={`week-${index}`} className="calendar-week day">
            {full_days.slice(index * 7, index * 7 + 7)}
        </WeekWrap>
    )); //주 단위로 분리

    const onClickApply = () => {
        if (isSelected){
            setIsSelected(false);
            setCurrentView("DIARY");
        }
    } //날짜 선택 후 Diary로 이동

    const onClickMonthChanger = (state:boolean) => {
        //state = true -> past, false -> next

        if (state) setMonth(month-1);
        else setMonth(month+2);
    } //달 변경

    return (
        <div style={{height:"100%"}}>
            <CalendarWrap>
                {
                    currentView == "CALENDAR" && <CalendarView>
                        <HeaderWrap>
                            <ChangeMonthButton onClick={() => onClickMonthChanger(true)}>&lt;</ChangeMonthButton>
                            <div style={{height: 64, fontSize:24, fontWeight:"bolder"}}>
                                {monthNames[month]} {year}
                            </div>
                            <ChangeMonthButton onClick={() => onClickMonthChanger(false)}>&gt;</ChangeMonthButton>
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
                            <ConfirmButton $bgColor={"#e6e6e6"} $isSelected={isSelected} onClick={()=>onClickApply()}>apply</ConfirmButton>
                        </ConfirmButtonWrap>
                    </CalendarView>
                }
                {
                    currentView == "DIARY" && <Diary
                        year={year} month={month} day={day}
                        setCurrentView={setCurrentView}
                    ></Diary>
                }
            </CalendarWrap>
        </div>
    )
}

export default Calendar
