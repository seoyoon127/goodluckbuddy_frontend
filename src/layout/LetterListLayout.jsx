import styled from "styled-components";
import DropdownMenu from "../components/menu/DropdownMenu"
import categories from "../data/categories"
import { useState} from "react";
import sorts from "../data/sorts"
import PreviewBlock from "../components/block/PreviewBlock"
import categoryInKorean from "../data/categoryInKorean";
import useGetMyLetters from "../apis/useGetMyLetters"
import categoryInEnglish from "../data/categoryInEnglish";
import useGetLikeLetters from "../apis/useGetLikeLetters";

const Letter = ({like}) => {
    const [category, setCategory] = useState("전체");
    const [sort, setSort] = useState("최신순");

    const normalQuery = useGetMyLetters({
        category: categoryInEnglish(category),
        sort: sort === "최신순" ? "LATEST" : "LIKE"
    }, {
        enabled: !like
    });

    const likedQuery = useGetLikeLetters({
        category: categoryInEnglish(category),
        sort: sort === "최신순" ? "LATEST" : "LIKE"
    }, {
        enabled: like
    });

    const letters = like ? likedQuery.data : normalQuery.data;

    return (
        <>
            <Wrapper>
                <ContentsWrapper>
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
                            category={categoryInKorean(letter.category)}/>
                    ))
                }
            </Wrapper>
        </>
    )
}

export default Letter;

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
    width: 300px;
    display: flex;
    justify-content: right;
    margin-top: 30px;
    margin-bottom: 10px;
`;


const SortWrapper = styled.div`
    height: 35px;
    display: flex;
    align-items: center;
    gap:10px;
`;