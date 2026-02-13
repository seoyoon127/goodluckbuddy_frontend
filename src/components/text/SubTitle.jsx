import styled from "styled-components";

const SubTitle = ({textS, textGreen, textE}) => {
    return (
        <>
            <Wrapper>
                {textS && <Title>{textS}</Title>}
                {textGreen && <TitleGreen>{textGreen}</TitleGreen>}
                {textE && <Title>{textE}</Title>}
            </Wrapper>
        </>
    )
}
export default SubTitle;

const Wrapper = styled.div`
    white-space: pre-line;
    text-align: center;  
`;

const Title = styled.span`
    font-size:15px;
    font-weight:700;
    color:black;
    position:relative;
`;

const TitleGreen = styled.span`
    font-size:15px;
    font-weight:700;
    color:#68AB46;
    position:relative;
     white-space: nowrap;
`;