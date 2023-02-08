import {Alert, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {deleteEntry} from '../../../services/Entries';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Botao} from './styles';

const NewEntryDelete = ({entry}) => {
  const navigation = useNavigation();

  const onDelete = () => {
    Alert.alert(
      'Apagar?',
      'Você deseja realmente apagar este lançamento?',
      [
        {text: 'Não', style: 'cancel'},
        {
          texto: 'Sim',
          onPress: () => {
            deleteEntry(entry);
            navigation.goBack();
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View>
      <Botao
        disabled={entry.id ? false : true}
        onPress={onDelete}
        style={{opacity: entry.id ? 1 : 0.2}}>
        <Icon name="delete" size={30} color="white" />
      </Botao>
    </View>
  );
};

export default NewEntryDelete;
