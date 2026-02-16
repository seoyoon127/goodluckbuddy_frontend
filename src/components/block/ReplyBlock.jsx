import styled from "styled-components";
import LikeButton from "../button/LikeButton";

const ReplyBlock = ({nickname, content, date, like, likeCount, likeOnClick}) => {
    return (
        <>
            <Block>
                <PreviewWrapper>
                    <Infos><Nickname>{nickname}</Nickname>{date}</Infos>
                    <LikeButton likeCount={likeCount} selected={like} letter={false} onClick={likeOnClick}/>
                </PreviewWrapper>
                <Content>{content}</Content>
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