import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import h1 from "./h1.svg";
import h2 from "./h2.svg";
import h3 from "./h3.svg";
import h4 from "./h4.svg";
import d1 from "./d1.svg";
import d2 from "./d2.svg";
import d3 from "./d3.svg";
import d4 from "./d4.svg";

// Container 스타일을 styled.div로 생성
const Container = styled.div`
  background: #FFD66C;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PreviousButton = styled.button`
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
  font-family: Inter;
  font-size: 70px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

const PageTitle = styled.h1`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  margin-top: 20%;
`;

const NextButton = styled.button`
  position: absolute;
  border: none;
  margin-top: 1035px;
  width: 324px;
  height: 77px;
  border-radius: 40px;
  background: #FFD66C;
  cursor: pointer;
  color: #000000;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-family: Inter;
  font-weight: 500;
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

function Character(): JSX.Element {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState({d1, d2, d3, d4});

  const handleNextButtonClick = (): void => {
      navigate('/main');
  };

  const BackBtn = (): void => {
    navigate(-1); // 바로 이전 페이지로 이동
  };

  const handleImageClick = (imageId: string) => {
    const newImages = {...selectedImage, [imageId]: eval(imageId.replace('d', 'h'))}; // eval 사용은 보안 문제로 권장되지 않으나 예시를 위해 사용
    setSelectedImage(newImages);
  }

  return (
    <Container>
      <WhiteBox> 
        <ButtonBox>
          <PageTitle>캐릭터 설정</PageTitle>
          <PreviousButton onClick={BackBtn}>←</PreviousButton>
          <h5 style={{ position: "absolute", top: "275px", fontFamily: "Inter", fontSize: "20px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>초기 캐릭터를 선택해주세요 !</h5>

          <div>
            <img src={selectedImage.d1} onClick={() => handleImageClick('d1')} style={{cursor: 'pointer'}}></img>
            <img src={selectedImage.d2} onClick={() => handleImageClick('d2')} style={{cursor: 'pointer'}}></img>
            <img src={selectedImage.d3} onClick={() => handleImageClick('d3')} style={{cursor: 'pointer'}}></img>
            <img src={selectedImage.d4} onClick={() => handleImageClick('d4')} style={{cursor: 'pointer'}}></img>
          </div>
          <NextButton onClick={handleNextButtonClick}>설정완료</NextButton>
        </ButtonBox>
      </WhiteBox>
    </Container>
  );
}

export default Character;
