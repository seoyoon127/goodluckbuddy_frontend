import styled from "styled-components";

const RoundWhiteButton = ({text, onClick}) => {
    return (
        <>
            <Button onClick={onClick}>{text}</Button>
        </>
    )
}
export default RoundWhiteButton;

const Button = styled.button`
    font-size: 12px;
    padding: 3px 7px;
    border-radius: 999px;

    color: white;
    border: 1px solid #68AB46;
    background-color: #68AB46;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
`