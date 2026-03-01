import styled from "styled-components"
import Navbar from "../components/navbar/navbar"
import ProfileBlock from "../components/block/ProfileBlock"
import { useNavigate, useParams } from "react-router-dom"
import SubTitle from "../components/text/SubTitle"
import SquareGreenLongButton from "../components/button/SquareGreenLongButton"
import useGetUserProfile from "../apis/useGetUserProfile"
import genderInKorean from "../data/genderInKoreaan"
import categoryInKorean from "../data/categoryInKorean"
import LoadingPage from "./LoadingPage"
import useAuthStore from "../store/useAuthStore"
import { useEffect } from "react"

const UserProfilePage = () => {
    const myId = useAuthStore((state) => state.id);
    const accessToken = useAuthStore((state) => state.accessToken)
    const navigate = useNavigate();
    const {id} = useParams();
    const { data: profile } = useGetUserProfile(id);
    useEffect(() => {
        if (!profile) return;

        if (accessToken && profile.id == myId) {
            navigate("/my", { replace: true });
        }
    }, [profile, myId, accessToken]);
    if (!profile) return <LoadingPage/>
    return (
        <>
            <Navbar title={"프로필 보기"} mypage={false}/>
            <Wrapper>
                <ProfileBlock 
                    nickname={profile?.nickname} 
                    gender={genderInKorean(profile?.gender)} 
                    ageGroup={Math.floor((new Date().getFullYear() - profile?.birth?.split("-")[0]) / 10) * 10 + "대"} 
                    interest={categoryInKorean(profile?.category)} 
                    my={false}/>
                <ContentWrapper>
                    <TextWrapper><SubTitle textE={profile.nickname + "님의 활동"}/></TextWrapper>
                    <SquareGreenLongButton text={"작성한 편지 보기"} width="250px" onClick={()=>navigate(`/user/${id}/letter`, {state:{nickname:profile.nickname, id:id}})}/>
                    <SquareGreenLongButton text={"작성한 댓글 보기"} width="250px" onClick={()=>navigate(`/user/${id}/reply`, {state:{nickname:profile.nickname, id:id}})}/>
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