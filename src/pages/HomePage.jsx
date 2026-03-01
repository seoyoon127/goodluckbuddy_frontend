import styled from "styled-components"
import LogoNavbar from "../components/navbar/LogoNavbar"
import Title from "../components/text/Title"
import DropdownMenu from "../components/menu/DropdownMenu"
import categories from "../data/categories"
import { useState, useEffect} from "react";
import sorts from "../data/sorts"
import PreviewBlock from "../components/block/PreviewBlock"
import RecommendBlock from "../components/block/RecommendBlock"
import { useNavigate, useSearchParams } from "react-router-dom"
import useAuthStore from "../store/useAuthStore"
import useGetProfile from "../apis/useGetProfile"
import SquareGreenButton from "../components/button/SquareGreenButton"
import useGetLetters from "../apis/useGetLetters"
import categoryInEnglish from "../data/categoryInEnglish"
import categoryInKorean from "../data/categoryInKorean"
import LoadingPage from "./LoadingPage"

const HomePage = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const setAccessToken = useAuthStore((state) => state.setAccessToken);
    const accessToken = useAuthStore((state) => state.accessToken);
    const setId = useAuthStore((state) => state.setId);

    useEffect(() => {
        if (!token) return;

        setAccessToken(token);
    }, [token]);

    
    const { data:profile } = useGetProfile();
    
    useEffect(() => {
        if (!profile) return;

        setId(profile.id);
    }, [profile]);
    
    const [category, setCategory] = useState("전체");
    const [sort, setSort] = useState("최신순");
    const navigate = useNavigate();
    const {data:letters } = useGetLetters({
        category: categoryInEnglish(category),
        sort: sort === "최신순" ? "LATEST" : "LIKE"
    });

    if (!letters) return <LoadingPage/>;

    return (
        <>
            <Page>
                <LogoNavbar my={accessToken ? true : false}/>
                <Wrapper>
                    { accessToken && profile && <RecommendBlock nickname={profile.nickname} onClick={()=>navigate("/recommend")}/>}
                    <ContentsWrapper>
                        <Title text={"편지 보기"}/>
                        <SortWrapper>
                            <DropdownMenu
                                menus={categories}
                                selected={category}
                                onSelect={setCategory}
                            />
                            <DropdownMenu
                                menus={sorts}
                                selected={sort}
                                onSelect={setSort}
                            />
                        </SortWrapper>
                    </ContentsWrapper>
                    {
                        Array.isArray(letters) && letters.map((letter) => (
                            <PreviewBlock 
                                id={letter.letterId}
                                title={letter.title} 
                                content={letter.content}
                                nickname={letter.writerName}
                                date={letter.createdAt}
                                likeCount={letter.likeCount}
                                category={categoryInKorean(letter.category)}
                                writerId={letter.writerId}/>
                        ))
                    }
                </Wrapper>
                <ButtonPosition>
                    <SquareGreenButton text={"편지 쓰러 가기"} onClick={()=>navigate("/letter/category")}/>
                </ButtonPosition>
            </Page>
        </>
    )
}
export default HomePage

const Page = styled.div`
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    position:relative;
`;

const Wrapper = styled.div`
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 100px;
`;

const ContentsWrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 10px;
`;


const SortWrapper = styled.div`
    height: 35px;
    display: flex;
    align-items: center;
    gap:10px;
`;

const ButtonPosition = styled.div`
    position: absolute;
    right: 20px;
    bottom: 30px;
`;