import styled from "styled-components"
import Navbar from "../components/navbar/navbar"
import ProfileBlock from "../components/block/ProfileBlock"
import { useNavigate, useParams } from "react-router-dom"
import SubTitle from "../components/text/SubTitle"
import SquareGreenLongButton from "../components/button/SquareGreenLongButton"

const UserProfilePage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    return (
        <>
            <Navbar title={"프로필 보기"} mypage={false}/>
            <Wrapper>
                <ProfileBlock nickname={"닉네임"} gender={"여성"} ageGroup={"20대"} interest={"가족"} my={false}/>
                <ContentWrapper>
                    <TextWrapper><SubTitle textE={"닉네임님의 활동"}/></TextWrapper>
                    <SquareGreenLongButton text={"작성한 편지 보기"} width="250px" onClick={()=>navigate(`/user/${id}/letter`)}/>
                    <SquareGreenLongButton text={"작성한 댓글 보기"} width="250px" onClick={()=>navigate(`/user/${id}/reply`)}/>
                </ContentWrapper>
            </Wrapper>
        </>
    )
}
export default UserProfilePage

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