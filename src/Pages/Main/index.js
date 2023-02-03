import React from 'react';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import {Container} from './styles';

const Main = () => {
  return (
    <Container>
      <BalancePanel />
      <EntrySummary />
      <EntryList />
    </Container>
  );
};

export default Main;
