import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {addEntry, updateEntry} from '../../services/Entries';

import BalanceLabel from '../../components/BalanceLabel';
import InputMoney from '../../components/Core/InputMoney';
import NewEntryCategory from './NewEntryCategory';
import NewEntryDate from './NewEntryDate';
import NewEntryAddress from './NewEntryAddress';
import NewEntryPhoto from './NewEntryPhoto';
import NewEntryDelete from './NewEntryDelete';
import ActionFooter, {
  ActionPrimaryButton,
  ActionSecondaryButton,
} from '../../components/Core/ActionFooter';

import {Container, ContainerPrincipal, ContainerButtons} from './styles';

const NewEntry = ({route}) => {
  const navigation = useNavigation();

  const entry = route.params?.item
    ? route.params.item
    : {
        amount: 0,
        category: null,
        entryAt: new Date(),
        latitude: null,
        longitude: null,
        address: null,
        photo: null,
      };

  const [value, setValue] = useState(entry.amount);
  const [category, setCategory] = useState(
    entry.category || {id: null, name: 'Selecione'},
  );
  const [dataEntry, setDataEntry] = useState(entry.entryAt);
  const [latitude, setLatitude] = useState(entry.latitude);
  const [longitude, setLongitude] = useState(entry.longitude);
  const [address, setAddress] = useState(entry.address);
  const [photo, setPhoto] = useState(entry.photo);
  const [positive, setPositive] = useState(entry.amount >= 0);

  const saveEntry = () => {
    const item = {
      amount: positive ? value : value * -1,
      category: category,
      entryAt: dataEntry,
      latitude: latitude,
      longitude: longitude,
      address: address,
      photo: photo,
    };
    if (entry.id) {
      updateEntry({...item, id: entry.id});
    } else {
      addEntry(item);
    }

    navigation.goBack();
  };

  return (
    <Container>
      <ContainerPrincipal>
        <BalanceLabel />
        <InputMoney
          value={value}
          setValue={setValue}
          positive={positive}
          setPositive={setPositive}
        />
        <NewEntryCategory
          category={category}
          setCategory={setCategory}
          positive={positive}
        />
        <ContainerButtons>
          <NewEntryDate value={dataEntry} setDataEntry={setDataEntry} />
          <NewEntryAddress
            address={address}
            onChange={({latitude, longitude, address}) => {
              setLatitude(latitude);
              setLongitude(longitude);
              setAddress(address);
            }}
          />
          <NewEntryPhoto photo={photo} setPhoto={setPhoto} />
          <NewEntryDelete entry={entry} />
        </ContainerButtons>
      </ContainerPrincipal>
      <ActionFooter>
        <ActionPrimaryButton
          title={entry.id ? 'Salvar' : 'Adicionar'}
          disabled={value && category !== 'Selecione' ? false : true}
          onPress={saveEntry}
        />
        <ActionSecondaryButton
          title="Cancelar"
          onPress={() => navigation.goBack()}
        />
      </ActionFooter>
    </Container>
  );
};

export default NewEntry;
