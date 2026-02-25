import styled from "styled-components";
import Navbar from "../components/navbar/navbar";
import LetterList from "../layout/LetterListLayout";
import { useLocation } from "react-router-dom";

const UserLetterPage = () => {
    const location = useLocation();
    console.log(location.state.nickname, location.state.id)
    return (
        <>
            <Page>
                <Navbar title={location.state.nickname + "님의 편지"}/>
                <LetterList userId={location.state.id}/>
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