import styled from "styled-components"
import LogoNavbar from "../components/navbar/LogoNavbar"
import Title from "../components/text/Title"
import BirdHappySrc from "../assets/bird_happy.png"
import KakaoButtonSrc from "../assets/kakao_button.png"
import GoogleButtonSrc from "../assets/google_button.png"
import { useSearchParams } from "react-router-dom"

const LoginPage = () => {
    const OAUTH_BASE = import.meta.env.VITE_API_BASE_URL;
    const [searchParams] = useSearchParams();
    const redirect = searchParams.get("redirect") || "/";
    
    const handleKakaoLogin = () => {
        const encodedRedirect = encodeURIComponent(redirect);
        window.location.href = `${OAUTH_BASE}/oauth2/authorization/kakao?redirect=${encodedRedirect}`;
    };

    const handleGoogleLogin = () => {
        const encodedRedirect = encodeURIComponent(redirect);
        window.location.href = `${OAUTH_BASE}/oauth2/authorization/google?redirect=${encodedRedirect}`;
    };
    return (
        <>
            <LogoNavbar none={true} login={true}/>
            <Wrapper>
                <Title textGreen={`간편 로그인`} text={`으로 \n 더 많은 기능을 이용해보세요`}/>
                <Image src={BirdHappySrc} alt="bird_happy"/>
                <ButtonWrapper>
                    <ImageButton src={KakaoButtonSrc} onClick={handleKakaoLogin}/>
                    <ImageButton src={GoogleButtonSrc} onClick={handleGoogleLogin}/>
                </ButtonWrapper>
            </Wrapper>
        </>
    )
}
export default LoginPage


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
`;

const Image = styled.img`
    width: 200px;
    heigth:150px;
    margin-top: 30px;
    margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
    gap:30px;
`;

const ImageButton = styled.img`
    width: 230px;
`;