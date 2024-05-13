import styled from "styled-components";

const FrameChild = styled.div`
  height: 213px;
  width: 312px;
  position: relative;
  border-radius: var(--br-xs);
  background-color: var(--color-gray-100);
  display: none;
`;
const Spacing = styled.div`
  position: relative;
  display: inline-block;
  min-width: 24px;
  z-index: 1;
`;
const Spacing1 = styled.div`
  position: relative;
  display: inline-block;
  min-width: 21px;
  z-index: 1;
`;
const Spacing2 = styled.div`
  position: relative;
  display: inline-block;
  min-width: 20px;
  z-index: 1;
`;
const GraphContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) 0px 0px;
`;
const Div = styled.div`
  position: relative;
  line-height: 6px;
  font-weight: 500;
  display: inline-block;
  min-width: 10px;
`;
const YLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs);
`;
const YAxisChild = styled.div`
  width: 14px;
  flex: 1;
  position: relative;
  border-radius: var(--br-11xs);
  background-color: var(--color-steelblue);
`;
const YAxis = styled.div`
  height: 145px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const Div1 = styled.div`
  position: relative;
  line-height: 6px;
  font-weight: 500;
  display: inline-block;
  min-width: 14px;
`;
const Div2 = styled.div`
  height: 6px;
  position: relative;
  line-height: 10.4px;
  font-weight: 500;
  display: inline-block;
  min-width: 10px;
`;
const Interval = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
`;
const XLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl-5);
`;
const FrameItem = styled.div`
  align-self: stretch;
  width: 14px;
  position: relative;
  border-radius: var(--br-11xs);
  background-color: var(--color-steelblue);
`;
const RectangleGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-lg-5);
`;
const XAxis = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
`;
const Div3 = styled.div`
  position: relative;
  line-height: 6px;
  font-weight: 500;
  display: inline-block;
  min-width: 11px;
`;
const BottomLabel = styled.div`
  width: 14px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px var(--padding-11xs-5);
  box-sizing: border-box;
`;
const IntervalMarkerChild = styled.div`
  height: 125px;
  width: 14px;
  position: relative;
  border-radius: var(--br-11xs);
  background-color: var(--color-steelblue);
`;
const DataValue = styled.div`
  height: 6px;
  position: relative;
  line-height: 10.4px;
  font-weight: 500;
  display: inline-block;
  min-width: 11px;
`;
const Point = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs-8) 0px 0px;
`;
const PointContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const PointContainerWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-11xs-5) 0px var(--padding-11xs);
`;
const PointBars = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-lg-5);
`;
const DataPoints = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-10xs-2);
`;
const IntervalMarker = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-lg-6);
`;
const BottomInterval = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const GraphBottom = styled.div`
  height: 144.5px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs-4);
`;
const Graph = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-9xs) 0px;
  gap: var(--gap-lg-6);
  z-index: 1;
`;
const Labels = styled.div`
  height: 7px;
  position: relative;
  display: inline-block;
  min-width: 21px;
`;
const Labels1 = styled.div`
  height: 7px;
  position: relative;
  display: inline-block;
  min-width: 22px;
`;
const Labels2 = styled.div`
  height: 7px;
  position: relative;
  display: inline-block;
  min-width: 23px;
`;
const Labels3 = styled.div`
  height: 7px;
  position: relative;
  display: inline-block;
  min-width: 16px;
`;
const Labels4 = styled.div`
  height: 7px;
  position: relative;
  display: inline-block;
  min-width: 19px;
`;
const Labels5 = styled.div`
  height: 7px;
  position: relative;
  font-family: var(--font-poppins);
  display: inline-block;
  min-width: 23px;
`;
const GraphX = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  z-index: 1;
  font-size: var(--font-size-3xs);
  color: var(--color-silver-100);
`;
const Chart = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  text-align: center;
  font-size: var(--font-size-5xs);
  color: var(--color-whitesmoke);
  font-family: var(--font-dm-sans);
`;
const RectangleParent = styled.div`
  align-self: stretch;
  flex: 1;
  border-radius: var(--br-xs);
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xl) var(--padding-sm);
  gap: var(--gap-3xs);
  flex-shrink: 0;
  debug_commit: 1de1738;
`;
const ChartAreaRoot = styled.section`
  align-self: stretch;
  height: 213px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-5xl);
  box-sizing: border-box;
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-3xs);
  color: var(--color-silver-100);
  font-family: var(--font-poppins);
`;

const ChartArea = () => {
  return (
    <ChartAreaRoot>
      <RectangleParent>
        <FrameChild />
        <GraphContainer>
          <GraphContent>
            <Spacing>100%</Spacing>
            <Spacing1>80%</Spacing1>
            <Spacing1>60%</Spacing1>
            <Spacing1>40%</Spacing1>
            <Spacing2>20%</Spacing2>
          </GraphContent>
        </GraphContainer>
        <Chart>
          <Graph>
            <YAxis>
              <YLabel>
                <Div>92</Div>
              </YLabel>
              <YAxisChild />
            </YAxis>
            <XAxis>
              <XLabel>
                <Div1>100</Div1>
                <Interval>
                  <Div2>98</Div2>
                </Interval>
              </XLabel>
              <RectangleGroup>
                <FrameItem />
                <FrameItem />
              </RectangleGroup>
            </XAxis>
            <GraphBottom>
              <BottomLabel>
                <Div3>90</Div3>
              </BottomLabel>
              <IntervalMarker>
                <FrameItem />
                <BottomInterval>
                  <YLabel>
                    <Div>84</Div>
                  </YLabel>
                  <IntervalMarker>
                    <IntervalMarkerChild />
                    <DataPoints>
                      <PointContainerWrapper>
                        <PointContainer>
                          <Div>82</Div>
                          <Point>
                            <DataValue>80</DataValue>
                          </Point>
                          <Point>
                            <DataValue>80</DataValue>
                          </Point>
                        </PointContainer>
                      </PointContainerWrapper>
                      <PointBars>
                        <FrameItem />
                        <FrameItem />
                        <FrameItem />
                      </PointBars>
                    </DataPoints>
                  </IntervalMarker>
                </BottomInterval>
              </IntervalMarker>
            </GraphBottom>
          </Graph>
          <GraphX>
            <Labels>28/4</Labels>
            <Labels1>30/4</Labels1>
            <Labels2>02/5</Labels2>
            <Labels2>05/5</Labels2>
            <Labels3>11/5</Labels3>
            <Labels4>15/5</Labels4>
            <Labels4>15/5</Labels4>
            <Labels5>22/5</Labels5>
          </GraphX>
        </Chart>
      </RectangleParent>
    </ChartAreaRoot>
  );
};

export default ChartArea;
