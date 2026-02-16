import styled from "styled-components";
import DropdownMenu from "../components/menu/DropdownMenu"
import categories from "../data/categories"
import { useState} from "react";
import sorts from "../data/sorts"
import PreviewBlock from "../components/block/PreviewBlock"


const Letter = () => {
    const [category, setCategory] = useState("전체");
    const [sort, setSort] = useState("최신순");
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