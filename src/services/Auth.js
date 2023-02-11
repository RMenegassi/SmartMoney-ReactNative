import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

import {Alert} from 'react-native';

export const isLogged = async () => {
  const userAuth = await AsyncStorage.getItem('userAuth');

  return userAuth !== null;
};

export const setUserAuth = async uid => {
  await AsyncStorage.setItem('userAuth', uid);
};

export const getUserAuth = async uid => {
  const userAuth = await AsyncStorage.getItem('userAuth');
  return userAuth;
};

export const cleanUserAuth = async () => {
  await AsyncStorage.removeItem('userAuth');
};

export const signUp = async data => {
  const {email, password, name} = data;

  try {
    const userInfos = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    setUserAuth(userInfos.user.uid);

    await firestore().collection('users').doc(userInfos.user.uid).set({name});
    return {registerSuccess: true};
  } catch (e) {
    Alert.alert('Erro ao Criar um Usuário', e.message);
    return {registerSuccess: false};
  }
};

export const signIn = async data => {
  const {email, password} = data;

  try {
    const userInfos = await auth().signInWithEmailAndPassword(email, password);

    setUserAuth(userInfos.user.uid);

    return {loginSuccess: true};
  } catch (e) {
    Alert.alert('Erro ao Tentar Entrar ', e.message);
    return {loginSuccess: false};
  }
};
