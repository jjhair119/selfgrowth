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

    padding: 64px;
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
    height: 70%;

    padding: 34px;
    border-radius: 32px;
`

const CalendarHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 20%;

    font-weight: bolder;
    font-size: 24px;

    opacity: 60%;

    margin: 16px 0;
`

const CalendarWeek = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    height:100%;
`

const DayWrap = styled.div`
    display: flex;
    flex-direction: row;
    
    height: 100%;
    
    justify-content: space-around;
    
`

const CalendarDayButton = styled.div`
    display: flex;
    
    width: 40px;
    height: 40px;
    border-radius: 4px;
    
    align-items: center;
    justify-content: center;

    background: #fff;
    
    color: #000;
    
    &:hover {
        background: #e6e6e6;
    }
`

const ConfirmButtonWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-around;
`

interface CalendarProps {
}

export type CalendarView = "CALENDAR"|"DIARY";

const Calendar: React.FC<CalendarProps> = () => {
    const thisDay = new Date();
    const year = thisDay.getFullYear();
    const month = thisDay.getMonth();
    const [day, setDay] = useState<number>(thisDay.getDate());

    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [currentView, setCurrentView] = useState<CalendarView>("CALENDAR");

    const handleDate = (selectedDay:number) => {
        setDay(selectedDay);
    }

    const days_sample = Array.from({length: 35}, (_, index) => (
        <CalendarDayButton className="calendar-day fill" key={`day-${index}`} onClick={()=>handleDate(index+1)}>
            <div>{index + 1}</div>
        </CalendarDayButton>
    ));

    const weeks = Array.from({length: Math.ceil(days_sample.length / 7)}, (_, index) => (
        <div key={`week-${index}`} className="calendar-week day">
            {days_sample.slice(index * 7, index * 7 + 7)}
        </div>
    ));

    const onClickApply = () => {
        setIsSelected(false);
        setCurrentView("DIARY");
    }

    return (
        <div style={{height:"100%"}}>
            <CalendarWrap>
                {
                    currentView == "CALENDAR" && <CalendarView>
                        <div style={{height: 64}}>
                            이전달~ {year}년 {month + 1}월 {day}일 다음달~
                        </div>
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
                            <ConfirmButton $bgColor={"#e6e6e6"}>cancel</ConfirmButton>
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
