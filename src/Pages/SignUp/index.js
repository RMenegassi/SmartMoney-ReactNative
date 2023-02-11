import React, {useState} from 'react';

import {signUp as register} from '../../services/Auth';

import {Image} from 'react-native';
import {
  Container,
  InputText,
  ButtonCreate,
  TextCreate,
  ButtonSignUp,
  TextSignUp,
} from './styles';

import logo from '../../assets/logo-white.png';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (loading === false) {
      setLoading(true);
      const {registerSuccess} = await register({
        email,
        password,
        name,
      });

      if (registerSuccess === true) {
        navigation.reset({
          index: 0,
          key: null,
          routes: [{name: 'Welcome'}],
        });
      } else {
        setLoading(false);
      }
    }
  };

  return (
    <Container behavior="padding">
      <Image source={logo} />
      <InputText
        placeholder="Seu e-mail"
        placeholderTextColor="#555459"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <InputText
        placeholder="Seu nome"
        placeholderTextColor="#555459"
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={text => setName(text)}
      />
      <InputText
        placeholder="Sua senha"
        placeholderTextColor="#555459"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <ButtonCreate onPress={onSubmit}>
        <TextCreate>{loading ? 'Carregando...' : 'Criar conta'}</TextCreate>
      </ButtonCreate>
      <ButtonSignUp
        onPress={() => {
          navigation.navigate('SignIn');
        }}>
        <TextSignUp>Fazer Login</TextSignUp>
      </ButtonSignUp>
    </Container>
  );
};

export default SignUp;
