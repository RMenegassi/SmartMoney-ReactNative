import React, {useState} from 'react';

import RelativeCategoryModal from '../../../components/RelativeCategoryModal';

import {Container, Botao, Texto} from './styles';

const NewEntyrCategory = ({categoria, setCategoria, positivo}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const chooseItem = name => {
    setCategoria(name);
    setModalVisible(!modalVisible);
  };

  return (
    <Container>
      <Botao onPress={() => setModalVisible(!modalVisible)}>
        <Texto>{categoria.name}</Texto>
      </Botao>

      <RelativeCategoryModal
        isVisible={modalVisible}
        type={positivo}
        chooseItem={chooseItem}
        setVisible={setModalVisible}
      />
    </Container>
  );
};

export default NewEntyrCategory;
