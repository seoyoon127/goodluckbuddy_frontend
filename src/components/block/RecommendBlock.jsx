import styled from "styled-components";
import RoundWhiteButton from "../button/RoundWhiteButton";
import IconSrc from "../../assets/icon.png"
import RecommendTitle from "../text/RecommendTitle";

const RecommendBlock = ({nickname, onClick}) => {
    return (
        <>
            <Block onClick={onClick}>
                <Wrapper> 
                    <Image src={IconSrc} alt="icon"/>
                    <RecommendTitle textWhite={nickname} text={"님을 위한\n 추천 편지가 도착했어요!"}/>
                </Wrapper>
                <ButtonPosition>
                    <RoundWhiteButton text={"추천 편지 보러 가기 ➜"} width="250px"/>
                </ButtonPosition>
            </Block>
        </>
    )
}
export default RecommendBlock;

const Block = styled.div`
    width: 340px;
    height: 100px;
    background: #93D074;
    border-radius: 5px;
    display:flex;
    flex-direction: column;
    padding:10px;
    margin-top: 30px;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center; 
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
`;

const Image = styled.img`
    width: 75px;
    heigth: 75px;
    margin-top: 30px;
    margin-bottom: 30px;
`;

const ButtonPosition = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
`;