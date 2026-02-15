import styled from "styled-components";

const NormalText = ({text}) => {
    return (
        <>
            <Text>{text}</Text>
        </>
    )
}
export default NormalText;

const Text = styled.span`
    white-space: pre-line;
    font-size:13px;
    color:black;
    position:relative;
`;