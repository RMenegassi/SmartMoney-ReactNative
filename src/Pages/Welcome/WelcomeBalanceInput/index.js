import React from 'react';

import InputMoney from '../../../components/Core/InputMoney';

import {Container, Text} from './styles';

const WelcomeBalanceInput = ({value, setValue, positive, setPositive}) => {
  return (
    <Container>
      <Text>Informe seu saldo</Text>
      <InputMoney
        value={value}
        setValue={setValue}
        positive={positive}
        setPositive={setPositive}
      />
    </Container>
  );
};

export default WelcomeBalanceInput;
