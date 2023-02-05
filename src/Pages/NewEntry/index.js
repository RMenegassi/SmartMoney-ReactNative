import React, {useState} from 'react';

import BalanceLabel from '../../components/BalanceLabel';

import {addEntry} from '../../services/Entries';

import {Container, Input, Botao} from './styles';

const NewEntry = ({route}) => {
  const currentBalance = route.params;

  const [valor, setValor] = useState();
  const [categoria, setCategoria] = useState('');

  return (
    <Container>
      <BalanceLabel currentBalance={currentBalance} />
      <Input value={valor} onChangeText={numero => setValor(numero)} />
      <Input value={categoria} onChangeText={texto => setCategoria(texto)} />
      <Botao title="GPS" />
      <Botao title="CAMERA" />
      <Botao
        title="ADICIONAR"
        disabled={valor && categoria ? false : true}
        onPress={() =>
          addEntry({
            valor: valor,
            category: categoria,
            id: valor,
            local: `teste${valor}`,
          })
        }
      />
      <Botao title="CANCELAR" />
    </Container>
  );
};

export default NewEntry;
