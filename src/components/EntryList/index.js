import React from 'react';

import EntryListList from './EntryListList';
import DataList from '../Core/DataList';

import {Title} from './styles';
import useEntries from '../../hooks/useEntries';

const EntryList = ({days = 7, category, onPressActionButton, isMain}) => {
  const [entries] = useEntries(days, category);

  return (
    <DataList
      isMain={isMain}
      actionLabelText={days}
      actionButtonText={true}
      onPressActionButton={onPressActionButton}>
      <Title>Últimos Lançamentos</Title>
      <EntryListList dados={entries} />
    </DataList>
  );
};

export default EntryList;
