import React from 'react';

import {Container, Title, Saldo} from './styles';

const BalancePanelLabel = ({currentBalance}) => {
  return (
    <Container>
      <Title>Saldo Inicial</Title>
      <Saldo>R$ {currentBalance}</Saldo>
    </Container>
  );
};

export default BalancePanelLabel;
