import React from 'react';

import {Container, Title, Saldo} from './styles';

const BalancePanelLabel = () => {
  const saldo = 2150.35;

  return (
    <Container>
      <Title>Saldo Inicial</Title>
      <Saldo>R$ {saldo}</Saldo>
    </Container>
  );
};

export default BalancePanelLabel;
