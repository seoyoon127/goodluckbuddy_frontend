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

const HomePage = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const setAccessToken = useAuthStore((state) => state.setAccessToken);
    const accessToken = useAuthStore((state) => state.accessToken);

    const { data:profile } = useGetProfile();

    useEffect(() => {
        if (!token) return;
        setAccessToken(token);
    }, [token]);
    
    const [category, setCategory] = useState("전체");
    const [sort, setSort] = useState("최신순");
    const navigate = useNavigate();
    return (
        <>
            <Page>
                <LogoNavbar mypage={accessToken ? true : false}/>
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
                    <PreviewBlock 
                        id={1}
                        title={"제목제목제목"} 
                        content={"내용내용내용내용내용내용내용내용내용내용내용내용조금만더쓰면된다아아아아아라라라랄"}
                        nickname={"닉네임"}
                        date={"2025-12-27"}
                        likeCount={10}
                        category={"가족"}/>
                </Wrapper>
            </Page>
        </>
    )
}
export default HomePage

const Page = styled.div`
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
`;

const Wrapper = styled.div`
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
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