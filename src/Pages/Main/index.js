import React from 'react';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import {Container} from './styles';

const Main = () => {
  const dados = [
    {id: 1, local: 'padaria 1', category: 'Alimentos', valor: 200},
    {id: 2, local: 'imobiliaria 1', category: 'Aluguel', valor: 500},
    {id: 3, local: 'banco 1', category: 'Emprestimo', valor: 100},
    {id: 4, local: 'compras 1', category: 'Outros', valor: 250},
  ];

  const currentBalance = 2450.35;

  return (
    <Container>
      <BalancePanel currentBalance={currentBalance} />
      <EntrySummary dados={dados} />
      <EntryList dados={dados} />
    </Container>
  );
};

export default Main;
