import styled from "styled-components"
import "./components/nobackground.png"

interface HomeProps {
}

const Pet = styled.img`
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%);
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


    return (
        <div>
            <Ground><Pet src="./components/nobackground.png" alt="pet"/></Ground>
        </div>
    )
}

export default Home
