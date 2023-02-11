import React, {useState} from 'react';

import BalanceLabel from '../../components/BalanceLabel';
import RelativeDaysModal from '../../components/RelativeDaysModal';
import RelativeCategoryModal from '../../components/RelativeCategoryModal';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

import {
  Container,
  ContainerContent,
  ButtonContainer,
  Button,
  Text,
} from './styles';

const Report = ({navigation}) => {
  const [daysModalVisible, setDaysModalVisible] = useState(false);
  const [relativeDays, setRelativeDays] = useState(7);

  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [category, setCategory] = useState({
    id: null,
    name: 'Todas Categorias',
  });

  return (
    <Container>
      <ContainerContent>
        <BalanceLabel />
        <ButtonContainer>
          <Button onPress={() => setCategoryModalVisible(true)}>
            <Text>{category.name}</Text>
          </Button>
          <Button onPress={() => setDaysModalVisible(true)}>
            <Text>Últimos {relativeDays} dias</Text>
          </Button>
        </ButtonContainer>
        <RelativeDaysModal
          isVisible={daysModalVisible}
          setVisible={setDaysModalVisible}
          onConfirm={setRelativeDays}
        />
        <RelativeCategoryModal
          isVisible={categoryModalVisible}
          chooseItem={categ => {
            setCategory(categ);
            setCategoryModalVisible(false);
          }}
          setVisible={setCategoryModalVisible}
        />
        <EntrySummary days={relativeDays} />
        <EntryList days={relativeDays} category={category} />
      </ContainerContent>
      <ActionFooter>
        <ActionPrimaryButton
          title="Fechar"
          onPress={() => navigation.navigate('Main')}
        />
      </ActionFooter>
    </Container>
  );
};

export default Report;
