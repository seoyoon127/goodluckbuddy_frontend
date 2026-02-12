import styled from "styled-components";

const Title = ({textGreen, text}) => {
    return (
        <>
            <Wrapper>
                <TitleGreen> {textGreen} </TitleGreen>
                <TitleBlack> {text} </TitleBlack>
            </Wrapper>
        </>
    )
}
export default Title;

const Wrapper = styled.div`
     display:flex;
`;

const TitleBlack = styled.div`
    font-size:19px;
    font-weight:700;
    color:black;
    position:relative;
`;

const TitleGreen = styled.div`
    font-size:19px;
    font-weight:700;
    color:#68AB46;
    position:relative;
`;