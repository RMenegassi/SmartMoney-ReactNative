import {FlatList} from 'react-native';
import React from 'react';

import {Container, Title, Texto} from './styles';

const EntryList = () => {
  const dados = [
    {id: 1, local: 'padaria 1', valor: 200},
    {id: 2, local: 'supermercado 2', valor: 500},
    {id: 3, local: 'hamburgueria 1', valor: 100},
    {id: 4, local: 'pizzaria 2', valor: 250},
  ];

  return (
    <Container>
      <Title>Últimos Lançamentos</Title>
      <FlatList
        data={dados}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Texto>
            {item.local} - R${item.valor}
          </Texto>
        )}
      />
    </Container>
  );
};

export default EntryList;
