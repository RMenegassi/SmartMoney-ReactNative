import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {useBalance} from '../../hooks/useBalance';
import {Container, Title, Saldo} from './styles';
import {theme} from '../../styles/Theme';

const BalanceLabel = () => {
  const [currentBalance] = useBalance(0);

  return (
    <Container>
      <Title>Saldo Atual</Title>
      <LinearGradient
        colors={[theme.colors.violet, theme.colors.blue]}
        style={{borderRadius: 10}}>
        <Saldo>R$ {currentBalance}</Saldo>
      </LinearGradient>
    </Container>
  );
};

export default BalanceLabel;
