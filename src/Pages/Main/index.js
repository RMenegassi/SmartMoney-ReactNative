import React from 'react';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import {Container} from './styles';

import useEntries from '../../hooks/useEntries';

const Main = ({navigation}) => {
  const [entries, , ,] = useEntries();

  const currentBalance = 2450.35;

  return (
    <Container>
      <BalancePanel currentBalance={currentBalance} />
      <EntrySummary
        dados={entries}
        onPressActionButton={() => navigation.navigate('Report')}
      />
      <EntryList onPressActionButton={() => navigation.navigate('Report')} />
    </Container>
  );
};

export default Main;
