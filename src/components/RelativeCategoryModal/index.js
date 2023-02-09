import {Modal, FlatList} from 'react-native';
import React from 'react';
import useCategories from '../../hooks/useCategories';

import ActionFooter, {ActionPrimaryButton} from '../Core/ActionFooter';

import {ContainerModal, BotaoItem, TextoModal} from './styles';

const RelativeCategoryModal = ({isVisible, type, chooseItem, setVisible}) => {
  const [Categories] = useCategories(type);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
      onRequestClose={() => {
        setVisible(!isVisible);
      }}>
      <ContainerModal>
        <FlatList
          data={Categories}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <BotaoItem onPress={() => chooseItem(item)}>
              <TextoModal color={item.color}>{item.name}</TextoModal>
            </BotaoItem>
          )}
        />
      </ContainerModal>
      <ActionFooter>
        <ActionPrimaryButton
          title="Fechar"
          onPress={() => setVisible(!isVisible)}
        />
      </ActionFooter>
    </Modal>
  );
};

export default RelativeCategoryModal;
