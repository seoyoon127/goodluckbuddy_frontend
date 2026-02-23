import styled from "styled-components";
import Navbar from "../components/navbar/navbar";
import LetterList from "../layout/LetterListLayout";

const MyLetterPage = () => {
    return (
        <>
            <Page>
                <Navbar title={"내가 쓴 편지"}/>
                <LetterList />
            </Page>
        </>
    )
}

export default MyLetterPage;

const Page = styled.div`
     min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
`;