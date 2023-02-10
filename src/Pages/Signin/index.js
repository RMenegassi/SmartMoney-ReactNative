import {Image} from 'react-native';
import React, {useState} from 'react';

import {
  Container,
  InputText,
  BotaoEntrar,
  TextoEntrar,
  BotaoSignUp,
  TextoSignUp,
} from './styles';

import logo from '../../assets/logo-white.png';

import {signIn as login} from '../../services/Auth';
import {isInitialized} from '../../services/Welcome';

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
      <BotaoEntrar onPress={onSubmit}>
        <TextoEntrar>{loading ? 'Carregando...' : 'Entrar'}</TextoEntrar>
      </BotaoEntrar>
      <BotaoSignUp
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <TextoSignUp>Criar uma conta</TextoSignUp>
      </BotaoSignUp>
    </Container>
  );
};

export default SignIn;
