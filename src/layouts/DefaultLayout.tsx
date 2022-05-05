import { ReactNode } from "react";
import Header from "./Header/Header";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100vw;
  height: 100vh;
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Content>
      <Header />
      <Main>{children}</Main>
    </Content>
  );
};

export default DefaultLayout;
