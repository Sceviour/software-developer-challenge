import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 50%;
  height: 348px;
  padding-top: 40px;
  padding-bottom: 40px;
  
  background-color: #ffffff;
  flex-direction: column;

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: left;
    width: 375px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 40px;
    box-sizing: border-box;
  }
`;

export const Title = styled.h1`
  color: #242942;
  font-size: 38px;
  font-weight: 700;
  font-family: 'Barlow Condensed';  
  margin: auto;
  padding-left: 250px;

  @media (max-width: 375px) {
    padding-left: 20px;
    font-size: 34px;
  }
`;

export const SubTitle = styled.h2`
  color: #5b5f71;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Barlow Condensed';
  margin: auto;
  margin-top: 20px;
  padding-left: 250px;

  @media (max-width: 375px) {
    padding-left: 20px;
    font-size: 14px;
  }
`;

export const NewTag = styled.p`
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  font-family: 'Barlow Condensed';
  

  border-radius: 15px;
  background: #242942;
  padding: 6px;
  padding-left: 20px;
  width: 35px;
  height: 15px;

`;

export const TinyText = styled.h3`
  color: #a0a1ac;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Barlow Condensed';
  margin-left: 10px;

  @media (max-width: 375px) {
    font-size: 14px;
  }
`;

export const GroupTogether = styled.div`
  display: flex;    
  justify-content: left;
  align-items: left;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 250px;

  @media (max-width: 375px) {
    max-width: 375px
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
  }
`;

export const Button = styled.button`
  border-radius: 10px;  
  background-color: #ff5c5c;
  border-color: #ff5c5c;
  width: 115px;
  height: 40px;
  color: white;
  font-size: 10px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #ff0a16;    
  }
`;