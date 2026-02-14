import styled from "styled-components";

const SquareGreenLongButton = ({text, width, onClick}) => {
    return (
        <>
            <Button width={width} onClick={onClick}>{text}</Button>
        </>
    )
}
export default SquareGreenLongButton;

const Button = styled.button`
    width: ${props => props.width || '230px'};
    height: 40px;
    font-size: 12px;
    padding: 3px 7px;
    border-radius: 5px;

    border: 1px solid #68AB46;
    color: #68AB46;
    background-color: white;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
        outline: none;
    }
`