import styled from "styled-components";

const RecommendTitle = ({textWhite, text}) => {
    return (
        <>
            <Wrapper>
                <TitleWhite>{textWhite}</TitleWhite>
                <TitleBlack>{text}</TitleBlack>
            </Wrapper>
        </>
    )
}
export default RecommendTitle;

const Wrapper = styled.div`
    white-space: pre-line;
`;

const TitleBlack = styled.span`
    font-size:17px;
    color:black;
    position:relative;
`;

const TitleWhite = styled.span`
    font-size:17px;
    font-weight:700;
    color:white;
    position:relative;
`;