// //@ts-nocheck
// //로그인페이지1
import  React, { ButtonHTMLAttributes } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import logo from "src/logo.svg";
import nlogo from "src/naver.svg";
import klogo from "src/kakao.svg";
import glogo from "src/google.svg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: string;
    textColor: string; 
  }
  
// 스타일드 컴포넌트 정의
const Container = styled.div`
  background: linear-gradient(118deg, #EB7125 0%, #CB4E00 100.36%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Whitebox = styled.div`
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 86.25%;
  height: 81.54%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PreviousButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  position: absolute;
  top: 112px;
  right: 131px;
  width: 59px;
  height: 57px;
  flex-direction: column;
  justify-content: center;
  color: rgba(158, 158, 158, 0.63);
  text-align: center;
  font-family: "NanumSquare";
  font-size: 70px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

const Logo = styled.div`
  padding: 5%;
  margin: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// const Button = styled.button`
//   border-radius: 40px;
//   border: none;
//   margin: 20px;
//   width: 552px;
//   height: 90px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: ${props => props.color || "#EEE"}; // 기본 색상 설정

//   & > img {
//     margin-right: 28%;
//   }

//   & > span {
//     margin-left: -24%;
//     color: ${props => props.textColor || "#424242"};
//     text-align: center;
//     font-family: "Pretendard";
//     font-size: 28px;
//     font-style: normal;
//     font-weight: 600;
//     line-height: normal;
//   }
// `;

// // Button 컴포넌트에 적용할 각각의 색상
// const Button1 = styled(Button)`
//   background: #00C73C;
// `;

// const Button2 = styled(Button)`
//   background: #FFD740;
// `;

// const Button3 = styled(Button)`
//   background: #EEE;
// `;

// const ButtonBox = styled.div`
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// // 로그인 컴포넌트
// const Login: React.FC = () => {
//   const navigate = useNavigate();

//   const BackBtn: React.MouseEventHandler<HTMLButtonElement> = () => {
//     navigate('/mainpage'); // 바로 이전 페이지로 이동
//   };

//   return (
//     <Container>
//       <Whitebox>
//         <Logo>
//           <img src={logo} style={{ width: "100px" }} alt="logo" />
//         </Logo>

//         <PreviousButton onClick={BackBtn}>X</PreviousButton>

//         <ButtonBox>
//           <Button1 color="#00C73C" textColor="#FFF">
//             <img src={nlogo} alt="Naver logo" />
//             <span>네이버로 간편 가입하기</span>
//           </Button1>
//           <Button2 color="#FFD740" textColor="#424242">
//             <img src={klogo} alt="Kakao logo" />
//             <span>카카오로 간편 가입하기</span>
//           </Button2>
//           <Button3 color="#EEE" textColor="#424242">
//             <img src={glogo} alt="Google logo" />
//             <span>구글로 가입하기</span>
//           </Button3>
//         </ButtonBox>
//       </Whitebox>
//     </Container>
//   );
// }

// export default Login;
