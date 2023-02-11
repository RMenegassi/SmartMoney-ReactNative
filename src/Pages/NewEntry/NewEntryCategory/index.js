import React, {useState} from 'react';

import RelativeCategoryModal from '../../../components/RelativeCategoryModal';

import {Container, Button, Text} from './styles';

const NewEntyrCategory = ({category, setCategory, positive}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const chooseItem = name => {
    setCategory(name);
    setModalVisible(!modalVisible);
  };

  return (
    <Container>
      <Button onPress={() => setModalVisible(!modalVisible)}>
        <Text>{category.name}</Text>
      </Button>

      <RelativeCategoryModal
        isVisible={modalVisible}
        type={positive}
        chooseItem={chooseItem}
        setVisible={setModalVisible}
      />
    </Container>
  );
};

export default NewEntyrCategory;
