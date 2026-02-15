import styled from "styled-components";
import Navbar from "../components/navbar/navbar";
import LetterList from "../layout/LetterListLayout";


const MyReplyPage = () => {
    return (
        <>
            <Page>
                <Navbar title={"내가 쓴 댓글"}/>
                <LetterList/>
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