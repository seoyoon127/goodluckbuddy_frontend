import styled from "styled-components";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

const LikeButton = ({ likeCount, selected, onClick }) => {
    return (
        <Button selected={selected} onClick={onClick}>
            <Heart>
                {selected ? <GoHeartFill /> : <GoHeart />}
            </Heart>
            {likeCount}
        </Button>
    );
};

export default LikeButton;

const Button = styled.button`
    font-size: 12px;
    padding: 2px 10px;
    border-radius: 20px;

    border: 1px solid ${props => props.selected ?  "#68AB46": "#68AB46"};
    background-color: ${props => props.selected ?  "#68AB46": "white"};

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
        outline: none;
    }

    gap: 5px;
`

const Heart = styled.div`
    color: red;
    height: 20px;
    font-size: 18px; 
    display: flex;
    align-items: center;
    justify-content: center;
`;