import styled from "styled-components";

const RoundButton = ({text, onClick, selected}) => {
    return (
        <>
            <Button onClick={onClick} selected={selected}>{text}</Button>
        </>
    )
}
export default RoundButton;

const Button = styled.button`
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 20px;

    border: 1px solid ${props => props.selected ?  "#68AB46": "#ABAAAA"};
    color: ${props => props.selected ?  "#68AB46": "#ABAAAA"};
    background-color: white;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
        outline: none;
    }
`