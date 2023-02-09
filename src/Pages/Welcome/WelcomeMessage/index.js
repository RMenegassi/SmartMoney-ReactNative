import React from 'react';

import {Container, Title, Texto} from './styles';

const WelcomeMessage = () => {
  return (
    <Container>
      <Title>Olá</Title>
      <Texto>
        Para começar a usar o Smart Money, você precisa informar o saldo atual.
        Vamos lá?
      </Texto>
    </Container>
  );
};

export default WelcomeMessage;
