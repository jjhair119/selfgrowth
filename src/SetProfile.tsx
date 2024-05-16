//@ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropMPro from './DropMPro';
import defaultProfileImg from 'src/basic.svg';
import buttonimg from 'src/button.svg';
import styled, {css} from "styled-components"

interface ProfileImgType {
  src: string;
  alt: string;
}

function SetProfile(): JSX.Element {
  const navigate = useNavigate();
  const [IsComplete, setIsComplete] = useState<boolean>(false);
  const [profileimg, setProfileImg] = useState<string>(defaultProfileImg);
  const [isOpen, setMenu] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const BackBtn = (): void => {
    navigate('/Nickname'); // 바로 이전 페이지로 이동
  };

  const toggleMenu = (): void => {
    setMenu(isOpen => !isOpen);
  };

  const handleProfileChange = (newProfileImg: string): void => {
    setProfileImg(newProfileImg);
    setIsComplete(isComplete => !isComplete); //프로필을 한 번 변경시 이동가능
  };
  
  const handleNextButtonClick = (): void => {
    if (IsComplete) {
      setModalIsOpen(true); // 추가
    }
  }

  const handleModalClose = (): void => {
    setModalIsOpen(false); // 추가
    navigate('/MainPage'); // 추가
  }

  return (
    <div style={styles.container}>
      <div style={styles.whitebox}>
        <div style={styles.buttonBox}>
          <h1 style={styles.pageTitle}>프로필 설정</h1>
          <button onClick={BackBtn} style={styles.previous2}>←</button>
          <div style={styles.setProfile}>
            <img src={profileimg} alt="default .img" style={styles.defaultProfileImg}></img>
            <img src={buttonimg} onClick={() => toggleMenu()} alt="button .img" style={styles.buttonimg}></img>
            {isOpen && <DropMPro onProfileChange={handleProfileChange} />}
          </div>
          <button style={styles.nextButton} onClick={handleNextButtonClick}>설정완료</button>
        </div>
      </div>
    </div>
  );
}

export default SetProfile;
