import styled from "styled-components";

const InvalidText = ({text}) => {
    return (
        <>
            <Title>{text}</Title>
        </>
    )
}
export default InvalidText;

const Title = styled.span`
    font-size:14px;
    color:red;
    position:relative;
`;