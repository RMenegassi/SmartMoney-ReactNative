import {Image} from 'react-native';
import React, {useState} from 'react';

import Logo from '../../assets/logo-white.png';
import {addEntry} from '../../services/Entries';

import {Container, ImageContainer} from './styles';

import useCategories from '../../hooks/useCategories';

import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

import WelcomeMessage from './WelcomeMessage';
import WelcomeBalanceInput from './WelcomeBalanceInput';

const Welcome = ({navigation}) => {
  const [value, setValue] = useState(0);
  const [positive, setPositive] = useState(true);
  const [initCategories] = useCategories('init');

  const onSavePress = () => {
    addEntry({
      amount: positive ? value : value * -1,
      category: initCategories,
      entryAt: new Date(),
      latitude: null,
      longitude: null,
      address: null,
      photo: null,
    });

    navigation.navigate('Main');
  };

  return (
    <Container>
      <ImageContainer>
        <Image source={Logo} />
      </ImageContainer>
      <WelcomeMessage />
      <WelcomeBalanceInput
        value={value}
        setValue={setValue}
        positive={positive}
        setPositive={setPositive}
      />
      <ActionFooter>
        <ActionPrimaryButton title="Continuar" onPress={onSavePress} />
      </ActionFooter>
    </Container>
  );
};

export default Welcome;
