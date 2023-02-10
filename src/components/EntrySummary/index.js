import React from 'react';

import EntrySummaryList from './EntrySummaryList';
import EntrySummaryGraph from './EntrySummaryGraph';
import DataList from '../Core/DataList';

import useBalanceSumByCategory from '../../hooks/useBalanceSumByCategory';

import {Title, Content} from './styles';

const EntrySummary = ({days = 7, onPressActionButton, isMain}) => {
  const [balanceSum] = useBalanceSumByCategory(days);
  console.log('balanceSum :: ', balanceSum);
  console.log('days ', days);

  return (
    <DataList
      isMain={isMain}
      actionLabelText={days}
      actionButtonText={true}
      onPressActionButton={onPressActionButton}>
      <Title>Categorias</Title>
      <Content>
        <EntrySummaryGraph dados={balanceSum} />
        <EntrySummaryList dados={balanceSum} />
      </Content>
    </DataList>
  );
};

export default EntrySummary;
