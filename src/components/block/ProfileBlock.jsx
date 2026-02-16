import styled from "styled-components";
import RoundWhiteButton from "../button/RoundWhiteButton";
import IconSrc from "../../assets/icon.png"
import ProfileTitle from "../text/ProfileTitle";

const ProfileBlock = ({nickname, gender, ageGroup, interest, onClick, my}) => {
    return (
        <>
            <Block onClick={onClick} my={my}>
                <Wrapper> 
                    <Image src={IconSrc} alt="icon"/>
                    <ProfileTitle textGreen={nickname} text={`\n${gender}/${ageGroup}/관심분야:${interest}`}/>
                </Wrapper>
                <ButtonPosition>
                    {my && <RoundWhiteButton text={"프로필 정보 수정 ➜"} width="250px"/>}
                </ButtonPosition>
            </Block>
        </>
    )
}
export default ProfileBlock;

const Block = styled.div`
    width: 300px;
    height: ${props => props.my ? "100px" : "70px"};
    background: #BEE9A8;
    border-radius: 5px;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding:10px;
`;

const Wrapper = styled.div`
    width: 90%;
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