import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 1440px;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem calc((100-vw - 1440px) / 2);
  background-color: transparent;
  z-index: 10;
  margin-top: 100px;

@media screen and (max-width: 375px) {
  width: 375px;  
  margin-top: 0px;
}
`;

export const Link = styled.p`
  color: #242942;
  font-weight: 700;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

export const LinkLogon = styled.p`
color: #a0a1ac;
font-weight: 700;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-size: 12px;
margin-left: 100px;

&:hover {
  text-decoration: underline;
}
`;

export const Logo = styled.img`
  height: 30px;
  width: 30px;  
  display: block;
  postion: relative;
  border: none;
  padding-left: 250px;
  
  @media screen and  (max-width: 375px) {
    padding-left: 20px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 100px;

  @media screen and  (max-width: 375px) {
    display: none;
  }
`;

export const Dropdown = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  background-color: #ffffff;
  padding: 10px;
  width: 275px;
  height: auto;
  top: 65px;
  right: 30px;
  box-shadow: 1px 1px; #eef3f6;
  border-radius: 5px;
`

export const DropDownLink = styled.p`
  color: #242942;
  font-weight: 700;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    text-decoration: underline;
  }
`;

export const DropDownLinkLogon = styled.p`
  color: #a0a1ac;
  font-weight: 700;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
`;
export const DropDownLine = styled.p`
  margin: 10px 0;
  width: 200px;
  border-bottom: 1px solid black;
`;

export const Bars = styled.button`
display: none;

@media screen and (max-width: 375px) {
  display: block;
  postion: absolute;
  top: 0;
  right: 0;
  transform: translate(-95%, -10%);
  font-size: 1.8rem;
  cursor: pointer;
  border: none;
}
`;