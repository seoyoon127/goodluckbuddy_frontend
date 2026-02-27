import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import LogoSrc from "../../assets/logo.png"
import RoundWhiteButton from '../button/RoundWhiteButton';

const LogoNavbar = ({my, none}) =>{
    const navigate = useNavigate();
    return(
        <Container>
            <LogoPosition onClick={()=>navigate("/home")}><LogoImage src={LogoSrc} alt="logo"/></LogoPosition>
            {my && !none && <IconPosition2 onClick={()=>navigate("/my")}><MyPageIcon/></IconPosition2>}
            {!my && !none && <IconPosition2 onClick={()=>navigate("/login")}><RoundWhiteButton text="로그인"/></IconPosition2>}
        </Container>
    )
}
export default LogoNavbar

const Container = styled.div`
    width:100%;
    height:80px;
    background-color:white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-family: "Pretendard Variable";
`;
const LogoPosition = styled.div`
    position:relative;
    left: 15px;
    top:3px;
`;
const IconPosition2 = styled.div`
    position:relative;
    right:35px;
    top:3px;
`;

const LogoImage = styled.img`
    width:130px;
    height:65px;
`;

const MyPageIcon = styled(IoPersonOutline)`
    width:30px;
    height:30px;
    color: #000;
`;