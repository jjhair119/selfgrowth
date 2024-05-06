import styled from "styled-components"

interface HomeProps {
}

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
            <Ground></Ground>
        </div>
    )
}

export default Home
