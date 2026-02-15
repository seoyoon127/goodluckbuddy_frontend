import styled from "styled-components";
import Navbar from "../components/navbar/navbar";
import SubTitle from "../components/text/SubTitle";
import GreenBorderInput from "../components/input/GreenBorderInput";
import LetterGreen from "../assets/letter/letter_green.png";
import LetterPink from "../assets/letter/letter_pink.png";
import LetterPurple from "../assets/letter/letter_purple.png";
import LetterSkyblue from "../assets/letter/letter_skyblue.png";
import PreviewGreen from "../assets/letter/preview_green.png";
import PreviewPink from "../assets/letter/preview_pink.png";
import PreviewPurple from "../assets/letter/preview_purple.png";
import PreviewSkyblue from "../assets/letter/preview_skyblue.png";
import SquareGreenButton from "../components/button/SquareGreenButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const LetterWrite2Page = () => {
    const [selected, setSelected] = useState("GREEN");
    const [src, setSrc] = useState(LetterGreen);
    const [value, setValue] = useState("");
    const navigate = useNavigate();
    const handleLetterDesign = (state) => {
        setSelected(state);
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
    const handleNext = () => {
        // 저장 로직
        navigate("/home");
    }
    return (
        <>
            <Navbar title={"편지 쓰기"} mypage={true}/>
            <Wrapper>
                <ContentsWrapper>
                    <SubTitle textE={"편지 제목"}/>
                </ContentsWrapper>
               <GreenBorderInput/>
               <LetterContainer>
                    <LetterImg src={src}/>
                    <ContentInput value={value} onChange={(e)=>setValue(e.target.value.slice(0, 200))} maxLength={200}/>
                    <TextLength>{value.length}/200</TextLength>
                </LetterContainer>
                <ContentsWrapper>
                    <SubTitle textE={"편지지 디자인"}/>
                </ContentsWrapper>
                <ContentsWrapper>
                    <PreviewImg src={PreviewGreen} selected={selected=="GREEN"} onClick={()=>handleLetterDesign("GREEN")}/>
                    <PreviewImg src={PreviewPink} selected={selected=="PINK"} onClick={()=>handleLetterDesign("PINK")}/>
                    <PreviewImg src={PreviewSkyblue} selected={selected=="SKYBLUE"} onClick={()=>handleLetterDesign("SKYBLUE")}/>
                    <PreviewImg src={PreviewPurple} selected={selected=="PURPLE"} onClick={()=>handleLetterDesign("PURPLE")}/>
                </ContentsWrapper>
            </Wrapper>
            <ButtonPosition>
                <SquareGreenButton text={"다음"} onClick={handleNext}/>
            </ButtonPosition>
        </>
    )
}

export default LetterWrite2Page;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
`;

const ContentsWrapper = styled.div`
    width: 80%;
    display: flex;
    align-items: ;
    gap: 20px;
    margin-bottom: 10px;
`;

const LetterContainer = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    margin-top: 30px;
    margin-bottom: 20px;
`;

const LetterImg = styled.img`
    width: 100%;
    height: 100%;
`;

const PreviewImg = styled.img`
    width: 60px;
    height: 50px;
    box-sizing: border-box;
    border: 2px solid ${props => props.selected ? "#68AB46" : "brightness(0.6)"};
    filter: ${props => props.selected ? "none" : "brightness(0.6)"};
    transition: 0.2s;
`; 

const ButtonPosition = styled.div`
    position: absolute;
    right: 20px;
    bottom: 30px;
`;

const ContentInput = styled.textarea`
    position: absolute;
    top: 97px;
    left: 52px;

    width: 190px;
    height: 230px;
    background: none;
    border: none;
    
    &:focus {
        outline: none;
    }
`

const TextLength = styled.div`
    position: absolute;
    right: 55px;
    bottom: 65px;
    color: #A3A6A2;
`;