import styled from "styled-components";

const InvalidText = ({text, valid}) => {
    return (
        <>
            <Title valid={valid}>{text}</Title>
        </>
    )
}
export default InvalidText;

const Title = styled.span`
    font-size:14px;
    color: ${props => props.valid ?  "blue" : "red"};
    position:relative;
`;