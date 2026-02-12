import styled from "styled-components";

const RoundWhiteButton = ({text, width}) => {
    return (
        <>
            <Button width={width}>{text}</Button>
        </>
    )
}
export default RoundWhiteButton;

const Button = styled.button`
    width: ${props => props.width || '230px'};
    height: 40px;
    font-size: 12px;
    padding: 3px 7px;
    border-radius: 5px;

    border: 1px solid #93D074;
    color: white;
    background-color: #93D074;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
`