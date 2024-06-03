import React from "react";
import styled, { keyframes } from "styled-components";

// 모달 등장 애니메이션 정의
const fadeIn = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: #4FBA4D;
  padding: 20px;
  border-radius: 5px;
  color:white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-out; // 애니메이션 적용
`;

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        {children}
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
