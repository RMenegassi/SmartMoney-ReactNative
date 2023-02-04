import {Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import BalancePanelChart from './BalancePanelChart';
import BalancePanelLabel from './BalancePanelLabel';

import {Container} from './styles';

const BalancePanel = ({currentBalance}) => {
  const navigation = useNavigation();

  return (
    <Container>
      <BalancePanelChart />
      <BalancePanelLabel currentBalance={currentBalance} />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry', currentBalance)}
      />
    </Container>
  );
};

export default BalancePanel;
