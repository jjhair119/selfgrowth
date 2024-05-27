import styled from "styled-components";
import React from "react";

const WriteDiary = styled.textarea`
  position: absolute;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: normal;
  display: flex;

  color: #000;
  padding: 16px 16px 16px 16px;
  width: 650px;
  height: 120px;
  border: none;
  background-color: transparent;

  flex-direction: column;
  flex-shrink: 0;

  &::-webkit-scrollbar {
    display: none;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #d9d9d9;
  }
`;

interface TextBoxProps {
  text: string;
  isEditing: boolean;
  handleTextChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextBox: React.FC<TextBoxProps> = ({
  text,
  isEditing,
  handleTextChange,
}) => {
  return (
    <WriteDiary
      value={text}
      onChange={handleTextChange}
      disabled={!isEditing}
      placeholder="작성해주세요"
    />
  );
};

export default TextBox;
