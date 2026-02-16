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
import RoundWhiteButton from "../components/button/RoundWhiteButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import InvalidText from "../components/text/InvalidText";
import validate from "../validate/validateLetter";


const LetterModifyPage = () => {
    const [title, setTitle] = useState("");
    const [selected, setSelected] = useState("GREEN");
    const [src, setSrc] = useState(LetterGreen);
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        title: "",
        content: ""
    });

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

    const letter = {
        title: "제목제목",
        content: "내용내용내용",
        letterDesign: "GREEN"
    };

    useEffect(() => {
        const fetchProfile = async () => {

            setTitle(letter.title);
            setContent(letter.content);
            setSelected(letter.letterDesign);
        };

        fetchProfile();
    }, []);

    const handleNext = () => {
        const { isValid, errors } = validate({
            title,
            content
        });

        setErrors(errors);

        if (isValid) {
            if (letter.title == title && letter.content == content && letter.letterDesign == selected) {
                alert("변경사항이 없습니다.")
            } else{
                validate()
                // 저장 로직
                alert("변경사항이 저장되었습니다.")
            }
            navigate("/home");
        }
    }

    return (
        <>
            <Navbar title={"편지 수정"} mypage={true}/>
            <Wrapper>
                <ContentsWrapper>
                    <SubTitle textE={"편지 제목"}/>
                </ContentsWrapper>
               <GreenBorderInput value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <ErrorSlot>
                    <InvalidText text={errors.title} />
                </ErrorSlot>
               <LetterContainer>
                    <LetterImg src={src}/>
                    <ContentInput value={content} onChange={(e)=>setContent(e.target.value.slice(0, 200))} maxLength={200}/>
                    <TextLength>{content.length}/200</TextLength>
                </LetterContainer>
                <ErrorSlot>
                    <InvalidText text={errors.content} />
                </ErrorSlot>
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
            <ButtonPositionLeft>
                <RoundWhiteButton text={"카테고리 수정"} onClick={()=>navigate("/category/modify")}/>
            </ButtonPositionLeft>
            <ButtonPosition>
                <SquareGreenButton text={"다음"} onClick={handleNext}/>
            </ButtonPosition>
        </>
    )
}

export default LetterModifyPage;

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
    gap: 20px;
    margin-bottom: 10px;
`;

const LetterContainer = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
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

const ButtonPositionLeft = styled.div`
    position: absolute;
    left: 20px;
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

const ErrorSlot = styled.div`
    height: 18px;
    width: 80%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
`;