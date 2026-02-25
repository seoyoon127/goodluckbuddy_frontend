import styled from "styled-components";
import Navbar from "../components/navbar/navbar";
import ReplyList from "../layout/LetterReplyLayout";
import { useLocation } from "react-router-dom";

const UserReplyPage = () => {
    const location = useLocation();
    return (
        <>
            <Page>
                <Navbar title={location.state.nickname + "님의 댓글"}/>
                <ReplyList userId={location.state.id}/>
            </Page>
        </>
    )
}

export default UserReplyPage;

const Page = styled.div`
     min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
`;