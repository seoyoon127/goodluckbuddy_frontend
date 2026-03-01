import styled from "styled-components"
import Navbar from "../components/navbar/navbar"
import Title from "../components/text/Title"
import BirdSadSrc from "../assets/bird_sad.png"
import SubTitle from "../components/text/SubTitle"
import Button from "../components/button/SquareWhiteLongButton"
import usePatchWithdraw from "../apis/usePatchWithdraw"
import { useNavigate } from "react-router-dom"

const WithdrawPage = () => {
    const { mutate:withdraw } = usePatchWithdraw();
    const navigate = useNavigate();
    const handleWithdraw = () => {
        withdraw();
        navigate("/");
    }
    return (
        <>
            <Navbar title={"회원탈퇴"} none={true}/>
            <Wrapper>
                <Title text={"떠나신다니 아쉬워요"}/>
                <Image src={BirdSadSrc} alt="bird_sad"/>
                <SubTitle textGreen={`탈퇴 시 7일간 재가입이 불가능합니다.\n탈퇴를 해도 게시글은 삭제되지 않습니다.`}/>
                <Button text={"회원 탈퇴하기"} onClick={handleWithdraw}/>
            </Wrapper>
        </>
    )
}
export default WithdrawPage

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