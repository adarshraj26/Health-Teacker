import { useCallback } from "react";
import styled from "styled-components";
import GroupComponent1 from "../components/group-component1";
import ChartArea from "../components/chart-area";
import GroupComponent from "../components/group-component";

const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 9.46px;
  background-color: var(--color-gray-100);
  width: 100%;
  height: 100%;
`;
const Mon = styled.div`
  width: 21px;
  height: 7px;
  position: relative;
  line-height: 18.46px;
  display: inline-block;
`;
const Div = styled.div`
  width: 20.5px;
  height: 8px;
  position: relative;
  font-size: var(--font-size-xs);
  line-height: 18.46px;
  font-weight: 500;
  display: inline-block;
`;
const MonParent = styled.div`
  position: absolute;
  top: calc(50% - 11.85px);
  left: calc(50% - 11.8px);
  width: 23.4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-3xs-5);
`;
const RectangleParent = styled.div`
  height: 47.3px;
  flex: 1;
  position: relative;
  font-family: var(--font-dm-sans);
`;
const FrameItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 9.46px;
  background-color: rgba(209, 84, 57, 0.18);
  border: 0.8px solid var(--color-tomato-100);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;
const Tue = styled.div`
  width: 20.5px;
  height: 7px;
  position: relative;
  line-height: 18.46px;
  display: inline-block;
`;
const RectangleGroup = styled.div`
  height: 47.3px;
  flex: 1;
  position: relative;
  color: var(--color-tomato-100);
  font-family: var(--font-dm-sans);
`;
const FrameInner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 9.46px;
  background-color: var(--color-tomato-100);
  width: 100%;
  height: 100%;
`;
const Div1 = styled.div`
  width: 20.5px;
  height: 9px;
  position: relative;
  font-size: var(--font-size-xs);
  line-height: 18.46px;
  font-weight: 500;
  display: inline-block;
`;
const WedParent = styled.div`
  position: absolute;
  top: calc(50% - 12.35px);
  left: calc(50% - 11.8px);
  width: 23.4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-3xs-5);
`;
const RectangleContainer = styled.div`
  height: 47.3px;
  flex: 1;
  position: relative;
  color: var(--color-white);
`;
const GroupDiv = styled.div`
  height: 47.3px;
  flex: 1;
  position: relative;
`;
const FrameParent = styled.div`
  width: 312px;
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7.9px;
`;
const FrameChild1 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 156px);
  border-radius: var(--br-base);
  background: radial-gradient(50% 50% at 50% 50%, #d15439, #d37560);
  width: 100%;
  height: 100%;
`;
const IconContainer = styled.img`
  position: absolute;
  height: calc(100% - 22.3px);
  top: 12.6px;
  bottom: 9.7px;
  left: 17px;
  max-height: 100%;
  width: 54.5px;
`;
const YourDailyGoal = styled.b`
  align-self: stretch;
  height: 10px;
  position: relative;
  line-height: 18.55px;
  text-transform: capitalize;
  display: inline-block;
  white-space: nowrap;
`;
const Of5Completed = styled.div`
  height: 8px;
  position: relative;
  font-size: var(--font-size-xs);
  line-height: 18.55px;
  text-transform: capitalize;
  color: var(--color-aliceblue);
  display: inline-block;
  white-space: nowrap;
`;
const YourDailyGoalAlmostDoneParent = styled.div`
  width: 192px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
`;
const FrameChild2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 9.48px;
  background-color: var(--color-gray-300);
  width: 100%;
  height: 100%;
`;
const FrameChild3 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 9.48px;
  background-color: var(--color-white);
  width: 158px;
  height: 2.4px;
`;
const RectangleParent1 = styled.div`
  align-self: stretch;
  height: 2.4px;
  position: relative;
`;
const Div2 = styled.div`
  height: 7px;
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
`;
const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: var(--gap-9xs);
  font-size: var(--font-size-3xs);
  color: var(--color-aliceblue);
`;
const FrameGroup = styled.div`
  position: absolute;
  top: calc(50% - 24px);
  left: 80px;
  width: 209.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const RectangleParent2 = styled.div`
  height: 78px;
  width: 312px;
  position: relative;
  display: none;
`;
const Goal = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  flex-shrink: 0;
  debug_commit: 1de1738;
  cursor: pointer;
`;
const Progress = styled.header`
  align-self: stretch;
  height: 78px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-5xl);
  box-sizing: border-box;
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-white);
  font-family: var(--font-dm-sans);
`;
const ContentTopIcon = styled.img`
  height: 525.5px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  object-fit: contain;
  flex-shrink: 0;
  debug_commit: 1de1738;
`;
const ContentTopWrapper = styled.section`
  align-self: stretch;
  height: 525.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 23.1px 0px 23px;
  box-sizing: border-box;
  flex-shrink: 0;
`;
const DesktopRoot = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px 43.5px;
  box-sizing: border-box;
  gap: 24px;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  font-size: var(--font-size-3xs);
  color: var(--color-silver-100);
  font-family: var(--font-roboto);
`;

const Desktop = () => {
  const onGoalContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='progressBackground']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <DesktopRoot>
      <FrameParent>
        <RectangleParent>
          <FrameChild />
          <MonParent>
            <Mon>Mon</Mon>
            <Div>11</Div>
          </MonParent>
        </RectangleParent>
        <RectangleGroup>
          <FrameItem />
          <MonParent>
            <Tue>Tue</Tue>
            <Div>12</Div>
          </MonParent>
        </RectangleGroup>
        <RectangleContainer>
          <FrameInner />
          <WedParent>
            <Tue>Wed</Tue>
            <Div1>13</Div1>
          </WedParent>
        </RectangleContainer>
        <GroupDiv>
          <FrameChild />
          <WedParent>
            <Tue>Thu</Tue>
            <Div1>14</Div1>
          </WedParent>
        </GroupDiv>
        <GroupDiv>
          <FrameChild />
          <WedParent>
            <Tue>Fri</Tue>
            <Div1>15</Div1>
          </WedParent>
        </GroupDiv>
        <GroupDiv>
          <FrameChild />
          <WedParent>
            <Tue>Sat</Tue>
            <Div1>16</Div1>
          </WedParent>
        </GroupDiv>
        <GroupDiv>
          <FrameChild />
          <WedParent>
            <Tue>Sun</Tue>
            <Div1>17</Div1>
          </WedParent>
        </GroupDiv>
      </FrameParent>
      <Progress>
        <Goal data-scroll-to="goalContainer" onClick={onGoalContainerClick}>
          <RectangleParent2>
            <FrameChild1 />
            <IconContainer alt="" src="/icon-container.svg" />
            <FrameGroup>
              <YourDailyGoalAlmostDoneParent>
                <YourDailyGoal>Your daily goal almost done</YourDailyGoal>
                <Of5Completed>4 of 5 completed</Of5Completed>
              </YourDailyGoalAlmostDoneParent>
              <FrameContainer>
                <RectangleParent1>
                  <FrameChild2 />
                  <FrameChild3 />
                </RectangleParent1>
                <Div2>80%</Div2>
              </FrameContainer>
            </FrameGroup>
          </RectangleParent2>
          <GroupComponent1 />
        </Goal>
      </Progress>
      <ContentTopWrapper>
        <ContentTopIcon loading="lazy" alt="" src="/frame-1171275256@2x.png" />
      </ContentTopWrapper>
      <ChartArea />
      <GroupComponent />
    </DesktopRoot>
  );
};

export default Desktop;
