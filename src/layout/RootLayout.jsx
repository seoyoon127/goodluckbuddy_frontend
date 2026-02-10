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
  width: 393px;          /* ⭐ PC 기본: 폰 폭 */
  height: 852px;         /* ⭐ PC 기본: 폰 높이 */
  background: #fff;
  position: relative;
  font-family: "Pretendard Variable";
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 3px solid blue;

  /* 📱 모바일에서는 풀스크린 */
  @media (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    box-shadow: none;
    border: 1px solid red;
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
