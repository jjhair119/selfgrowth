import styled from "styled-components";
import React from "react";

const WriteDiary = styled.textarea`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: normal;
    display: flex;

    color: gray;
    padding: 16px;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;

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