import React from 'react';
import { Container, Title, SubTitle, NewTag, TinyText, GroupTogether, Button } from './styles/insights';

export default function Insights({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Insights.Title = function InsightsTitle({ children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
};

Insights.SubTitle = function InsightsSubTitle({ children, ...restProps}) {
  return <SubTitle {...restProps}>{children}</SubTitle>
};

Insights.NewTag = function InsightsNewTag({ children, ...restProps}) {
  return <NewTag {...restProps}>{children}</NewTag>
};

Insights.TinyText = function InsightsTinyText({ children, ...restProps}) {
  return <TinyText {...restProps}>{children}</TinyText>
};

Insights.GroupTogether = function InsightsGroupTogether({ children, ...restProps}) {
  return <GroupTogether {...restProps}>{children}</GroupTogether>
};

Insights.Button = function InsightsButton({ children, ...restProps}) {
  return <Button {...restProps}>{children}</Button>
};