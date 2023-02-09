import {FlatList} from 'react-native';
import React from 'react';

import ActionFooter, {ActionPrimaryButton} from '../Core/ActionFooter';

import {Container, DaysModal, Botao, Texto} from './styles';

const RelativeDaysModal = ({isVisible, setVisible, onConfirm}) => {
  const relativeDays = [1, 3, 7, 15, 21, 30, 45, 60, 90, 180, 365];

  return (
    <DaysModal animationType="slide" transparent={false} visible={isVisible}>
      <Container>
        <FlatList
          data={relativeDays}
          keyExtractor={item => item.toString()}
          renderItem={({item}) => (
            <Botao
              onPress={() => {
                onConfirm(item);
                setVisible(false);
              }}>
              <Texto>{`${item} dias`}</Texto>
            </Botao>
          )}
        />
      </Container>
      <ActionFooter>
        <ActionPrimaryButton title="Fechar" onPress={() => setVisible(false)} />
      </ActionFooter>
    </DaysModal>
  );
};

export default RelativeDaysModal;
