//@ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropMPro from './DropMPro';
import Modal from 'react-modal';

// 이미지 임포트 시 타입 지정 필요
import defaultProfileImg from 'src/basic.svg';
import buttonimg from 'src/button.svg';

// 스타일 모듈 임포트 시 타입 정의 필요
import { styles } from "src/components/logindetail/style";

// 상태 및 함수 파라미터 타입 정의
interface ProfileImgType {
  src: string;
  alt: string;
}

function Profile(): JSX.Element {
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
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleModalClose}
            style={{
              overlay: {
                backgroundColor:"transparent",
              },
              content: {
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.75)',
                borderRadius:"20px",
                backgroundColor:"#EB7125",
                color:"white",
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: "center",
                fontFamily: "Pretendard",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                top: '50%',
                left: '50%',
                right: 'auto',
                transform: 'translate(-50%, -50%)',
                width:"276px",
                height:"362px",
                border:"none"
              },
            }}
          >
            <div>
              <h4 style={{marginTop:"30%", fontSize:"20px"}}>큐피에 오신 것을</h4>
              <span style={{fontFamily: "Pretendard", fontSize: "20px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal"}}>진심으로 환영합니다!</span>
              <button onClick={handleModalClose} style={styles.Qbutton}>질문보러 가기</button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Profile;
