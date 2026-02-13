import styled from "styled-components";

const Title = ({textGreen, text}) => {
    return (
        <>
            <Wrapper>
                <TitleGreen>{textGreen}</TitleGreen>
                <TitleBlack>{text}</TitleBlack>
            </Wrapper>
        </>
    )
}
export default Title;

const Wrapper = styled.div`
    white-space: pre-line;
    text-align: center;  
`;

const TitleBlack = styled.span`
    font-size:19px;
    font-weight:700;
    color:black;
    position:relative;
`;

const TitleGreen = styled.span`
    font-size:19px;
    font-weight:700;
    color:#68AB46;
    position:relative;
`;