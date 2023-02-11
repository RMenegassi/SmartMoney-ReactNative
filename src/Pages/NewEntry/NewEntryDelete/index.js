import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {deleteEntry} from '../../../services/Entries';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Alert} from 'react-native';
import {Container, Button} from './styles';

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
    <Container>
      <Button
        disabled={entry.id ? false : true}
        onPress={onDelete}
        style={{opacity: entry.id ? 1 : 0.2}}>
        <Icon name="delete" size={30} color="white" />
      </Button>
    </Container>
  );
};

export default NewEntryDelete;
