import {Button} from 'react-native';
import React from 'react';

import BalancePanelChart from './BalancePanelChart';
import BalancePanelLabel from './BalancePanelLabel';

import {Container} from './styles';

const BalancePanel = () => {
  return (
    <Container>
      <BalancePanelChart />
      <BalancePanelLabel />
      <Button title="Adicionar" />
    </Container>
  );
};

export default BalancePanel;
