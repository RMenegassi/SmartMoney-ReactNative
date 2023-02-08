import React, {useState} from 'react';

import CurrencyInput from 'react-native-currency-input';

import {Container, ContainerInput, Botao, TextoCifrao} from './styles';

const NewEntryInput = ({valor, setValor, positivo, setPositivo}) => {
  return (
    <Container>
      <ContainerInput>
        <Botao onPress={() => setPositivo(!positivo)}>
          <TextoCifrao positivo={positivo}>R$</TextoCifrao>
        </Botao>

        <CurrencyInput
          value={valor}
          onChangeValue={setValor}
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

export default NewEntryInput;
