import React from 'react';

import EntryListList from './EntryListList';
import DataList from '../Core/DataList';

import {Title} from './styles';
import useEntries from '../../hooks/useEntries';

const EntryList = ({days = 7, category, onPressActionButton}) => {
  const [entries] = useEntries(days, category);

  return (
    <DataList
      actionLabelText={days}
      actionButtonText={true}
      onPressActionButton={onPressActionButton}>
      <Title>Últimos Lançamentos</Title>
      <EntryListList dados={entries} />
    </DataList>
  );
};

export default EntryList;
