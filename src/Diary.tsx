import styled from "styled-components"
import {CalendarView} from "./Calendar.tsx";
import {MainButton} from "./App.tsx";

interface DiaryProps {
    year:number;
    month:number;
    day:number;
    setCurrentView: (view: CalendarView) => void;
}

const Diary: React.FC<DiaryProps> = ({year, month, day, setCurrentView}) => {

    return (
        <div>
            <MainButton onClick={() => setCurrentView("CALENDAR")}>back</MainButton>
            Diary
            {year}/{month+1}/{day}
        </div>
    )
}

export default Diary
