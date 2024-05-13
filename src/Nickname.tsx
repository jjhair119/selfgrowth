// 닉네임설정페이지
import { useState } from "react";
import {ConfirmButton} from "./App.tsx";
import styled, {css} from "styled-components"
import { useNavigate } from "react-router-dom";

// Container 스타일을 styled.div로 생성합니다.
const Container = styled.div`
  background: linear-gradient(118deg, #EB7125 0%, #CB4E00 100.36%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PreviousButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  position: absolute;
  top: 112px;
  left: 146px;
  right: 1242px;
  width: 59px;
  height: 57px;
  flex-direction: column;
  justify-content: center;
  color: rgba(158, 158, 158, 0.63);
  text-align: center;
  font-family: NanumSquare;
  font-size: 70px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

const PageTitle = styled.h1`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  margin-top: 20%;
`;

const NextButton = styled.button`
  position: absolute;
  border: none;
  margin-top: 1035px;
  width: 324px;
  height: 77px;
  border-radius: 40px;
  background: #EB7125;
  cursor: pointer;
  color: #FFF;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-family: Pretendard;
  font-weight: 500;
`;

const WhiteBox = styled.div`
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 86.25%;
  height: 81.54%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ButtonBox = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputBar = styled.input`
  position: absolute;
  margin-top: 700px;
  width: 934px;
  height: 90px;
  border-radius: 40px;
  border: 2px solid #000;
  color: rgba(0, 0, 0, 0.50);
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

function Nickname(): JSX.Element {
  const [nickname, setNickname] = useState<string>("");
  const [isValidNickname, setIsValidNickname] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newNickname: string = event.target.value;
    setNickname(newNickname);
    // 여기에서 닉네임 유효성 체크
    const isValid: boolean =
      newNickname.length <= 6 && /^[a-zA-Z0-9가-힣]*$/g.test(newNickname) && !/\s/g.test(newNickname);

    setIsValidNickname(isValid); // isValidNickname 상태 업데이트
  };

  const handleNextButtonClick = (): void => {
    if (isValidNickname) {
      // isValidNickname가 유효한 경우 다음 페이지로 이동
      navigate('/setProfile');
    }
  };

  const BackBtn = (): void => {
    navigate(-2); // 바로 이전 페이지로 이동
  };

  return (
    <Container> {/* 주황색 화면 */}
      <WhiteBox> {/* 흰 박스 */}
        <ButtonBox>
          <PageTitle>닉네임 설정</PageTitle>
          <PreviousButton onClick={BackBtn}>←</PreviousButton>
          <h5 style={{ position: "absolute", top: "275px", fontFamily: "Pretendard", fontSize: "20px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>6글자 이내, 띄어쓰기 x</h5>
          <InputBar placeholder='큐피에서 사용할 닉네임을 입력해주세요.'
            id="nickname" type="text" value={nickname} onChange={handleNicknameChange}></InputBar>
          <div className="help">
            {isValidNickname ? (
              <span className="success" style={{ position: "absolute", color: '#22C807', fontFamily: "Pretendard", fontSize: "30px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal", top: "57%", left: "23%" }}>사용할 수 있는 닉네임입니다.</span>
            ) : (
              <span className="fail" style={{ position: "absolute", color: '#F00', fontFamily: "Pretendard", fontSize: "30px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal", top: "57%", left: "23%" }}>사용할 수 없는 닉네임입니다.</span>
            )}
          </div>
          <NextButton onClick={handleNextButtonClick}>다음</NextButton>
        </ButtonBox>
      </WhiteBox>
    </Container>
  );
  
}

export default Nickname;
