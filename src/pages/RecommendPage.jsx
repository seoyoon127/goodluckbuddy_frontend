import styled from "styled-components"
import Navbar from "../components/navbar/navbar"
import Title from "../components/text/Title"
import BirdFlySrc from "../assets/bird_fly1.png"
import SubTitle from "../components/text/SubTitle"
import PreviewBlock from "../components/block/PreviewBlock"
import useGetProfile from "../apis/useGetProfile"

const MyPage = () => {
    const { data:profile } = useGetProfile();
    return (
        <>
            <Navbar title={"추천 편지"} mypage={true}/>
            <Wrapper>
                <Title textGreen={profile.nickname} text={"님을 위한 추천!"}/>
                <Image src={BirdFlySrc} alt="bird_fly"/>
                <SubTitle textE={"20대 여성이 좋아요를 많이한 편지예요"}/>
                <ContentsWrapper>
                    <PreviewBlock 
                        title={"제목제목제목"} 
                        content={"내용내용내용내용내용내용내용내용내용내용내용내용조금만더쓰면된다아아아아아라라라랄"}
                        nickname={"닉네임닉네임닉네임"}
                        date={"2025.12.27"}
                        likeCount={10}
                        category={"가족"}/>
                    <PreviewBlock 
                        title={"제목제목제목"} 
                        content={"내용내용내용내용내용내용내용내용내용내용내용내용조금만더쓰면된다아아아아아라라라랄"}
                        nickname={"닉네임"}
                        date={"2025-12-27"}
                        likeCount={10}
                        category={"가족"}/>
                    <PreviewBlock 
                        title={"제목제목제목"} 
                        content={"내용내용내용내용내용내용내용내용내용내용내용내용조금만더쓰면된다아아아아아라라라랄"}
                        nickname={"닉네임"}
                        date={"2025-12-27"}
                        likeCount={10}
                        category={"가족"}/>
                </ContentsWrapper>
            </Wrapper>
        </>
    )
}
export default MyPage

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 20px;
    overflow-y: auto;
`;

const Image = styled.img`
    width: 200px;
    heigth:150px;
    margin-top: 30px;
    margin-bottom: 30px;
`;

const ContentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
`;