import styled from "styled-components";
import Navbar from "../components/navbar/navbar";
import ReplyList from "../layout/LetterReplyLayout";

const MyReplyPage = () => {
    return (
        <>
            <Page>
                <Navbar title={"내가 쓴 댓글"}/>
                <ReplyList/>
            </Page>
        </>
    )
}

export default MyReplyPage;

const Page = styled.div`
     min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
`;