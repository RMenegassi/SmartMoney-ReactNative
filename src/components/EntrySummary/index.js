import React from 'react';

import EntrySummaryList from './EntrySummaryList';
import EntrySummaryGraph from './EntrySummaryGraph';
import DataList from '../Core/DataList';

import {Title, Content} from './styles';

const EntrySummary = ({days, dados, onPressActionButton}) => {
  return (
    <DataList
      actionLabelText={7}
      actionButtonText={true}
      onPressActionButton={onPressActionButton}>
      <Title>Categorias</Title>
      <Content>
        <EntrySummaryGraph />
        <EntrySummaryList dados={dados} />
      </Content>
    </DataList>
  );
};

export default EntrySummary;
