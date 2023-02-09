import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import BalancePanelLabel from './BalancePanelLabel';

import {useBalance} from '../../hooks/useBalance';

import {Container, Botao} from './styles';

import {theme} from '../../styles/Theme';

const BalancePanel = () => {
  const navigation = useNavigation();

  const [currentBalance] = useBalance();

  return (
    <Container>
      <LinearGradient colors={[theme.colors.violet, theme.colors.blue]}>
        <BalancePanelLabel currentBalance={currentBalance} />
      </LinearGradient>
      <Botao onPress={() => navigation.navigate('NewEntry')}>
        <Icon name="add" size={40} color="white" />
      </Botao>
    </Container>
  );
};

export default BalancePanel;
