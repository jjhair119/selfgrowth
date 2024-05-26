import { useState, useEffect } from "react";
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

const imageMap: { [key: string]: string } = {
  d1: h1,
  d2: h2,
  d3: h3,
  d4: h4
};

const originalImages: SelectedImage = {
  d1: d1,
  d2: d2,
  d3: d3,
  d4: d4
};

interface SelectedImage {
  d1: string;
  d2: string;
  d3: string;
  d4: string;
}

function Character(): JSX.Element {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<SelectedImage>(originalImages);
  const [isImageSelected, setIsImageSelected] = useState<boolean>(false);

  const handleNextButtonClick = (): void => {
    navigate('/home');
  };

  const BackBtn = (): void => {
    navigate(-1); // 바로 이전 페이지로 이동
  };

  const handleImageClick = (imageId: keyof SelectedImage) => {
    const newImage = selectedImage[imageId] === originalImages[imageId] ? imageMap[imageId] : originalImages[imageId];
    const newImages = { ...selectedImage, [imageId]: newImage };
    setSelectedImage(newImages);
  };

  useEffect(() => {
    const isAnyImageSelected = Object.values(selectedImage).some(image => Object.values(imageMap).includes(image));
    setIsImageSelected(isAnyImageSelected);
  }, [selectedImage]);

  return (
    <Container>
      <WhiteBox>
        <ButtonBox>
          <PageTitle>캐릭터 설정</PageTitle>
          <PreviousButton onClick={BackBtn}>←</PreviousButton>
          <h5 style={{ margin:"30px", fontFamily: "Inter", fontSize: "20px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>
            나의 첫 캐릭터를 선택해주세요!
          </h5>

          <div style={{margin: "30px 0px 0px 0px"}}>
            <img src={selectedImage.d1} onClick={() => handleImageClick('d1')} style={{ cursor: 'pointer' }} alt="d1" />
            <img src={selectedImage.d2} onClick={() => handleImageClick('d2')} style={{ cursor: 'pointer' }} alt="d2" />
            <img src={selectedImage.d3} onClick={() => handleImageClick('d3')} style={{ cursor: 'pointer' }} alt="d3" />
            <img src={selectedImage.d4} onClick={() => handleImageClick('d4')} style={{ cursor: 'pointer' }} alt="d4" />
          </div>

          <NextButton disabled={!isImageSelected} isImageSelected={isImageSelected} onClick={handleNextButtonClick}>
            {isImageSelected ? "설정완료" : "캐릭터를 선택해주세요"}
          </NextButton>
        </ButtonBox>
      </WhiteBox>
    </Container>
  );
}

export default Character;

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
  margin-bottom : 0;
  text-align: center;
  font-family: Inter;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 13%;
`;

const NextButton = styled.button<{ isImageSelected: boolean }>`
  border: none;
  margin-top: 60px;
  background-color: ${({ isImageSelected }) => isImageSelected ? "#FFD66C" : "#F8EFD8"};
  color: ${({ isImageSelected }) => isImageSelected ? "black" : "gray"};
  width: ${({ isImageSelected }) => isImageSelected ? "300px" : "400px"};
  height: 77px;
  border-radius: 40px;
  cursor: poInter;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-family: Inter;
  font-weight: ${({ isImageSelected }) => isImageSelected ? "600" : "400"};
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
