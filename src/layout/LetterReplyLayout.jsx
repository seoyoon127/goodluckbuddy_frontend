import styled from "styled-components";
import DropdownMenu from "../components/menu/DropdownMenu"
import categories from "../data/categories"
import { useState} from "react";
import sorts from "../data/sorts"
import PreviewBlock from "../components/block/PreviewBlock"
import categoryInKorean from "../data/categoryInKorean";
import categoryInEnglish from "../data/categoryInEnglish";
import useGetMyReplies from "../apis/useGetMyReplies";
import useGetUserReplies from "../apis/useGetUserReplies";

const Reply = ({userId}) => {
    const [category, setCategory] = useState("전체");
    const [sort, setSort] = useState("최신순");

    const UserQuery = useGetUserReplies({
        category: categoryInEnglish(category),
        sort: sort === "최신순" ? "LATEST" : "LIKE",
        id: userId
    });

    const myQuery =  useGetMyReplies({
        category: categoryInEnglish(category),
        sort: sort === "최신순" ? "LATEST" : "LIKE"
    });

    const { data: replies } = userId ? UserQuery : myQuery;

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
                    Array.isArray(replies) && replies.map((reply) => (
                        <PreviewBlock 
                            id={reply.letterId}
                            title={reply.letterTitle} 
                            content={reply.content}
                            nickname={reply.writerName}
                            date={reply.createdAt}
                            likeCount={reply.likeCount}
                            category={categoryInKorean(reply.category)}
                            writerId={reply.writerId}/>
                    ))
                }
            </Wrapper>
        </>
    )
}

export default Reply;

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