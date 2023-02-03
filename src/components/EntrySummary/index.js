import {FlatList} from 'react-native';
import React from 'react';

import {Container, Title, Texto} from './styles';

const EntrySummary = () => {
  const dados = [
    {id: 1, category: 'Alimentos', valor: 200},
    {id: 2, category: 'Aluguel', valor: 500},
    {id: 3, category: 'Emprestimo', valor: 100},
    {id: 4, category: 'Outros', valor: 250},
  ];

  return (
    <Container>
      <Title>Categorias</Title>
      <FlatList
        data={dados}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Texto>
            {item.category} - R${item.valor}
          </Texto>
        )}
      />
    </Container>
  );
};

export default EntrySummary;
