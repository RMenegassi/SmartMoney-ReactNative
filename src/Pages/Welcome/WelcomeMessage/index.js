import React from 'react';

import {Container, Title, Text} from './styles';

const WelcomeMessage = () => {
  return (
    <Container>
      <Title>Olá</Title>
      <Text>
        Para começar a usar o Smart Money, você precisa informar o saldo atual.
        Vamos lá?
      </Text>
    </Container>
  );
};

export default WelcomeMessage;
