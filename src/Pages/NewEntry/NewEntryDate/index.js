import {View} from 'react-native';
import React, {useState} from 'react';

import {Botao} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const NewEntryDate = ({setDataEntry}) => {
  const [visible, setVisible] = useState(false);

  const confirmDate = date => {
    setDataEntry(date);
    setVisible(false);
  };

  return (
    <View>
      <Botao onPress={() => setVisible(true)}>
        <Icon name="today" size={30} color="white" />
      </Botao>

      <DateTimePickerModal
        isVisible={visible}
        mode="date"
        onConfirm={confirmDate}
        onCancel={() => setVisible(false)}
      />
    </View>
  );
};

export default NewEntryDate;
