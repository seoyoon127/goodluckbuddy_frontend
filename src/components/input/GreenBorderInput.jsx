import styled from "styled-components";
import Button from "../button/RoundWhiteButton"

const GreenBorderInput = ({hint, value, onChange}) => {
    return (
        <>
            <Input placeholder={hint} maxLength={20} value={value} onChange={onChange}/>
        </>
    )
}
export default GreenBorderInput;

const Input = styled.input`
    width: 80%;
    height: 30px;
    border:none;
    border: 1px solid #68AB46;
    &:focus {
        outline: none;
    }
`;
