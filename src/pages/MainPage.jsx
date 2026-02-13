import styled from "styled-components"
import LogoNavbar from "../components/navbar/LogoNavbar"
import Title from "../components/text/Title"
import SubTitle from "../components/text/SubTitle"
import BirdLetterSrc from "../assets/bird_letter.png"
import Button from "../components/button/SquareGreenLongButton"
import { useNavigate } from "react-router-dom"

const MainPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <LogoNavbar mypage={false}/>
            <Wrapper>
                <Title text={"대인관계 고민을 위한 행운의 편지"}/>
                <SubTitle textGreen={"조언이 필요하다면? 굿럭버디에서 만나봐!"}/>
                <Image src={BirdLetterSrc} alt="bird_letter"/>
                <SubTitle
                    textS={`굿럭버디에 편지를 쓰고,\n`}
                    textGreen={`비슷한 고민을 마주한 누군가`}
                    textE={`에게\n 행운을 전해보세요.`}
                />
                <ButtonWrapper>
                    <Button text={"편지 보러 가기"} onClick={()=>navigate("/home")}/>   
                    <Button text={"편지 쓰러 가기"} onClick={()=>navigate("/login",{state: { from: "main" }})}/>   
                </ButtonWrapper>
            </Wrapper>
        </>
    )
}
export default MainPage

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
`;

const Image = styled.img`
    width: 240px;
    heigth:190px;
    margin-top: 30px;
    margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
    gap:30px;
`;