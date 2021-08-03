import React, {useLayoutEffect, useState} from 'react';
import Header from '../components/header';

export default function HeaderContainer () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Makes the dropdown close on resize.
  useLayoutEffect(() => {
    const handleWindowResize = () => {
      setIsMenuOpen(false);
    }
        
    window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  // close the menu when focus is lost.
  const handleBlurEvent = (e) => {
    console.log(e)
    setIsMenuOpen(false);
  };

  return (
    <>
      <Header>
        <Header.Logo />
        <Header.Bars
          imgSrc={ isMenuOpen ? 'icon-close' : 'icon-hamburger' }
          handleMenuClick={() => setIsMenuOpen(!isMenuOpen)}
          handleBlurEvent={handleBlurEvent}
        />
          
        {isMenuOpen &&
          <Header.Dropdown>
            <Header.DropDownLink to="#" activeStyle>PRODUCT</Header.DropDownLink>
            <Header.DropDownLink to="#" activeStyle>FEATURES</Header.DropDownLink>
            <Header.DropDownLink to="#" activeStyle>PRICING</Header.DropDownLink>
            <Header.DropDownLine />
            <Header.DropDownLinkLogon to="#" activeStyle>LOGIN</Header.DropDownLinkLogon>
          </Header.Dropdown>
        }
          
        <Header.Menu>
          <Header.Link to="#" activeStyle>PRODUCT</Header.Link>
          <Header.Link to="#" activeStyle>FEATURES</Header.Link>
          <Header.Link to="#" activeStyle>PRICING</Header.Link>
          <Header.LinkLogon to="#" activeStyle>LOGIN</Header.LinkLogon>
        </Header.Menu>
      </Header>
    </>
  ); 
}