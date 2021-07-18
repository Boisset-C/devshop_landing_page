import styled from "styled-components";
import { MobileTopNav } from "../navigation/mobile/MobileTopNav";
import { useWindowSize } from "../../hooks/useWindowSize";
import { WebTopNav } from "../navigation/web/WebTopNav";

export function Layout({ children, buttonAction }) {
  const { isMobile } = useWindowSize();

  return (
    <LayoutContainer>
      {isMobile ? null : <WebTopNav />}
      <PageContainer>{children}</PageContainer>
      {isMobile ? <MobileTopNav buttonAction={buttonAction} /> : null}
    </LayoutContainer>
  );
}

const LayoutContainer = styled.main`
  min-height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-rows: minmax(0, 1fr) 68px;
  overflow: hidden;

  @media (min-width: 768px) {
    grid-template-rows: 100px minmax(0, 1fr);
  }
`;

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
`;
