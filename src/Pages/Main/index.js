import React from 'react';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import {Container} from './styles';

import useEntries from '../../hooks/useEntries';

const Main = () => {
  const [entries, , ,] = useEntries();

  const currentBalance = 2450.35;

  return (
    <Container>
      <BalancePanel currentBalance={currentBalance} />
      <EntrySummary dados={entries} />
      <EntryList dados={entries} />
    </Container>
  );
};

export default Main;
