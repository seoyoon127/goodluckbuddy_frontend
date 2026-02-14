import styled from "styled-components";

const ProfileTitle = ({textGreen, text}) => {
    return (
        <>
            <Wrapper>
                <TitleGreen>{textGreen}</TitleGreen>
                <TitleBlack>{text}</TitleBlack>
            </Wrapper>
        </>
    )
}
export default ProfileTitle;

const Wrapper = styled.div`
    white-space: pre-line;
`;

const TitleBlack = styled.span`
    font-size:14px;
    color:black;
    position:relative;
`;

const TitleGreen = styled.span`
    font-size:17px;
    font-weight:700;
    color: #68AB46;
    position:relative;
`;