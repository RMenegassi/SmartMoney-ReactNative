import React from 'react';

import {currencyFormatter} from '../../../vendors/currencyFormatter';

import {Container, Title, Saldo} from './styles';

const BalancePanelLabel = ({currentBalance}) => {
  return (
    <Container>
      <Title>Saldo Inicial</Title>
      <Saldo>{currencyFormatter(currentBalance)}</Saldo>
    </Container>
  );
};

export default BalancePanelLabel;
