import styled, {css} from "styled-components";

export const ConfirmButtons = styled.button<{
  $bgColor?: string;
  $isSelected?: boolean;
}>`
  display: flex;
  flex-grow: 1;

  background: ${(props) => props.$bgColor};

  ${(props) => css`
    background: ${props.$bgColor};
  `}

  border-radius: 12px;
  border: none;

  width: 126px;
  height: min-content;
  padding: 12px;
  margin: 0 10%;

  color: black;
  font-weight: bold;
  font-size: 24px;

  justify-content: center;

  ${(props) =>
    props.$isSelected &&
    css`
      background: #e95c42;
      color: white;
    `}
`;

export default ConfirmButtons;