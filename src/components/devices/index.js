import React from 'react';
import { Container, Picture } from './styles/devices';

export default function Devices({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Devices.Picture = function DevicesPicture({ children, ...restProps}) {
  return <Picture src={`/images/illustration-devices.svg`} />
};