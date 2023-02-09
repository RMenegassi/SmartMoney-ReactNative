import React from 'react';

import CurrencyInput from 'react-native-currency-input';

import {Container, ContainerInput, Botao, TextoCifrao} from './styles';

const InputMoney = ({value, setValue, positive, setPositive}) => {
  return (
    <Container>
      <ContainerInput>
        <Botao onPress={setPositive ? () => setPositive(!positive) : () => {}}>
          <TextoCifrao positivo={positive}>R$</TextoCifrao>
        </Botao>

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
