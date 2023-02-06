import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import BalancePanelChart from './BalancePanelChart';
import BalancePanelLabel from './BalancePanelLabel';

import {Container, Botao} from './styles';

import {theme} from '../../styles/Theme';

const BalancePanel = ({currentBalance}) => {
  const navigation = useNavigation();

  return (
    <Container>
      <LinearGradient colors={[theme.colors.violet, theme.colors.blue]}>
        <BalancePanelLabel currentBalance={currentBalance} />
      </LinearGradient>
      <Botao onPress={() => navigation.navigate('NewEntry', {currentBalance})}>
        <Icon name="add" size={40} color="white" />
      </Botao>
    </Container>
  );
};

export default BalancePanel;
