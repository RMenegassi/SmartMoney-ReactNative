import React from 'react';

import {useBalance} from '../../hooks/useBalance';
import {currencyFormatter} from '../../vendors/currencyFormatter';

import LinearGradient from 'react-native-linear-gradient';

import {Container, Title, Balance} from './styles';

import {theme} from '../../styles/Theme';

const BalanceLabel = () => {
  const [currentBalance] = useBalance(0);

  return (
    <Container>
      <Title>Saldo Atual</Title>
      <LinearGradient
        colors={[theme.colors.violet, theme.colors.blue]}
        style={{borderRadius: 10}}>
        <Balance>{currencyFormatter(currentBalance)}</Balance>
      </LinearGradient>
    </Container>
  );
};

export default BalanceLabel;
