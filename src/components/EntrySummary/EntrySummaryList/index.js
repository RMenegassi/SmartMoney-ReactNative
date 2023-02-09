import {FlatList} from 'react-native';
import React from 'react';

import {Scroll, Texto} from './styles';

const EntrySummaryList = ({dados}) => {
  return (
    <Scroll>
      <FlatList
        data={dados}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Texto>
            {item.category.name} - R${item.amount}
          </Texto>
        )}
      />
    </Scroll>
  );
};

export default EntrySummaryList;
