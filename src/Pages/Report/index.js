import React, {useState} from 'react';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import RelativeDaysModal from '../../components/RelativeDaysModal';
import RelativeCategoryModal from '../../components/RelativeCategoryModal';
import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

import {Container, ButtonContainer, Botao, Texto} from './styles';

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
      <BalanceLabel />
      <ButtonContainer>
        <Botao onPress={() => setCategoryModalVisible(true)}>
          <Texto>{category.name}</Texto>
        </Botao>
        <Botao onPress={() => setDaysModalVisible(true)}>
          <Texto>Últimos {relativeDays} dias</Texto>
        </Botao>
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
