import React from 'react';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import {Container} from './styles';

const Main = ({navigation}) => {
  return (
    <Container>
      <BalancePanel />
      <EntrySummary onPressActionButton={() => navigation.navigate('Report')} />
      <EntryList onPressActionButton={() => navigation.navigate('Report')} />
    </Container>
  );
};

export default Main;
