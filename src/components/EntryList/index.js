import React from 'react';

import useEntries from '../../hooks/useEntries';

import EntryListScroll from './EntryListScroll';
import DataList from '../Core/DataList';

import {Title} from './styles';

const EntryList = ({days = 7, category, onPressActionButton, isMain}) => {
  const [entries] = useEntries(days, category);

  return (
    <DataList
      isMain={isMain}
      actionLabelText={days}
      actionButtonText={true}
      onPressActionButton={onPressActionButton}>
      <Title>Últimos Lançamentos</Title>
      <EntryListScroll data={entries} />
    </DataList>
  );
};

export default EntryList;
