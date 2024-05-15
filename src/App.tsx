import { useState } from "react";

import Home from "./Home.tsx"; import Profile from "./Profile.tsx";
import Calendar from "./Calendar.tsx";

import WrapDiv from "./components/Wrap.tsx"; import MainButtons from "./components/MainButton.tsx";
import NavigationDiv from "./components/NavigationWrap.tsx";
import ToolTipDiv from "./components/ToolTip.tsx";
import MainContent from "./components/MainContentWrap.tsx";

export type View = "HOME" | "DIARY" | "PROFILE";``

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
