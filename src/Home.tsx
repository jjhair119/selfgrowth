import styled from "styled-components"
import "./basicPet.svg"
interface HomeProps {
}

const Pet = styled.img`
    position: absolute;

    top: -40%;
    left: 50%;
    transform: translateX(-50%);
`

const Ground = styled.div`
    position: absolute;
    
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    
    width: 100%;
    height: 40%;
    border-radius: 60% 60% 0 0;
    background: #C5D887;
`

const Home: React.FC<HomeProps> = () => {

//basicPet이 기본 펫이고 happyPet이 행복해하는 pet
    return (
        <div>
            <Ground><Pet src="./basicPet.svg" alt="pet" width={400}/></Ground>
        </div>
    )
}

export default Home
