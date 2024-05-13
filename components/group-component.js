import { useCallback } from "react";
import styled from "styled-components";

const FrameChild = styled.div`
  height: 70px;
  width: 360px;
  position: relative;
  box-shadow: 0px -6px 12px rgba(30, 30, 30, 0.25);
  background-color: var(--color-gray-200);
  display: none;
  max-width: 100%;
`;
const NavButtonsChild = styled.img`
  height: 40px;
  width: 40px;
  position: relative;
`;
const NavButtons = styled.div`
  align-self: stretch;
  height: 13.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-xl);
`;
const Page = styled.div`
  position: relative;
  line-height: 7px;
  color: var(--color-tomato-100);
  display: inline-block;
  min-width: 26px;
`;
const Page1 = styled.div`
  position: relative;
  line-height: 7px;
  display: inline-block;
  min-width: 28px;
`;
const Page2 = styled.div`
  position: relative;
  line-height: 7px;
  display: inline-block;
  min-width: 29px;
`;
const PageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const Pages = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-7xs-5) 0px var(--padding-6xs);
`;
const Nav = styled.div`
  flex: 1;
  filter: drop-shadow(0px 2px 8px rgba(31, 31, 31, 0.25));
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-9xl-5);
  z-index: 1;
`;
const RectangleParentRoot = styled.footer`
  align-self: stretch;
  box-shadow: 0px -6px 12px rgba(30, 30, 30, 0.25);
  background-color: var(--color-gray-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-11xl) var(--padding-mini);
  box-sizing: border-box;
  flex-shrink: 0;
  debug_commit: 1de1738;
  max-width: 100%;
  cursor: pointer;
  text-align: center;
  font-size: var(--font-size-3xs);
  color: var(--color-silver-200);
  font-family: var(--font-dm-sans);
`;

const GroupComponent = () => {
  const onGroupFooterClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='goalContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <RectangleParentRoot onClick={onGroupFooterClick}>
      <FrameChild />
      <Nav>
        <NavButtons>
          <NavButtonsChild loading="lazy" alt="" src="/group-125.svg" />
          <NavButtonsChild loading="lazy" alt="" src="/group-123.svg" />
          <NavButtonsChild loading="lazy" alt="" src="/group-7899.svg" />
          <NavButtonsChild loading="lazy" alt="" src="/group-7901.svg" />
        </NavButtons>
        <Pages>
          <PageContainer>
            <Page>Page1</Page>
            <Page1>Page2</Page1>
            <Page1>Page3</Page1>
            <Page2>Page4</Page2>
          </PageContainer>
        </Pages>
      </Nav>
    </RectangleParentRoot>
  );
};

export default GroupComponent;
