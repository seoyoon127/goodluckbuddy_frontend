import styled from "styled-components";
import Navbar from "../components/navbar/navbar";
import LetterList from "../layout/LetterListLayout";


const MyLikesPage = () => {
    return (
        <>
            <Page>
                <Navbar title={"좋아요한 편지"}/>
                <LetterList like={true}/>
            </Page>
        </>
    )
}

export default MyLikesPage;

const Page = styled.div`
     min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
`;