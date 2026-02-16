import styled from "styled-components";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import Title from "../components/text/Title";
import categories from "../data/categories";
import DropdownMenu from "../components/menu/DropdownMenu";
import SubTitle from "../components/text/SubTitle";
import NormalText from "../components/text/NormalText";
import infos from "../data/infos";
import RoundButton from "../components/button/RoundButton";
import SquareGreenButton from "../components/button/SquareGreenButton";
import { useNavigate } from "react-router-dom";

const LetterModify1Page = () => {
    const [category, setCategory] = useState("전체");
    const [selectedInfos, setSelectedInfos] = useState([]);

    const navigate = useNavigate();

    const handleSelect = (info) => {
        setSelectedInfos(prev => {
            if (prev.includes(info)) {
                return prev.filter(i => i !== info);
            }

            if (prev.length >= 3) {
                return prev;
            }

            return [...prev, info];
        });
    };

    const categoryInfo = {
        category: "가족",
        infos: ["거리감", "화해"]
    };

    useEffect(() => {
        const fetchCategory = async () => {

            setCategory(categoryInfo.category);
            setSelectedInfos(categoryInfo.infos);
        };

        fetchCategory();
    }, []);

    const handleNext = () => {
        // 저장 로직
        navigate("/letter/modify");
    }

    return (
        <>
            <Navbar title={"편지 수정"} mypage={true}/>
            <Wrapper>
                <Title text={"이 편지는 어떤 편지인가요?"} />
                <ContentsWrapper>
                    <SubTitle textE={"카테고리"}/>
                    <SortWrapper>
                        <DropdownMenu
                            menus={categories}
                            selected={category}
                            onSelect={setCategory}
                        />
                    </SortWrapper>
                </ContentsWrapper>
                <ContentsWrapper>
                    <SubTitle textE={"상세 정보"}/>
                </ContentsWrapper>
                <NormalText text={`기본 카테고리만으로 표현되지 않은 디테일한 상황을\n 지정해주세요! (최소 1개, 최대 3개 선택 가능)`}/>
                <InfoWrapper>
                    {
                        infos.map((info) => (
                            <RoundButton
                                text={info}
                                selected={selectedInfos.includes(info)}
                                onClick={() => handleSelect(info)}
                            />
                        ))
                    }
                </InfoWrapper>
            </Wrapper>
            <ButtonPosition>
                <SquareGreenButton text={"다음"} onClick={handleNext}/>
            </ButtonPosition>
        </>
    )
}

export default LetterModify1Page;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;

const ContentsWrapper = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
    margin-bottom: 10px;
`;

const SortWrapper = styled.div`
    height: 35px;
    display: flex;
    align-items: center;
    gap:10px;
`;

const InfoWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-wrap:wrap;
    justify-content: center; 
    align-items: center;
    gap: 10px;
    margin-top: 30px;
`;

const ButtonPosition = styled.div`
    position: absolute;
    right: 20px;
    bottom: 30px;
`;