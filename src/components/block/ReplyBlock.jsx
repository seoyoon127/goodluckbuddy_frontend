import styled from "styled-components";
import LikeButton from "../button/LikeButton";
import useDeleteReply from "../../apis/useDeleteReply";
import { useNavigate } from "react-router-dom";

const ReplyBlock = ({replyId, nickname, content, date, likeCount, selected, mine, writerId, likeOnClick}) => {
    const { mutate: deleteReply } = useDeleteReply(replyId);
    const navigate = useNavigate();
    const handleDelete = () => {
        deleteReply();
    }
    return (
        <>
            <Block>
                <PreviewWrapper>
                    <Infos>
                        <Nickname onClick={(e)=>{
                            e.stopPropagation();
                            navigate(`/user/${writerId}`);}}>
                            {nickname}
                        </Nickname>{date}</Infos>
                    <LikeButton likeCount={likeCount} selected={selected} letter={false} onClick={likeOnClick}/>
                </PreviewWrapper>
                <Content>{content}</Content>
                {mine && <DeleteButton onClick={handleDelete}>삭제</DeleteButton>}
            </Block>
        </>
    )
}

export default ReplyBlock;

const Block = styled.div`
    width: 250px;
    background: white;
    border-radius: 5px;
    display:flex;
    flex-direction: column;
    padding: 5px 10px 5px 10px;
    position: relative;
`;

const Infos = styled.div`
    display: flex;
    font-size: 14px;
    color: #ABAAAA;
    white-space: nowrap;
    gap: 5px;
`;

const Nickname = styled.div`
    max-width: 120px;
    color: black;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
`;

const PreviewWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Content = styled.div`
    margin-top: 3px;
    margin-bottom: 3px;
`;

const DeleteButton = styled.div`
    font-size: 12px;
    color: gray;
    position: absolute;
    right: 10px;
    bottom: 7px;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;