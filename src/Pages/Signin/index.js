import React, {useState} from 'react';

import {signIn as login} from '../../services/Auth';
import {isInitialized} from '../../services/Welcome';

import {Image} from 'react-native';
import {
  Container,
  InputText,
  ButtonLogin,
  TextLogin,
  ButtonSignUp,
  TextSignUp,
} from './styles';

import logo from '../../assets/logo-white.png';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (loading === false) {
      setLoading(true);

      const {loginSuccess} = await login({
        email,
        password,
      });

      if (loginSuccess === true) {
        const initiated = await isInitialized();
        navigation.reset({
          index: 0,
          key: null,
          routes: [{name: initiated ? 'Main' : 'Welcome'}],
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
        placeholder="Sua senha"
        placeholderTextColor="#555459"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <ButtonLogin onPress={onSubmit}>
        <TextLogin>{loading ? 'Carregando...' : 'Entrar'}</TextLogin>
      </ButtonLogin>
      <ButtonSignUp
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <TextSignUp>Criar uma conta</TextSignUp>
      </ButtonSignUp>
    </Container>
  );
};

export default SignIn;
