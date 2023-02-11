import React from 'react';

import useCategories from '../../hooks/useCategories';

import ActionFooter, {ActionPrimaryButton} from '../Core/ActionFooter';

import {FlatList} from 'react-native';
import {CategoryModal, ContainerModal, ButtonItem, TextModal} from './styles';

const RelativeCategoryModal = ({isVisible, type, chooseItem, setVisible}) => {
  const [Categories] = useCategories(type);

  return (
    <CategoryModal
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
            <ButtonItem onPress={() => chooseItem(item)}>
              <TextModal color={item.color}>{item.name}</TextModal>
            </ButtonItem>
          )}
        />
      </ContainerModal>
      <ActionFooter>
        <ActionPrimaryButton
          title="Fechar"
          onPress={() => setVisible(!isVisible)}
        />
      </ActionFooter>
    </CategoryModal>
  );
};

export default RelativeCategoryModal;
