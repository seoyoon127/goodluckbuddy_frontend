import styled from "styled-components"
import Navbar from "../components/navbar/navbar"
import Title from "../components/text/Title"
import BirdSadSrc from "../assets/bird_sad.png"
import SubTitle from "../components/text/SubTitle"
import Button from "../components/button/SquareWhiteLongButton"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar none={true}/>
            <Wrapper>
                <Title text={"잘못된 요청입니다."}/>
                <Image src={BirdSadSrc} alt="bird_sad"/>
                <SubTitle textGreen={`해당 페이지를 찾을 수 없습니다.\n다른 방법을 시도해주세요.`}/>
                <Button text={"홈으로 이동하기"} onClick={()=>navigate("/home")}/>
            </Wrapper>
        </>
    )
}
export default NotFound

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    gap:70px;
`;

const Image = styled.img`
    width: 90%;
    heigth:200px;
`;