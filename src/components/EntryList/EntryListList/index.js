import {FlatList} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import EntryListItem from './EntryListItem';

import {Scroll, Botao} from './styles';

const EntryListList = ({dados}) => {
  const navigation = useNavigation();

  return (
    <Scroll>
      <FlatList
        data={dados}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Botao
            onPress={() =>
              navigation.navigate('NewEntry', {local: item.address})
            }>
            <EntryListItem
              entry={item}
              isFirstItem={index === 0}
              isLastItem={index === dados.length - 1}
            />
          </Botao>
        )}
      />
    </Scroll>
  );
};

export default EntryListList;
