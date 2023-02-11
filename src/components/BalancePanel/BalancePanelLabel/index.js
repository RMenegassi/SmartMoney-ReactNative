import React from 'react';

import {currencyFormatter} from '../../../vendors/currencyFormatter';

import {Container, Title, Balance} from './styles';

const BalancePanelLabel = ({currentBalance}) => {
  return (
    <Container>
      <Title>Saldo Inicial</Title>
      <Balance>{currencyFormatter(currentBalance)}</Balance>
    </Container>
  );
};

export default BalancePanelLabel;
