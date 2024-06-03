import styled, {css} from "styled-components";

export const ConfirmButtons = styled.button<{
  $bgColor: string;
  $isSelected?: number;
}>`
  display: flex;
  flex-grow: 1;

  background-color: ${(props) => props.$bgColor};
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  color: #000;
  cursor: pointer;

  ${({ $isSelected }) => !$isSelected && css`
      pointer-events: none;
      opacity: 0.6;
  `}

  &:hover {
      background-color: #ccc;
  }

  width: 126px;
  height: min-content;
  margin: 0 10%;
  font-weight: bold;
  justify-content: center;

  ${(props) =>
    props.$isSelected &&
    css`
      background-color: #e95c42;
      color: white;
    `}
`;

export default ConfirmButtons;
