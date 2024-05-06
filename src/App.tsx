import {useState} from 'react'
import styled, {css} from "styled-components"
import Home from "./Home.tsx";
import Profile from "./Profile.tsx";
import Diary from "./Diary.tsx";

export type View = "HOME" | "DIARY" | "PROFILE";

const Wrap = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    
    flex-direction: column;
`

const NavigationWrap = styled.div<{ $bgColor?: string }>`
    display: flex;
    align-content: space-around;
    justify-content: center;
    padding: 64px 0;
    
    width: 100%;
`

const MainContentWrap = styled.div`
    width: 100%;
    height: 80%;
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
    margin: 0 64px;
    width: 152px;
    height: 52px;
    border-radius: 50px;
    border: none;

    box-shadow: 1px 2px 4px 1px #999;

    justify-content: center;
`

export const ConfirmButton = styled.button<{ $bgColor?: string, $isSelected?: boolean}>`
    display: flex;
    flex-grow: 1;
    
    background: ${props => props.$bgColor};
    
    ${props => css`
        background: ${props.$bgColor};
    `}
    
    border-radius: 12px;
    border: none;
    
    width: 126px;
    height: min-content;
    padding: 12px;
    margin: 0 10%;
    
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
        <Wrap>
            <NavigationWrap>
                <MainButton $currentButton="HOME" onClick={() => setCurrentView("HOME")}>
                    <div>home</div>
                    <ToolTip>🐾 홈화면으로 이동</ToolTip>
                </MainButton>
                <MainButton $currentButton="DIARY" onClick={() => setCurrentView("DIARY")}>
                    <div>diary</div>
                    <ToolTip>🐾 일기 작성하러 가기</ToolTip>
                </MainButton>
                <MainButton $currentButton="PROFILE" onClick={() => setCurrentView("PROFILE")}>
                    <div>profile</div>
                    <ToolTip>🐾 마이 페이지 이동</ToolTip>
                </MainButton>
            </NavigationWrap>
            <MainContentWrap>
                {
                    currentView === "HOME" && <Home></Home>
                }
                {
                    currentView === "DIARY" && <Diary></Diary>
                }
                {
                    currentView === "PROFILE" && <Profile></Profile>
                }
            </MainContentWrap>
        </Wrap>
    )
}

export default App
