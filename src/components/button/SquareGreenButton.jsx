import styled from "styled-components";

const SquareGreenButton = ({text, onClick}) => {
    return (
        <>
            <Button onClick={onClick}>{text}</Button>
        </>
    )
}
export default SquareGreenButton;

const Button = styled.button`
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 5px;

    color: white;
    border: 1px solid #68AB46;
    background-color: #68AB46;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
        outline: none;
    }
`