import React from 'react';

import {Container, Title, Saldo, Input, Botao} from './styles';

const BalanceLabel = () => {
  const saldo = 2150.35;

  return (
    <Container>
      <Title>Saldo Atual</Title>
      <Saldo>R$ {saldo}</Saldo>
      <Input />
      <Input />
      <Botao title="GPS" />
      <Botao title="CAMERA" />
      <Botao title="ADICIONAR" />
      <Botao title="CANCELAR" />
    </Container>
  );
};

export default BalanceLabel;
