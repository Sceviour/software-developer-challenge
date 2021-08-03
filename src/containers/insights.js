import React from 'react';
import Insights from '../components/insights';

export default function InsightContainer () {
  return (
    <>
      <Insights>
        <Insights.GroupTogether>
          <Insights.NewTag>NEW</Insights.NewTag>
          <Insights.TinyText>MONOGRAPH DASHBOARD</Insights.TinyText>
        </Insights.GroupTogether>

        <Insights.Title>POWERFUL INSIGHTS<br /> INTO YOUR TEAM</Insights.Title>
        <Insights.SubTitle>Project planning and time tracking<br />  for agile teams</Insights.SubTitle>

        <Insights.GroupTogether>
          <Insights.Button>SCHEDULE A DEMO</Insights.Button>
          <Insights.TinyText>TO SEE A PREVIEW</Insights.TinyText>
          </Insights.GroupTogether>
        </Insights>
    </>
  ); 
}