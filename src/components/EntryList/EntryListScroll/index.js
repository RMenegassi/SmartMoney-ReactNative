import React from 'react';

import {useNavigation} from '@react-navigation/native';

import EntryListItem from './EntryListItem';

import {FlatList} from 'react-native';
import {Scroll, Button} from './styles';

const EntryListList = ({data}) => {
  const navigation = useNavigation();

  return (
    <Scroll>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Button onPress={() => navigation.navigate('NewEntry', {item})}>
            <EntryListItem
              entry={item}
              isFirstItem={index === 0}
              isLastItem={index === data.length - 1}
            />
          </Button>
        )}
      />
    </Scroll>
  );
};

export default EntryListList;
