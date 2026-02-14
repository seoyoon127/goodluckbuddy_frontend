import styled from "styled-components";

const RoundWhiteButton = ({text, onClick, width}) => {
    return (
        <>
            <Button onClick={onClick} width={width}>{text}</Button>
        </>
    )
}
export default RoundWhiteButton;

const Button = styled.button`
    width: ${props => props.width || "100%"};
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 20px;

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