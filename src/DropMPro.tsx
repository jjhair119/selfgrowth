import React, { useState } from 'react';
import profile1 from './assets/profile.svg';
import otherProfileImg from './assets/profile.svg';

// onProfileChange 함수의 타입을 정의합니다.
interface DropMProProps {
  onProfileChange: (newProfileImg: string) => void;
}

const DropMPro: React.FC<DropMProProps> = ({ onProfileChange }) => {
  const [imgitems, setImgItems] = useState<string[]>([profile1]);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDefaultProfileClick = () => {
    const randomIndex = Math.floor(Math.random() * imgitems.length);
    const newProfileImg = imgitems[randomIndex];
    onProfileChange(newProfileImg);
  };

  return (
    <div className="dropprofile" style={{ position: "relative", top: "-9px", left: "100px" }}>
      <div>
        <div
          style={{
            border: '1px solid #000',
            background: "white",
            marginTop: '-20px',
            marginLeft: "150px",
            marginBottom: "0px",
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <ul style={{ padding: 0, listStyleType: 'none' }}>
            <li
              style={{
                marginTop: '15px',
                color: '#000',
                fontFamily: 'Pretendard',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                cursor: 'pointer',
                paddingBottom: '2px',
                listStyleType: 'none',
              }}
              onClick={handleDefaultProfileClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              기본프로필
            </li>

            <li
              style={{
                marginTop: '20px',
                marginBottom:"20px",
                color: '#000',
                fontFamily: 'Pretendard',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                cursor: 'pointer',
                listStyleType: 'none',
              }}
              onClick={() => onProfileChange(otherProfileImg)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              사진보관함
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropMPro;