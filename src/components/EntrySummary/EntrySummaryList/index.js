import {FlatList} from 'react-native';
import React from 'react';

import Svg, {Circle} from 'react-native-svg';

import {
  Scroll,
  ContainerLista,
  ContainerItens,
  TextoCategory,
  TextoAmount,
} from './styles';

const EntrySummaryList = ({dados}) => {
  return (
    <Scroll>
      <ContainerLista>
        <FlatList
          data={dados}
          keyExtractor={item => item.category.id}
          renderItem={({item}) => (
            <ContainerItens>
              <Svg height={20} width={22}>
                <Circle
                  cx={10}
                  cy={10}
                  r={8}
                  fill={item.category.color}
                  stroke="#233240"
                  strokeWidth={1}
                />
              </Svg>

              <TextoCategory>{item.category.name}</TextoCategory>
              <TextoAmount> R${item.amount.toFixed(2)}</TextoAmount>
            </ContainerItens>
          )}
        />
      </ContainerLista>
    </Scroll>
  );
};

export default EntrySummaryList;
