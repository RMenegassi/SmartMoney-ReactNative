import React, {useState} from 'react';

import {Container, Texto} from './styles';

import InputMoney from '../../../components/Core/InputMoney';

const WelcomeBalanceInput = ({value, setValue, positive, setPositive}) => {
  return (
    <Container>
      <Texto>Informe seu saldo</Texto>
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
