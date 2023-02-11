import React from 'react';

import CurrencyInput from 'react-native-currency-input';

import {Container, ContainerInput, Button, TextButton} from './styles';

const InputMoney = ({value, setValue, positive, setPositive}) => {
  return (
    <Container>
      <ContainerInput>
        <Button onPress={setPositive ? () => setPositive(!positive) : () => {}}>
          <TextButton positivo={positive}>R$</TextButton>
        </Button>

        <CurrencyInput
          value={value}
          onChangeValue={setValue}
          delimiter="."
          separator=","
          precision={2}
          minValue={0}
          style={{
            fontSize: 28,
            color: 'white',
            textAlign: 'right',
            flex: 1,
            marginRight: 10,
          }}
        />
      </ContainerInput>
    </Container>
  );
};

export default InputMoney;
