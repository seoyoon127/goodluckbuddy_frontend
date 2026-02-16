import styled from "styled-components";
import Navbar from "../components/navbar/navbar";
import LetterList from "../layout/LetterListLayout";


const UserReplyPage = () => {
    return (
        <>
            <Page>
                <Navbar title={"닉네임님의 댓글"}/>
                <LetterList/>
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