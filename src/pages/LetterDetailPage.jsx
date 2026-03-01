import styled from "styled-components";
import Navbar from "../components/navbar/navbar";
import LetterGreen from "../assets/letter/letter_green.png";
import LetterPink from "../assets/letter/letter_pink.png";
import LetterPurple from "../assets/letter/letter_purple.png";
import LetterSkyblue from "../assets/letter/letter_skyblue.png";
import SquareGreenButton from "../components/button/SquareGreenButton";
import RoundWhiteButton from "../components/button/RoundWhiteButton";
import RoundGreenButton from "../components/button/RoundGreenButton";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReplyBlock from "../components/block/ReplyBlock";
import LikeButton from "../components/button/LikeButton";
import ReplyInput from "../components/input/ReplyInput";
import useGetLetterDetail from "../apis/useGetLetterDetail";
import infoInKorean from "../data/infoInKorean";
import LoadingPage from "./LoadingPage";
import usePostLetterLike from "../apis/usePostLetterLike";
import useDeleteLetterLike from "../apis/useDeleteLetterLike";
import useDeleteLetter from "../apis/useDeleteLetter";
import usePostReply from "../apis/usePostLetterReply";
import useAuthStore from "../store/useAuthStore";
import useGetReplies from "../apis/useGetReplies";
import SubTitle from "../components/text/SubTitle";
import usePostReplyLike from "../apis/usePostReplyLike";
import useDeleteReplyLike from "../apis/useDeleteReplyLike";
import categoryInKorean from "../data/categoryInKorean";

const LetterDetailPage = () => {
    const [title, setTitle] = useState("");
    const [src, setSrc] = useState(LetterGreen);
    const [content, setContent] = useState("");
    const [replyView, setReplyView] = useState(false);
    const [reply, setReply] = useState("");
    const accessToken = useAuthStore((state) => state.accessToken);

    const { id } = useParams();
    const { data: letterDetail } = useGetLetterDetail(id);
    const { mutate: postLetterLike } = usePostLetterLike(id);
    const { mutate: deleteLetterLike } = useDeleteLetterLike(id);
    const { mutate: deleteLetter } = useDeleteLetter(id);
    const { mutate: postReply } = usePostReply(id);
    const { data: replies } = useGetReplies(id);
    const { mutate: postReplyLike } = usePostReplyLike(id);
    const { mutate: deleteReplyLike } = useDeleteReplyLike(id);


    const handleLike = () => {
        if (letterDetail.like) {
            deleteLetterLike();
        } else {
            postLetterLike();
        }
    };

    const handleReplyLike = (like, replyId) => {
        if (like) {
            deleteReplyLike(replyId);
        } else {
            postReplyLike(replyId);
        }
    };

    const navigate = useNavigate();

    const handleLetterDesign = (state) => {
        if (state == "GREEN"){
            setSrc(LetterGreen)
        } else if (state == "PINK"){
            setSrc(LetterPink)
        } else if (state == "SKYBLUE"){
            setSrc(LetterSkyblue)
        } else if (state == "PURPLE"){
            setSrc(LetterPurple)
        }
    }

    const handleDelete = () => {
        deleteLetter();
        navigate("/home");
    }

    const handlePostReply = () => {
        postReply({content: reply});
        setReply("");
    }

    useEffect(() => {
        const fetchLetter = async () => {
            setTitle(letterDetail.title);
            setContent(letterDetail.content);
            handleLetterDesign(letterDetail.letterDesign);
        };

        fetchLetter();
    }, [letterDetail]);

    if (!letterDetail) return <LoadingPage/>;

    return (
        <>
            <Page>
                <Navbar title={"편지 상세"} mypage={true}/>
                <Wrapper>
                    <GreenBorder>{title}</GreenBorder>
                    <ContentWrapper>
                            <Infos><Nickname onClick={(e)=>{
                                e.stopPropagation();
                                navigate(`/user/${letterDetail.writerId}`);}}>
                                {letterDetail.writerName}
                                </Nickname>/{letterDetail.createdAt}</Infos>
                            <LikeButton 
                                selected={letterDetail.like}
                                likeCount={letterDetail.likeCount}
                                letter={true}
                                onClick={handleLike}
                            />
                    </ContentWrapper>
                    <ButtonWrapper>
                        <RoundGreenButton text={categoryInKorean(letterDetail?.category)} width="50px"/>
                        {
                            letterDetail.infos.map((info) => (
                                    <RoundWhiteButton text={infoInKorean(info)} width="60px"/>
                            ))
                        }
                    </ButtonWrapper>
                    <LetterContainer>
                        <LetterImg src={src}/>
                        <ContentInput value={content}>{content}</ContentInput>
                        <TextLength>{content.length}/200</TextLength>
                        {
                            letterDetail.mine &&
                            <ButtonPositionLeft>
                                <ButtonWrapper>
                                    <RoundWhiteButton text={"삭제"} onClick={handleDelete}/>
                                    <RoundGreenButton text={"수정"} onClick={()=>navigate(`/letter/${id}/modify`)} />
                                </ButtonWrapper>
                            </ButtonPositionLeft>
                        }
                        <ButtonPosition>    
                            <SquareGreenButton text={`댓글(${replies?.length})`} onClick={()=>setReplyView(!replyView)}/>
                        </ButtonPosition>
                    </LetterContainer>
                    {
                        replyView && 
                            <ReplyContainer>
                                <ReplyWrapper>
                                    {
                                        replies?.length > 0 ?
                                            replies && replies.map((reply) => (
                                                <ReplyBlock 
                                                    replyId={reply.replyId}
                                                    nickname={reply.writerName}
                                                    content={reply.content}
                                                    date={reply.createdAt.slice(0, 10)}
                                                    likeCount={reply.likeCount}
                                                    selected={reply.like}
                                                    mine={reply.mine}
                                                    writerId={reply.writerId}
                                                    likeOnClick={()=>handleReplyLike(reply.like, reply.replyId)}
                                                />
                                            ))
                                        : <SubTitle textE={"아직 댓글이 없습니다."}/>
                                    }
                                </ReplyWrapper>
                                {
                                    accessToken && <ReplyInput 
                                                        value={reply}
                                                        onChange={(e)=>setReply(e.target.value)}
                                                        onClick={handlePostReply}/>
                                }
                            </ReplyContainer>
                    }
                </Wrapper>
            </Page>
        </>
    )
}

export default LetterDetailPage;

const Page = styled.div`
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
`;

const Wrapper = styled.div`
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 30px;
    margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

const ButtonWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`;

const LetterContainer = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    margin-bottom: 50px;
`;

const LetterImg = styled.img`
    width: 100%;
    height: 100%;
`;

const ButtonPositionLeft = styled.div`
    width: 200px;
    position: absolute;
    bottom: -50px;
    left: 0px;
`;

const ButtonPosition = styled.div`
    position: absolute;
    bottom: -50px;
    right: 0px;
`;

const GreenBorder = styled.div`
    width: 80%;
    height: 30px;
    padding-left: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #68AB46;
`;

const ContentInput = styled.div`
    position: absolute;
    top: 97px;
    left: 54px;
    font-size: 12px;
    width: 190px;
    height: 230px;
`;

const TextLength = styled.div`
    position: absolute;
    right: 55px;
    bottom: 65px;
    color: #A3A6A2;
`;

const Infos = styled.div`
    display: flex;
    font-size: 12px;
    color: black;
    white-space: nowrap;
`;

const ReplyContainer = styled.div`
    width: 300px; 
    height: 400px;
    background: #BEE9A8;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ReplyWrapper = styled.div`
    height: 300px;
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
    margin-bottom: 20px;
`;

const Nickname = styled.div`
    cursor: pointer;
`;