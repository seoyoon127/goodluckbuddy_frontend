import styled from "styled-components";
import Title from "../components/text/Title";
import BirdFly1 from "../assets/bird_fly1.png";
import BirdFly2 from "../assets/bird_fly2.png";
import { useState, useEffect} from "react";
import SubTitle from "../components/text/SubTitle";

const LoadingPage = () => {
    const frames = [BirdFly1, BirdFly2,];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % frames.length);
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Wrapper>
                <Title text={"로딩 중..."}/>
                <Image src={frames[index]} alt="로딩"/>
                <SubTitle textGreen={"잠시만 기다려주세요"}/>
            </Wrapper>
        </>
    )
}

export default LoadingPage;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calc(20vh);
`;

const Image = styled.img`
    width: 200px;
    heigth:150px;
    margin-top: 30px;
    margin-bottom: 30px;
`;