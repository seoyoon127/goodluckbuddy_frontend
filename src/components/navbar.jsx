import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";
import { IoChevronBackOutline } from "react-icons/io5";

const Navbar = ({title, mypage}) =>{
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    return(
        <Container>
            <IconPosition onClick={handleGoBack}><BackIcon/></IconPosition>
            <Title>{title}</Title>
            {mypage && <IconPosition2 onClick={()=>navigate("/mypage")}><MyPageIcon/></IconPosition2>}
            {!mypage && <IconPosition2 onClick={()=>navigate("/home")}><HomeIcon/></IconPosition2>}
        </Container>
    )
}
export default Navbar

const Container = styled.div`
    width:100%;
    max-width:393px;
    height:60px;
    background-color:white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    display:flex;
    justify-content: center;
    align-item:center;
    font-family: "Pretendard Variable";
`;
const IconPosition = styled.div`
    position:relative;
    top:20px;
    left:-35%;

`;
const IconPosition2 = styled.div`
    position:relative;
    top:-5px;
    left:40%;
`;
const Title = styled.div`
    font-size:17px;
    font-weight:500;
    color:black;
    position:relative;
    top:20px;
`
const MyPageIcon = styled(IoPersonOutline)`
    width:24px;
    height:24px;
    position: absolute; 
    right: 30px;
    color: #000;
    top:26px;
`;
const HomeIcon = styled(HiOutlineHome)`
    width:24px;
    height:24px;
    position: absolute; 
    right: 30px;
    color: #000;
    top:26px;
`;
const BackIcon= styled(IoChevronBackOutline)`
    width:24px;
    height:24px;
    position: absolute;
    right: -30px;
    color: #000;
    top:1px;
`