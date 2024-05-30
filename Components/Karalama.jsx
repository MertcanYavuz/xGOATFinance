import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 1vh;
  transform: translateY(0px);
  color: ;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Karalama = () => {
  return (
    <Container>
      <Title>Token Sale</Title>
    </Container>
  );
}

export default Karalama;
