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

import {signUp as register} from '../../services/Auth';

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
      <BotaoEntrar onPress={onSubmit}>
        <TextoEntrar>{loading ? 'Carregando...' : 'Criar conta'}</TextoEntrar>
      </BotaoEntrar>
      <BotaoSignUp
        onPress={() => {
          navigation.navigate('SignIn');
        }}>
        <TextoSignUp>Fazer Login</TextoSignUp>
      </BotaoSignUp>
    </Container>
  );
};

export default SignUp;
