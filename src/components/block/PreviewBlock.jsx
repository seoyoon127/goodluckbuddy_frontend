import styled from "styled-components";
import Title from "../text/Title";
import RoundGreenButton from "../button/RoundGreenButton";

const PreviewBlock = ({title, content, nickname, date, likeCount, category}) => {
    return (
        <>
            <Block>
                <TextWrapper><Title text={title}/></TextWrapper>
                <Content>{content}</Content>
                <PreviewWrapper>
                    <Infos>{nickname}/{date}/❤️{likeCount}</Infos>
                    <RoundGreenButton text={category} width="50px"/>
                </PreviewWrapper>
            </Block>
        </>
    )
}
export default PreviewBlock;

const Block = styled.div`
    width: 260px;
    height: 120px;
    background: #BEE9A8;
    border-radius: 5px;
    display:flex;
    flex-direction: column;
    padding:10px 20px 5px 20px;
`;

const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start; 
    margin-bottom: 10px;
`;

const Content = styled.div`
    font-size: 14px;
    height: 40px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
`;

const Infos = styled.div`
    font-size: 14px;
    color: #526548;
`;

const PreviewWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`;