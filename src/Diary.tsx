import styled, {css} from "styled-components"
import {useState} from "react";
import {ConfirmButton} from "./App.tsx";

const DiaryWrap = styled.div`
    display: flex;
    vertical-align: center;
    justify-content: center;
    align-items: center;

    background: #FFD66C;

    padding: 64px;
`

const DiaryView = styled.div`
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

const DiaryHeader = styled.div`
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

const DiaryWeek = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 620px;
`

const DayWrap = styled.div`
    display: flex;
    flex-direction: row;
    
    height: 100%;
    
    justify-content: space-around;
    
`

const DiaryDayButton = styled.div`
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

interface DiaryProps {
}

const Diary: React.FC<DiaryProps> = () => {
    const thisDay = new Date();
    const year = thisDay.getFullYear();
    const month = thisDay.getMonth();
    const day = thisDay.getDate();

    const [isSelected, setIsSelected] = useState<boolean>(false);

    const days_sample = <DayWrap>
        <DiaryDayButton>1</DiaryDayButton>
        <DiaryDayButton>2</DiaryDayButton>
        <DiaryDayButton>3</DiaryDayButton>
        <DiaryDayButton>4</DiaryDayButton>
        <DiaryDayButton>5</DiaryDayButton>
        <DiaryDayButton>6</DiaryDayButton>
        <DiaryDayButton>7</DiaryDayButton>
    </DayWrap>

    return (
        <DiaryWrap>
            <DiaryView>
                <div style={{height: 64}}>
                    이전달~ {year}년 {month + 1}월 {day}일 다음달~
                </div>
                <DiaryHeader>
                    <a>Sun</a>
                    <a>Mon</a>
                    <a>Tue</a>
                    <a>Wed</a>
                    <a>Thu</a>
                    <a>Fri</a>
                    <a>Sat</a>
                </DiaryHeader>
                <DiaryWeek>
                    {days_sample}
                    {days_sample}
                    {days_sample}
                    {days_sample}
                    {days_sample}
                </DiaryWeek>
                <ConfirmButtonWrap>
                    <ConfirmButton $bgColor={"#e6e6e6"}>cancel</ConfirmButton>
                    <ConfirmButton $bgColor={"#e6e6e6"} $isSelected={isSelected} onFocus={()=>setIsSelected(true)} onBlur={()=>setIsSelected(false)}>apply</ConfirmButton>
                </ConfirmButtonWrap>
            </DiaryView>
        </DiaryWrap>
    )
}

export default Diary
