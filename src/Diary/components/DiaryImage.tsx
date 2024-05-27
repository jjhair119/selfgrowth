// DiaryImage.tsx
import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  text-align: center;
  position: absolute;
  top: 15%;

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }

  margin-bottom: 20px; // 이미지와 텍스트 사이의 간격 조정
`;

const DiaryImage: React.FC = () => {
  return (
    <ImageWrapper>
      <img src="src\components\sample_puppy.png" alt="Diary" />
    </ImageWrapper>
  );
};

export default DiaryImage;
