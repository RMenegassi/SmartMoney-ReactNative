import React from 'react';

import {Container, Title, Saldo} from './styles';

const BalanceLabel = ({currentBalance}) => {
  return (
    <Container>
      <Title>Saldo Atual</Title>
      <Saldo>R$ {currentBalance}</Saldo>
    </Container>
  );
};

export default BalanceLabel;
