import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import BalanceLabel from '../../components/BalanceLabel';
import NewEntryInput from './NewEntryInput';
import NewEntyrCategory from './NewEntryCategory';
import NewEntryDate from './NewEntryDate';
import NewEntryAddress from './NewEntryAddress';
import NewEntryPhoto from './NewEntryPhoto';
import NewEntryDelete from './NewEntryDelete';

import ActionFooter, {
  ActionPrimaryButton,
  ActionSecondaryButton,
} from '../../components/Core/ActionFooter';

import {addEntry, updateEntry} from '../../services/Entries';

import {
  Container,
  ContainerPrincipal,
  ContainerSecundario,
  ContainerBotoes,
} from './styles';

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

  const [valor, setValor] = useState(entry.amount);
  const [categoria, setCategoria] = useState(
    entry.category || {id: null, name: 'Selecione'},
  );
  const [dataEntry, setDataEntry] = useState(entry.entryAt);
  const [latitude, setLatitude] = useState(entry.latitude);
  const [longitude, setLongitude] = useState(entry.longitude);
  const [endereco, setEndereco] = useState(entry.address);
  const [photo, setPhoto] = useState(entry.photo);
  const [positivo, setPositivo] = useState(entry.amount >= 0);

  const saveEntry = () => {
    const item = {
      amount: positivo ? valor : valor * -1,
      category: categoria,
      entryAt: dataEntry,
      latitude: latitude,
      longitude: longitude,
      address: endereco,
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
        <NewEntryInput
          valor={valor}
          setValor={setValor}
          positivo={positivo}
          setPositivo={setPositivo}
        />
        <NewEntyrCategory
          categoria={categoria}
          setCategoria={setCategoria}
          positivo={positivo}
        />
        <ContainerBotoes>
          <NewEntryDate value={dataEntry} setDataEntry={setDataEntry} />
          <NewEntryAddress
            address={endereco}
            onChange={({latitude, longitude, address}) => {
              setLatitude(latitude);
              setLongitude(longitude);
              setEndereco(address);
            }}
          />
          <NewEntryPhoto photo={photo} setPhoto={setPhoto} />
          <NewEntryDelete entry={entry} />
        </ContainerBotoes>
      </ContainerPrincipal>
      <ContainerSecundario>
        <ActionFooter>
          <ActionPrimaryButton
            title={entry.id ? 'Salvar' : 'Adicionar'}
            disabled={valor && categoria !== 'Selecione' ? false : true}
            onPress={saveEntry}
          />
          <ActionSecondaryButton
            title="Cancelar"
            onPress={() => navigation.goBack()}
          />
        </ActionFooter>
      </ContainerSecundario>
    </Container>
  );
};

export default NewEntry;
