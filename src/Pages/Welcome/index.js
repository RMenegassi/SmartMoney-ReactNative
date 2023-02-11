import React, {useState} from 'react';

import useCategories from '../../hooks/useCategories';
import {setInitialized} from '../../services/Welcome';
import {addEntry} from '../../services/Entries';

import WelcomeMessage from './WelcomeMessage';
import WelcomeBalanceInput from './WelcomeBalanceInput';
import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

import {Image} from 'react-native';
import {Container, ImageContainer} from './styles';

import Logo from '../../assets/logo-white.png';

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
    setInitialized();

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
