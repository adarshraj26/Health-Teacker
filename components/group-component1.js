import styled from "styled-components";

const ProgressBackground = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: var(--br-base);
  background: radial-gradient(50% 50% at 50% 50%, #0e77d9, #7da7ce);
`;
const IconContainer = styled.img`
  height: 100%;
  width: 100%;
  z-index: 1;
  object-fit: contain;
  position: absolute;
  left: 3px;
  top: 4px;
  transform: scale(4.374);
`;
const WrapperIconContainer = styled.div`
  height: 55.7px;
  width: 54.5px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const YourDailyGoal = styled.h3`
  margin: 0;
  height: 10px;
  position: relative;
  font-size: inherit;
  line-height: 18.55px;
  text-transform: capitalize;
  font-weight: 700;
  font-family: inherit;
  color: var(--color-white);
  display: inline-block;
  white-space: nowrap;
  z-index: 1;
`;
const Of5Completed = styled.div`
  height: 8px;
  position: relative;
  font-size: var(--font-size-xs);
  line-height: 18.55px;
  text-transform: capitalize;
  display: inline-block;
  min-width: 100px;
  white-space: nowrap;
  z-index: 1;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 9.48px;
  background-color: var(--color-gray-300);
  width: 100%;
  height: 100%;
  display: none;
`;
const Bar = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 9.48px;
  background-color: var(--color-white);
  width: 158px;
  height: 2.4px;
  z-index: 1;
`;
const RectangleParent = styled.div`
  align-self: stretch;
  height: 2.4px;
  position: relative;
  border-radius: 9.48px;
  background-color: var(--color-gray-300);
  flex-shrink: 0;
  debug_commit: 1de1738;
  z-index: 1;
`;
const Div = styled.div`
  height: 7px;
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  min-width: 22px;
  flex-shrink: 0;
  debug_commit: 1de1738;
  z-index: 1;
`;
const ProgressLabel = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
`;
const ProgressBar = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  font-size: var(--font-size-3xs);
`;
const Completion = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const ProgressBackgroundParentRoot = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-smi-6) var(--padding-mid) var(--padding-3xs-7);
  position: relative;
  gap: var(--gap-4xs-5);
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-aliceblue);
  font-family: var(--font-dm-sans);
`;

const GroupComponent1 = () => {
  return (
    <ProgressBackgroundParentRoot>
      <ProgressBackground data-scroll-to="progressBackground" />
      <WrapperIconContainer>
        <IconContainer loading="lazy" alt="" src="/icon-container-1.svg" />
      </WrapperIconContainer>
      <Completion>
        <YourDailyGoal>Your daily goal almost done</YourDailyGoal>
        <Of5Completed>4 of 5 completed</Of5Completed>
        <ProgressBar>
          <RectangleParent>
            <FrameChild />
            <Bar />
          </RectangleParent>
          <ProgressLabel>
            <Div>80%</Div>
          </ProgressLabel>
        </ProgressBar>
      </Completion>
    </ProgressBackgroundParentRoot>
  );
};

export default GroupComponent1;
