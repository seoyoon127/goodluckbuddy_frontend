import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";
import { IoChevronBackOutline } from "react-icons/io5";

const Navbar = ({title, mypage, none, backNone}) =>{
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    return(
        <Container>
            {!backNone && <IconPosition onClick={handleGoBack}><BackIcon/></IconPosition>}
            <Title>{title}</Title>
            {mypage && !none && <IconPosition2 onClick={()=>navigate("/my")}><MyPageIcon/></IconPosition2>}
            {!mypage && !none && <IconPosition2 onClick={()=>navigate("/home")}><HomeIcon/></IconPosition2>}
        </Container>
    )
}
export default Navbar

const Container = styled.div`
    width:100%;
    height:80px;
    background-color:white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    display:flex;
    justify-content: center;
    align-items:center;
    font-family: "Pretendard Variable";
    position: relative;
`;
const IconPosition = styled.div`
    position: absolute;
    left: 30px;
    top:25px;
`;
const IconPosition2 = styled.div`
    position: absolute;
    right: 30px;
    top:25px;
`;
const Title = styled.div`
    font-size:18px;
    font-weight:500;
    color:black;
    position:relative;
`
const MyPageIcon = styled(IoPersonOutline)`
    width:30px;
    height:30px;
    color: #000;
`;
const HomeIcon = styled(HiOutlineHome)`
    width:30px;
    height:30px;
    color: #000;
`;
const BackIcon= styled(IoChevronBackOutline)`
    width:30px;
    height:30px;
    color: #000;
`