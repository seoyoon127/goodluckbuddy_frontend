import styled from "styled-components";
import Button from "../button/SquareGreenButton"

const ReplyInput = ({hint, value, onChange, onClick}) => {
    return (
        <>
            <Wrapper>
                <Input placeholder={hint} maxLength={100} value={value} onChange={onChange}/>
                <Button text={"등록"} onClick={onClick} selected={true}/>
            </Wrapper>
        </>
    )
}
export default ReplyInput;

const Wrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;
`;

const Input = styled.textarea`
    width: 200px;
    height: 30px;
    font-size: 15px;
    border:none;
    border: 1px solid #68AB46;
    padding-left: 5px;
    &:focus {
        outline: none;
    }
`;