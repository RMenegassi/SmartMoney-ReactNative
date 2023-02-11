import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {useBalance} from '../../hooks/useBalance';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import BalancePanelLabel from './BalancePanelLabel';

import {Container, Button} from './styles';

import {theme} from '../../styles/Theme';

const BalancePanel = () => {
  const navigation = useNavigation();

  const [currentBalance] = useBalance();

  return (
    <Container>
      <LinearGradient colors={[theme.colors.violet, theme.colors.blue]}>
        <BalancePanelLabel currentBalance={currentBalance} />
      </LinearGradient>
      <Button onPress={() => navigation.navigate('NewEntry')}>
        <Icon name="add" size={40} color="white" />
      </Button>
    </Container>
  );
};

export default BalancePanel;
