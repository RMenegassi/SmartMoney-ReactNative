import firestore from '@react-native-firebase/firestore';
import moment from '../vendors/moment';
import {Alert} from 'react-native';

export const getEntries = async (days, category) => {
  let querySnapshot;

  if (days > 0) {
    const date = moment().subtract(days, 'days').toDate();

    querySnapshot = await firestore()
      .collection('entries')
      .orderBy('entryAt')
      .startAt(date)
      .get();
  } else {
    querySnapshot = await firestore()
      .collection('entries')
      .orderBy('entryAt')
      .get();
  }

  let entries = querySnapshot.docs.map(documentSnapshot => {
    return {...documentSnapshot.data(), id: documentSnapshot.id};
  });

  if (category && category.id) {
    entries = entries.filter(entry => entry.category.id === category.id);
  }

  console.log('getLastEntries :: loaded ', JSON.stringify(entries));

  return entries;
};

export const addEntry = async entry => {
  let data = {};
  console.log('entry  ', entry);

  try {
    data = {
      entryAt: entry.entryAt,
      amount: entry.amount,
      description: entry.description || null,
      latitude: entry.latitude,
      longitude: entry.longitude,
      address: entry.address,
      photo: entry.photo || null,
      isInit: entry.isInit || false,
      category: entry.category,
    };

    await firestore().collection('entries').add(data);

    console.log('addEntry :: data: ', JSON.stringify(data));
  } catch (error) {
    console.error('addEntry :: error on save object: ', JSON.stringify(data));
    console.log(error);
    Alert.alert('Erro', 'Houve um erro ao salvar este lançamento.');
  }

  return data;
};

export const updateEntry = async entry => {
  let data = {};
  console.log('entry', entry);

  try {
    data = {
      ...entry,
    };

    await firestore().collection('entries').doc(entry.id).update(data);

    console.log('updateEntry :: data: ', JSON.stringify(data));
  } catch (error) {
    console.error(
      'updateEntry :: error on uptade object: ',
      JSON.stringify(data),
      JSON.stringify(error),
    );
    Alert.alert('Erro', 'Houve um erro ao atualizar este lançamento.');
  }

  return data;
};

export const deleteEntry = async entry => {
  try {
    await firestore().collection('entries').doc(entry.id).delete();
  } catch (error) {
    console.error(
      'updateEntry :: error on delete object: ',
      JSON.stringify(entry),
    );

    console.error('deleteEntry :: error on save delete ', error);

    Alert.alert('Erro', 'Houve um erro ao apagar este lançamento');
  }
};
