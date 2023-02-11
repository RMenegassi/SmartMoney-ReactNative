import React from 'react';

import {currencyFormatter} from '../../../vendors/currencyFormatter';

import Svg, {Circle} from 'react-native-svg';

import {FlatList} from 'react-native';
import {
  Scroll,
  ContainerList,
  ContainerItens,
  TextCategory,
  TextAmount,
} from './styles';

const EntrySummaryList = ({data}) => {
  return (
    <Scroll>
      <ContainerList>
        <FlatList
          data={data}
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

              <TextCategory>{item.category.name}</TextCategory>
              <TextAmount>{currencyFormatter(item.amount)}</TextAmount>
            </ContainerItens>
          )}
        />
      </ContainerList>
    </Scroll>
  );
};

export default EntrySummaryList;
