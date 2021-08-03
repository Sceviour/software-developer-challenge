import React from 'react';
import { Container, Link, LinkLogon, Bars, Menu, Logo, Dropdown, DropDownLink, DropDownLinkLogon, DropDownLine} from './styles/header';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Link = function HeaderLink({ children, ...restProps}) {
  return <Link {...restProps}>{children}</Link>
};

Header.LinkLogon = function HeaderLinkLogon({ children, ...restProps}) {
  return <LinkLogon {...restProps}>{children}</LinkLogon>
};

Header.Bars = function HeaderBars({ imgSrc, handleMenuClick, handleBlurEvent, children, ...restProps}) {
  return (
    <Bars
      onClick={handleMenuClick}
      onBlur={handleBlurEvent}
    >
      <img src={`/images/${imgSrc}.svg`} alt="Menu Button"/>
    </Bars>
  );
};

Header.Logo = function HeaderLogo({ children, ...restProps}) {
  return <Logo src={`/images/logo.svg`} />
};

Header.Menu = function HeaderMenu({ children, ...restProps}) {
  return <Menu {...restProps}>{children}</Menu>
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps}) {
  return <Dropdown {...restProps}>{children}</Dropdown>
};

Header.DropDownLink = function HeaderDropDownLink({ children, ...restProps}) {
  return <DropDownLink {...restProps}>{children}</DropDownLink>
};

Header.DropDownLinkLogon = function HeaderDropDownLinkLogon({ children, ...restProps}) {
  return <DropDownLinkLogon {...restProps}>{children}</DropDownLinkLogon>
};

Header.DropDownLine = function HeaderDropDownLine({ children, ...restProps}) {
  return <DropDownLine {...restProps}>{children}</DropDownLine>
};
