import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {Container, Button} from './styles';

const NewEntryDate = ({setDataEntry}) => {
  const [visible, setVisible] = useState(false);

  const confirmDate = date => {
    setDataEntry(date);
    setVisible(false);
  };

  return (
    <Container>
      <Button onPress={() => setVisible(true)}>
        <Icon name="today" size={30} color="white" />
      </Button>

      <DateTimePickerModal
        isVisible={visible}
        mode="date"
        onConfirm={confirmDate}
        onCancel={() => setVisible(false)}
      />
    </Container>
  );
};

export default NewEntryDate;
