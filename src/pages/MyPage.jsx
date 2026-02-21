import styled from "styled-components"
import Navbar from "../components/navbar/navbar"
import ProfileBlock from "../components/block/ProfileBlock"
import { useNavigate } from "react-router-dom"
import SubTitle from "../components/text/SubTitle"
import SquareGreenLongButton from "../components/button/SquareGreenLongButton"
import SquareWhiteLongButton from "../components/button/SquareWhiteLongButton"
import usePostLogout from "../apis/usePostLogout"

const MyPage = () => {
    const { mutate: postLogout } = usePostLogout();
    const navigate = useNavigate();
    const handleLogout = () => {
        postLogout();
    }
    return (
        <>
            <Navbar title={"마이페이지"} mypage={false}/>
            <Wrapper>
                <ProfileBlock nickname={"닉네임"} gender={"여성"} ageGroup={"20대"} interest={"가족"} my={true} onClick={()=>navigate("/my/profile")}/>
                <ContentWrapper>
                    <TextWrapper><SubTitle textE={"내 활동"}/></TextWrapper>
                    <SquareGreenLongButton text={"좋아요한 편지 보기"} width="250px" onClick={()=>navigate("/my/likes")}/>
                    <SquareGreenLongButton text={"내가 쓴 편지 보기"} width="250px" onClick={()=>navigate("/my/letter")}/>
                    <SquareGreenLongButton text={"내가 쓴 댓글 보기"} width="250px" onClick={()=>navigate("/my/reply")}/>
                </ContentWrapper>
                <ContentWrapper>
                    <TextWrapper><SubTitle textE={"계정"}/></TextWrapper>
                    <SquareWhiteLongButton text={"로그아웃"} width="250px" onClick={handleLogout}/>
                    <SquareWhiteLongButton text={"회원탈퇴"} width="250px" onClick={()=>navigate("/withdraw")}/>
                </ContentWrapper>
            </Wrapper>
        </>
    )
}
export default MyPage

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 20px;
    overflow-y: auto;
`;

const ContentWrapper = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    gap: 20px;
`;

const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start; 
    margin-top: 10px;
`;