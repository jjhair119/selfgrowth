//@ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import defaultProfileImg from './assets/basic.svg';
import buttonimg from './assets/button.svg';
import styled, {css} from "styled-components"
import DropMPro from "./DropMPro";

interface ProfileImgType {
  src: string;
  alt: string;
}

const Container = styled.div`
  background: #FFD66C;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageTitle = styled.h1`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  margin-top: 20%;
`;

const NextButton = styled.button`
  position: absolute;
  border: none;
  margin-top: 1150px;
  width: 300px;
  height: 77px;
  border-radius: 40px;
  background: #FFD66C;
  cursor: poInter;
  color: #000000;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-family: Inter;
  font-weight: 600;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const WhiteBox = styled.div`
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 86.25%;
  height: 81.54%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ButtonBox = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Previous2 = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  position: absolute;
  top: 112px;
  left: 146px;
  right: 1242px;
  width: 59px;
  height: 57px;
  flex-direction: column;
  justify-content: center;
  color: rgba(158, 158, 158, 0.63);
  text-align: center;
  font-family: NanumSquare;
  font-size: 70px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

const ButtonImg = styled.img`
  cursor: pointer;
  position: relative;
  margin-left: 50%;
  margin-top: -90%;
  height: 120px;
`;

const SetProfileContainer = styled.div`
  position: absolute;
  margin-top: 640px;
`;

const DefaultProfileImg = styled.img`
  height: 230px;
  margin-top:80px;
`;

function SetProfile(): JSX.Element {
  const navigate = useNavigate();
  const [IsComplete, setIsComplete] = useState<boolean>(false);
  const [profileimg, setProfileImg] = useState<string>(defaultProfileImg);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const BackBtn = (): void => {
    navigate('/nickname'); // 바로 이전 페이지로 이동
  };

  const handleProfileChange = (newProfileImg: string): void => {
    setProfileImg(newProfileImg);
    setIsComplete(isComplete => !isComplete); // 프로필을 한 번 변경시 이동가능
  };
  const toggleMenu = () => {
    setIsOpen(isOpen => !isOpen);
  };
  const handleNextButtonClick = (): void => {
    navigate('/setCharacter'); //라우팅 확인용 임시 코드
    if (IsComplete) {
      navigate('/setCharacter');
    }
  }

  return (
    <Container>
      <WhiteBox>
        <ButtonBox>
          <PageTitle>프로필 설정</PageTitle>
          <Previous2 onClick={BackBtn}>←</Previous2>
          <SetProfileContainer>
            <DefaultProfileImg src={profileimg} alt="default.img"></DefaultProfileImg>
            <ButtonImg src={buttonimg} onClick={() => toggleMenu()} alt="button.img"></ButtonImg>
            {isOpen && <DropMPro onProfileChange={handleProfileChange} />}
          </SetProfileContainer>
          <NextButton onClick={handleNextButtonClick}>설정완료</NextButton>
        </ButtonBox>
      </WhiteBox>
    </Container>
  );
}

export default SetProfile;