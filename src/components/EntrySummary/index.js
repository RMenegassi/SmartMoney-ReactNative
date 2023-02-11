import React from 'react';

import useBalanceSumByCategory from '../../hooks/useBalanceSumByCategory';

import EntrySummaryList from './EntrySummaryList';
import EntrySummaryGraph from './EntrySummaryGraph';
import DataList from '../Core/DataList';

import {Title, Content} from './styles';

const EntrySummary = ({days = 7, onPressActionButton, isMain}) => {
  const [balanceSum] = useBalanceSumByCategory(days);
  //console.log('balanceSum :: ', balanceSum);
  //console.log('days ', days);

  return (
    <DataList
      isMain={isMain}
      actionLabelText={days}
      actionButtonText={true}
      onPressActionButton={onPressActionButton}>
      <Title>Categorias</Title>
      <Content>
        <EntrySummaryGraph data={balanceSum} />
        <EntrySummaryList data={balanceSum} />
      </Content>
    </DataList>
  );
};

export default EntrySummary;
