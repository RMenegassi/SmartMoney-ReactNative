import React from 'react';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import {Container, Texto} from './styles';

const Report = () => {
  return (
    <Container>
      <BalanceLabel />
      <Texto>Todas Categorias</Texto>
      <Texto>Últimos 7 dias</Texto>
      <EntrySummary />
      <EntryList />
    </Container>
  );
};

export default Report;
