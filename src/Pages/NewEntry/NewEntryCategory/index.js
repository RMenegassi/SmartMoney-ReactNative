import React, {useState} from 'react';
import {Modal, FlatList} from 'react-native';
import ActionFooter, {
  ActionPrimaryButton,
} from '../../../components/Core/ActionFooter';

import useCategories from '../../../hooks/useCategories';

import {
  Container,
  Botao,
  Texto,
  ContainerModal,
  BotaoItem,
  TextoModal,
  BotaoFechar,
  TextoFechar,
} from './styles';

const NewEntyrCategory = ({categoria, setCategoria, positivo}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [allCategories] = useCategories(positivo);

  const chooseItem = name => {
    setCategoria(name);
    setModalVisible(!modalVisible);
  };

  return (
    <Container>
      <Botao onPress={() => setModalVisible(!modalVisible)}>
        <Texto>{categoria}</Texto>
      </Botao>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <ContainerModal>
          <FlatList
            data={allCategories}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <BotaoItem onPress={() => chooseItem(item.name)}>
                <TextoModal color={item.color}>{item.name}</TextoModal>
              </BotaoItem>
            )}
          />
        </ContainerModal>
        <ActionFooter>
          <ActionPrimaryButton
            title="Fechar"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </ActionFooter>
      </Modal>
    </Container>
  );
};

export default NewEntyrCategory;
