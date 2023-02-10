import React from 'react';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import ActionFooter, {
  ActionSecondaryButton,
} from '../../components/Core/ActionFooter';

import {cleanUserAuth} from '../../services/Auth';

import {Container, ContainerContent} from './styles';

const Main = ({navigation}) => {
  const onLogoutPress = async () => {
    await cleanUserAuth();
    navigation.reset({
      index: 0,
      key: null,
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <Container>
      <ContainerContent>
        <BalancePanel />
        <EntrySummary
          isMain={true}
          onPressActionButton={() => navigation.navigate('Report')}
        />
        <EntryList
          isMain={true}
          onPressActionButton={() => navigation.navigate('Report')}
        />
      </ContainerContent>
      <ActionFooter>
        <ActionSecondaryButton title="Logout" onPress={onLogoutPress} />
      </ActionFooter>
    </Container>
  );
};

export default Main;
