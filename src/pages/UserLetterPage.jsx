import styled from "styled-components";
import Navbar from "../components/navbar/navbar";
import LetterList from "../layout/LetterListLayout";


const UserLetterPage = () => {
    return (
        <>
            <Page>
                <Navbar title={"닉네임님의 편지"}/>
                <LetterList/>
            </Page>
        </>
    )
}

export default UserLetterPage;

const Page = styled.div`
     min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
`;