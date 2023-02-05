import firestore from '@react-native-firebase/firestore';

export const getInitCategories = async () => {
  const querySnapshot = await firestore()
    .collection('categories')
    .where('isInit', '==', true)
    .get();

  return {...querySnapshot.docs[0].data(), id: querySnapshot.docs[0].id};
};

export const getAllCategories = async () => {
  const querySnapshot = await firestore()
    .collection('categories')
    .orderBy('order')
    .get();

  const allCategories = querySnapshot.docs.map(documentSnapshot => {
    return {
      ...documentSnapshot.data(),
      id: documentSnapshot.id,
    };
  });

  return allCategories;
};

export const getDebitCategories = async () => {
  const querySnapshot = await firestore()
    .collection('categories')
    .where('isDebit', '==', true)
    .where('isInit', '==', false)
    .orderBy('order')
    .get();

  const debitCategories = querySnapshot.docs.map(documentSnapshot => {
    return {
      ...documentSnapshot.data(),
      id: documentSnapshot.id,
    };
  });

  return debitCategories;
};

export const getCreditCategories = async () => {
  const querySnapshot = await firestore()
    .collection('categories')
    .where('isCredit', '==', true)
    .where('isInit', '==', false)
    .orderBy('order')
    .get();

  const creditCategories = querySnapshot.docs.map(documentSnapshot => {
    return {
      ...documentSnapshot.data(),
      id: documentSnapshot.id,
    };
  });

  return creditCategories;
};
