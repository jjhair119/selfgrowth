// @ts-nocheck
import React, { useState, useEffect } from 'react';

const Myprofile = () => {
  //프로필 수정버튼
  const [isModifyVisible, setModifyVisible] = useState(true);
  const [isProeditVisible, setProeditVisible] = useState(false);
  const [isEditnoVisible, setEditnoVisible] = useState(false);

  const handleModifyClick = () => {
    setModifyVisible(false);
    setProeditVisible(true);
    setEditnoVisible(true);
  };

  const handleEditnoClick = () => {
    setModifyVisible(true);
    setProeditVisible(false);
    setEditnoVisible(false);
  };

  // 닉네임관련
  const [holder, holdervisible] = useState(false);
  const handleholder = () => {
    holdervisible(true);
  };
  const handleRefresh = () => {
    window.location.reload();
  };
  const [isValidNickname, setIsValidNickname] = useState(false);
  const handleNicknameChange = (event) => {
    const newNickname = event.target.value;
    setNickname(newNickname);
    //여기에서 닉네임 유효성 체크
    const isValid =
      newNickname.length <= 6 &&
      newNickname.length > 0 &&
      /^[a-zA-Z0-9가-힣]*$/g.test(newNickname) &&
      !/\s/g.test(newNickname);

    setIsValidNickname(isValid);
  };
  //닉네임 수정관련

  // 수정 버튼 클릭 시 닉네임 업데이트 함수 호출
  const handleNicknameUpdate = () => {
    // 유효한 닉네임인지 확인
    if (isValidNickname) {
      // 업데이트 함수 호출
      updateNickname();
      // 수정 상태 초기화

      setModifyVisible(true);
      setProeditVisible(false);
      setEditnoVisible(false);
      holdervisible(false);
    } else {
      // 유효하지 않은 닉네임인 경우 에러 처리 또는 사용자에게 알림
      console.error('Invalid nickname!');
      // 사용자에게 알림 등의 처리를 수행할 수 있음
    }
  };

  // 프로필사진 선택관련
  const [profileImage, setphoto] = useState(null);
  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen);
  };
  const [profileimg, setProfileImg] = useState(logo);
  const handleProfileChange = (newProfileImg) => {
    setProfileImg(newProfileImg);
  };

  return (
    <>
      {/* <Header /> */}
      <div className="mainlogo" style={{ marginTop: '4vh' }}></div>
      <div className="wrapper">
        <div className="modalwrap">
          <div className="fixed">
            <div className="box1"></div>
            <div className="box2"></div>
          </div>
          {/* 1번 박스 잔액이랑 답변확인*/}
          <div className="wrap1">
            <div className="first">
              <div className="photo">
                <img
                  className="photo1"
                  style={{ width: '100px', position: 'absolute', height: '100px' }}
                  src={userInfo.profileImage}
                  alt="프사"
                />
                <div className="imagechange">
                  <img
                    className="photo2"
                    style={{
                      width: '30px',
                      position: 'absolute',
                      zIndex: '1',
                      margin: '70px',
                      display: isModifyVisible ? 'none' : 'block',
                    }}
                    onClick={() => {
                      handleModifyClick();
                      toggleMenu();
                    }}
                    src={gear}
                    alt="톱니"
                  />

                  {isOpen && <DropMPro onProfileChange={handleProfileChange} />}
                </div>
                {userInfo.role === 'EXPERT' && (
                  <img
                    className="photo2"
                    style={{
                      width: '30px',
                      position: 'absolute',
                      zIndex: '1',
                      margin: '3px',
                    }}
                    src={badge}
                    alt="뱃지"
                  />
                )}

              </div>
              <div className="data">
                <p
                  style={{
                    fontSize: 'small',
                    color: isModifyVisible
                      ? 'transparent'
                      : isValidNickname
                        ? 'white'
                        : 'red',
                  }}
                  onClick={handleModifyClick}
                >
                  {isValidNickname
                    ? '사용할 수 있는 닉네임입니다'
                    : '사용할 수 없는 닉네임입니다'}
                </p>
                <p
                  style={{
                    display: isModifyVisible ? 'block' : 'none',
                    fontSize: '32px',
                    fontWeight: '900',
                    marginTop: '0px'
                  }}
                >
                  {userInfo.nickname}
                </p>
                <input
                  placeholder={holdervisible ? userInfo.nickname : ''}
                  id="nickname"
                  type="text"
                  value={nickname}
                  onChange={handleNicknameChange}
                  style={{
                    marginBottom: '1vw',
                    display: isModifyVisible ? 'none' : 'block',
                    height: '5vh',
                    width: '10vw ',
                    fontSize: 'large',
                    fontWeight: 'bold',
                    backgroundColor: 'transparent',
                    border: '1px solid white',
                  }}
                />

                <p className="date">{registerD}</p>
                <div className="innerwrap">
                  <img style={{ width: '45px' }} src={coin} alt="프사" />
                  <p className="balance">{balance}</p>
                  <p style={{ fontWeight: '900' }}>&nbsp;{userInfo.point}POINT&nbsp;&nbsp;|&nbsp;</p>

                  <div className="prof_respond">
                    {userInfo.point}개의 답변을 볼 수 있어요!
                  </div>
                </div>
              </div>

              <div className="modifyunit">
                <button
                  className="modify"
                  style={{ display: isModifyVisible ? 'block' : 'none' }}
                  onClick={handleModifyClick}
                >
                  <span>프로필 수정</span>
                </button>
                <button
                  className="proedit"
                  style={{ display: isProeditVisible ? 'block' : 'none' }}
                  onClick={() => {
                    handleNicknameUpdate();
                    handleRefresh();
                  }}
                >
                  확인
                </button>
                <button
                  className="editno"
                  style={{ display: isEditnoVisible ? 'block' : 'none' }}
                  onClick={handleEditnoClick}
                >
                  취소
                </button>
              </div>
            </div>
            <div
              className="expert"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <p className="exp1" style={{ marginRight: '5px' }}>
                전문가이신가요?
              </p><div style={{ display: 'flex' }}>
                <button
                  style={{
                    textDecoration: 'underline',
                    color: '#eb7125',
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '17px',
                  }}
                  onClick={openCModal}
                >
                  전문가 인증하기
                </button>
                {isCModalOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* 모달 */}
                    <div className="modal">
                      <div className="modal-content">
                        <Certify closeCModal={closeCModal} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* 2번 박스*/}
            <div className="wrap2">
              <div className="second">
                <div
                  className="box2_1"
                  style={{
                    backgroundColor: isboxclicked ? '#eb7125' : 'white',
                    color: isboxclicked ? 'white' : 'black',
                  }}
                  onClick={() => {
                    clicked('1000');
                    boxclicked();
                  }}
                >
                  <div className="boxwrap">
                    <img
                      style={{ width: '55px', marginTop: '20px' }}
                      src={coin}
                      alt="동전"
                    />
                    <h3 style={{ marginRight: '17px', marginTop: '20px' }}>
                      1천원 충전하기
                    </h3>
                  </div>
                  <p style={{ fontSize: '13px', textAlign: 'center' }}>
                    1000P가 충전돼요
                    <br />
                    100개의 답변을 확인할 수 있어요
                  </p>
                </div>

                <div
                  className="box2_2"
                  style={{
                    backgroundColor: isbox2clicked ? '#eb7125' : 'white',
                    color: isbox2clicked ? 'white' : 'black',
                  }}
                  onClick={() => {
                    clicked('10000');
                    box2clicked();
                  }}
                >
                  <div className="boxwrap">
                    <img
                      style={{ width: '55px', marginTop: '20px' }}
                      src={coin}
                      alt="동전"
                    />
                    <h3 style={{ marginRight: '17px', marginTop: '20px' }}>
                      1만원 충전하기
                    </h3>
                  </div>
                  <p style={{ fontSize: '13px', textAlign: 'center' }}>
                    10000P가 충전돼요
                    <br />
                    1000개의 답변을 확인할 수 있어요
                  </p>
                </div>
              </div>
            </div>
            {/* 3번 박스 질문,답변 컴포넌트 만들어서 불러올 수 있게 */}
            <div style={{ width: '60vw', marginTop: '3%' }}>
              <div style={{ width: '60vw', display: 'flex', justifyContent: "space-between" }}>
                <div style={{ flex: '1', textAlign: 'center' }}>
                  <button onClick={handleMyQ} style={{ width: '90%', border: '2px solid #D9D9D9', background: 'white', height: '8vh', borderRadius: '20px' }}>내가 한 질문</button>
                </div>
                <div style={{ flex: '1', textAlign: 'center' }}>
                  <button onClick={handleBuyA} style={{ width: '90%', marginLeft: '5%', float: 'center', border: '2px solid #D9D9D9', background: 'white', height: '8vh', borderRadius: '20px' }}>내가 구매한 답변</button>
                </div>
                <div style={{ flex: '1' }}>
                  <button onClick={handleAlarmQ} style={{ width: '90%', float: 'right', border: '2px solid #D9D9D9', background: 'white', height: '8vh', borderRadius: '20px' }}>알림신청한 질문</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Myprofile;