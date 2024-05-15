import styled from "styled-components";

const ToolTipDiv = styled.div`
  display: none;

  position: absolute;
  top: 120%;
  left: 50%;
  transform: translateX(-50%);

  width: max-content;
  height: min-content;

  padding: 2px 6px;
  border-radius: 4px;

  background: #ffd66c;
  color: black;
  font-weight: normal;
  font-size: 20px;

  z-index: 100;
`;

export default ToolTipDiv;
