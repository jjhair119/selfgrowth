import styled, {css} from "styled-components"
import Home from "./Home.tsx";
import Profile from "./Profile.tsx";
import CalendarScreen from "./CalendarScreen.tsx";
import "./App.css";
import {Link, Route, Routes} from "react-router-dom";
import Login from "./Login.tsx";
export type View = "HOME" | "DIARY" | "PROFILE";

//navigation 높이
export const NAV_HEIGHT = 160;

const Wrap = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;

    min-width: 870px;
    min-height: 870px;

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
    font-size: 15px;

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
    cursor: pointer;
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
    cursor: pointer;
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

const Logo = styled.div`
    position: absolute;
    left:2%
`
const ProfileSection = styled.div`
    position: absolute;
    right: 2%;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 70px; // 프로필 이미지의 너비 설정
        height: 70px; // 프로필 이미지의 높이 설정
    }
`

const LogoutLink = styled.div`
  margin-top: 10px;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline; // 호버 시 밑줄 추가
  }
`;

function App() {
    return (
        <Wrap>
            <NavigationWrap>
                <Logo>
                    <Link to="/home">
                        <img src="..\src\assets\hlogo.svg" alt="logo"/>
                    </Link>
                </Logo>
                <Link to="/home">
                    <MainButton $currentButton="HOME">
                        <div>home</div>
                        <ToolTip>🐾 홈화면으로 이동</ToolTip>
                    </MainButton>
                </Link>
                <Link to="/calendar">
                    <MainButton $currentButton="DIARY">
                        <div>diary</div>
                        <ToolTip>🐾 일기 작성하러 가기</ToolTip>
                    </MainButton>
                </Link>
                <Link to="/profile">
                    <MainButton $currentButton="PROFILE">
                        <div>profile</div>
                        <ToolTip>🐾 마이 페이지 이동</ToolTip>
                    </MainButton>
                </Link>
                <ProfileSection>
                    <Link to="/profile">
                        <img src="..\src\assets\profile.svg" alt="profile"/>
                    </Link>
                    <LogoutLink>
                        <Link to="/register" style={{ marginTop: '10px', color: 'black', textDecoration: 'none' }}>로그아웃</Link>
                    </LogoutLink>
                </ProfileSection>
            </NavigationWrap>
            <MainContentWrap>
                <Routes>
                    <Route path='/home' element={<Home></Home>} />
                    <Route path='/calendar/*' element={<CalendarScreen></CalendarScreen>} />
                    <Route path='/profile' element={<Profile></Profile>} />
                    <Route path='/register' element={<Login></Login>} />
                </Routes>
            </MainContentWrap>
        </Wrap>
    )
}

export default App