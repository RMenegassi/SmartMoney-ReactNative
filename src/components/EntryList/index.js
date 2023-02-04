import {FlatList} from 'react-native';
import React from 'react';

import {Container, Title, Texto} from './styles';

const EntryList = ({dados}) => {
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
