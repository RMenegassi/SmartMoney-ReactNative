import React from 'react';

import {Container, Title, Saldo} from './styles';

const BalanceLabel = () => {
  const saldo = 2150.35;

  return (
    <Container>
      <Title>Saldo Atual</Title>
      <Saldo>R$ {saldo}</Saldo>
    </Container>
  );
};

export default BalanceLabel;
