import styled from "styled-components";
import React from "react";

const SaveButtonStyle = styled.button`
    bottom: 50px;
    width: 150px;
    height: 36px;
    margin-top: 20px;
    margin-right: 20px;
    flex-shrink: 0;

    border-radius: 8px;
    background: rgba(0, 0, 0, 0.1);

    color: #000;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    border: none;

    &:hover {
        background: #e95c42;
        transition: 0.3s;
        box-shadow: inset 0 0 10px;
        color: #fff;
    }
`

interface EditButtonsProps {
  isEditing: boolean;
  handleSave: () => void;
  handleEdit: () => void;
}

const SaveButton: React.FC<EditButtonsProps> = ({
  isEditing,
  handleSave,
  handleEdit,
}) => {
  return (
    <div>
      <SaveButtonStyle onClick={handleEdit} disabled={isEditing}>
        수정
      </SaveButtonStyle>
      <SaveButtonStyle onClick={handleSave}>저장</SaveButtonStyle>
    </div>
  );
};

export default SaveButton;
