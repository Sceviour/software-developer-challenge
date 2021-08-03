import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 50%;
  z-index: 0;
  display:flex;
  margin: auto;
  flex-direction: column;
  background: transparent;
  overflow: hidden;

  @media screen and (max-width: 375px) {
    width: 375px;
    height: 100%;
  }
`;


export const Picture = styled.img`
  z-index: 0;
  width: 890px;

  @media screen and (max-width: 375px) {
    width: 525px;
  }  
`;