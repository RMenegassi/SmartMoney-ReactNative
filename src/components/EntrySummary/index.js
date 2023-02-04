import {FlatList} from 'react-native';
import React from 'react';

import {Container, Title, Texto} from './styles';

const EntrySummary = ({dados}) => {
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
