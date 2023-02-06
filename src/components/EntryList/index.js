import React from 'react';

import EntryListList from './EntryListList';
import DataList from '../Core/DataList';

import {Title} from './styles';

const EntryList = ({dados}) => {
  return (
    <DataList actionLabelText={true} actionButtonText={true}>
      <Title>Últimos Lançamentos</Title>
      <EntryListList dados={dados} />
    </DataList>
  );
};

export default EntryList;
