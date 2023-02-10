import React from 'react';

import EntrySummaryList from './EntrySummaryList';
import EntrySummaryGraph from './EntrySummaryGraph';
import DataList from '../Core/DataList';

import useBalanceSumByCategory from '../../hooks/useBalanceSumByCategory';

import {Title, Content} from './styles';

const EntrySummary = ({days = 7, onPressActionButton}) => {
  const [balanceSum] = useBalanceSumByCategory(days);

  return (
    <DataList
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
