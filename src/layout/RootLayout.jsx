import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: #f2f2f2;
`;

const Main = styled.div`
  width: 393px;  
  height: 852px;  
  background: #fff;
  position: relative;
  font-family: "Pretendard Variable";
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

  // 모바일
  @media (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    box-shadow: none;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const RootLayout = () => {
  return (
    <Wrapper>
      <Main>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </Main>
    </Wrapper>
  );
};

export default RootLayout;
