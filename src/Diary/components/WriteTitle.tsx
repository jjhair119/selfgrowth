import styled from "styled-components";
import { useState } from "react";

const TitleStyle = styled.input`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  width: 98%;

  color: #000;
  text-align: center;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #d9d9d9;
    text-align: center;
  }
`;

const WriteTitle: React.FC = () => {
  // useState를 사용하여 입력값을 관리합니다. 초기값은 빈 문자열입니다.
  const [inputValue, setInputValue] = useState("");

  // 입력값이 변경될 때마다 호출되는 함수입니다.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <TitleStyle
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder="15글자 이내로 제목을 작성해주세요" // 사용자가 입력하기 전 디폴트로 보여질 텍스트입니다.
    />
  );
};

export default WriteTitle;
