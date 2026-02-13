import styled from "styled-components";
import Button from "../button/RoundWhiteButton"

const BottomLineInput = ({hint, onClick, value, onChange}) => {
    return (
        <>
            <Input placeholder={hint} maxLength={10} text={value} onChange={onChange}/>
            <BtnPosition>
                <Button text={"중복확인"} onClick={onClick}/>
            </BtnPosition>
        </>
    )
}
export default BottomLineInput;

const Input = styled.input`
    width: 230px;
    height: 30px;
    border:none;
    border-bottom: 1px solid #68AB46;
    &:focus {
        outline: none;
    }
`;

const BtnPosition = styled.div`
    position: relative;
    top:-30px;
    left: 85px;
`;