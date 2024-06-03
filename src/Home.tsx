//@ts-nocheck
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Ground = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 40%;
    border-radius: 60% 60% 0 0;
    background: #C5D887;
`;

const Pet = styled.img`
    position: absolute;
    top: -40%;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer; // 커서를 포인터로 변경하여 클릭할 수 있음을 나타냄
`;

const popAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

const Heart = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    background: url('./heart.svg') no-repeat center/contain;
    animation: ${popAnimation} 1s ease-out forwards;
`;

const Home: React.FC = () => {
    const [hearts, setHearts] = useState([]);
    const [petImage, setPetImage] = useState('./happyPet.svg');
    const [isBasicPet, setIsBasicPet] = useState(false);

    const handleClick = (e) => {
        if (!isBasicPet) {
            setPetImage('./basicPet.svg');
            setIsBasicPet(true);
        } else {
            const numHearts = 10; // 생성할 하트의 개수
            const newHearts = Array.from({ length: numHearts }, () => ({
                left: Math.random() * window.innerWidth,
                top: Math.random() * window.innerHeight,
                key: Math.random(), // React 리스트에서 key를 위해 랜덤 값을 사용
            }));
            setHearts([...hearts, ...newHearts]);
        }
    };

    return (
        <div>
            <Ground onClick={handleClick}>
                <Pet src={petImage} alt="pet" width={400} />
                {hearts.map((heart) => (
                    <Heart
                        key={heart.key}
                        style={{ left: heart.left, top: heart.top }}
                    />
                ))}
            </Ground>
        </div>
    );
};

export default Home;
