import styled from "styled-components"
import Navbar from "../components/navbar/navbar"
import Title from "../components/text/Title"
import BirdFlySrc from "../assets/bird_fly1.png"
import SubTitle from "../components/text/SubTitle"
import PreviewBlock from "../components/block/PreviewBlock"
import useGetProfile from "../apis/useGetProfile"
import useGetRecommendLetters from "../apis/useGetRecommendLetters"
import categoryInKorean from "../data/categoryInKorean"
import LoadingPage from "./LoadingPage"

const MyPage = () => {
    const { data:profile, isLoading: profileLoading} = useGetProfile();
    const { data: result, isLoading: recommendLoading} = useGetRecommendLetters();
    if (profileLoading || recommendLoading) return <LoadingPage />;
    const letters = result?.letters ?? [];
    return (
        <>
            <Navbar title={"추천 편지"} mypage={true}/>
            <Wrapper>
                <Title textGreen={profile.nickname} text={"님을 위한 추천!"}/>
                <Image src={BirdFlySrc} alt="bird_fly"/>
                <SubTitle textE={result?.phrase}/>
                <ContentsWrapper>
                    {
                        letters && letters.map((letter) => (
                            <PreviewBlock 
                                title={letter.title} 
                                content={letter.content}
                                nickname={letter.writerName}
                                date={letter.createdAt}
                                likeCount={letter.likeCount}
                                category={categoryInKorean(letter.category)}/>
                        ))
                    }
                    {
                        !letters && <SubTitle textE={"회원님을 위한 추천 편지가 없습니다."}/>
                    }
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