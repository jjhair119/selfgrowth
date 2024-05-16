import { useState } from "react";

import styled from "styled-components"

import Home from "./Home.tsx"; import Profile from "./Profile.tsx";
import Calendar from "./Calendar.tsx";
import "./App.css";

import WrapDiv from "./components/Wrap.tsx"; import MainButtons from "./components/MainButton.tsx";
import NavigationDiv from "./components/NavigationWrap.tsx";
import ToolTipDiv from "./components/ToolTip.tsx";
import MainContent from "./components/MainContentWrap.tsx";

export type View = "HOME" | "DIARY" | "PROFILE";``
//navigation 높이
export const NAV_HEIGHT = 160;

const Wrap = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;

    min-width: 870px;
    
    align-items: center;
    justify-content: center;
    
    flex-direction: column;
`

const NavigationWrap = styled.div<{ $bgColor?: string }>`
    display: flex;
    align-content: space-around;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: ${NAV_HEIGHT}px;
    box-sizing: border-box;
`

const MainContentWrap = styled.div`
    width: 100%;
    height: calc(100vh - ${NAV_HEIGHT}px);
    vertical-align: center;
`

const ToolTip = styled.div`
    display: none;
    
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translateX(-50%);
    
    width: max-content;
    height: min-content;
    
    padding: 2px 6px;
    border-radius: 4px;
    
    background: #FFD66C;
    color: black;
    font-weight: normal;
    font-size: 20px;
    
    z-index: 100;
`

export const MainButton = styled.button<{$currentButton?:View}>`
    display: flex;
    position: relative;
    
    align-items: center;
    vertical-align: center;
    
    color:white;
    font-weight: bold;
    font-size: 28px;

    background: #C5D887;
    &:hover {
        background: #FFD66C;
        transition: 0.5s;
        box-shadow: inset 0 0 10px #999;
    }
    
    &:hover > ${ToolTip} {
        display: block;
    }

    padding: 8px 16px;
    margin: 0 104px;
    width: 152px;
    height: 52px;
    border-radius: 50px;
    border: none;
    
    min-width: 132px;

    box-shadow: 1px 2px 4px 1px #999;

    justify-content: center;
`

export const ConfirmButton = styled.button<{ $bgColor?: string, $isSelected?: number}>`
    display: flex;
    flex-grow: 1;
    
    background: ${props => props.$bgColor};
    
    ${props => css`
        background: ${props.$bgColor};
    `}
    
    border-radius: 12px;
    border: none;
    
    width: fit-content;
    height: min-content;
    padding: 10px 32px;
    margin: 28px 14px 0 20px;
    
    color: black;
    font-weight: bold;
    font-size: 24px;
    
    justify-content: center;

    ${(props) => props.$isSelected && css`
        background: #E95C42;
        color: white;
    `}
`

function App() {
  const [currentView, setCurrentView] = useState<View>("HOME");

  return (
    <WrapDiv>
      <NavigationDiv>
        <MainButtons
          $currentButton="HOME"
          onClick={() => setCurrentView("HOME")}
        >
          <div>home</div>
          <ToolTipDiv>🐾 홈화면으로 이동</ToolTipDiv>
        </MainButtons>
        <MainButtons
          $currentButton="DIARY"
          onClick={() => setCurrentView("DIARY")}
        >
          <div>diary</div>
          <ToolTipDiv>🐾 일기 작성하러 가기</ToolTipDiv>
        </MainButtons>`
        <MainButtons
          $currentButton="PROFILE"
          onClick={() => setCurrentView("PROFILE")}
        >
          <div>profile</div>
          <ToolTipDiv>🐾 마이 페이지 이동</ToolTipDiv>
        </MainButtons>
      </NavigationDiv>
      <MainContent>
        {currentView === "HOME" && <Home></Home>}
        {currentView === "DIARY" && <Calendar></Calendar>}
        {currentView === "PROFILE" && <Profile></Profile>}
      </MainContent>
    </WrapDiv>
  );
}

export default App;
