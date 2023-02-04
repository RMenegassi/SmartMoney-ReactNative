import React from 'react';

import BalanceLabel from '../../components/BalanceLabel';

import {Container, Input, Botao} from './styles';

const NewEntry = ({route}) => {
  const currentBalance = route.params;

  return (
    <Container>
      <BalanceLabel currentBalance={currentBalance} />
      <Input />
      <Input />
      <Botao title="GPS" />
      <Botao title="CAMERA" />
      <Botao title="ADICIONAR" />
      <Botao title="CANCELAR" />
    </Container>
  );
};

export default NewEntry;
