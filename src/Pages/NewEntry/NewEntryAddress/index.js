import {View, Alert} from 'react-native';
import React from 'react';

import {Botao} from './styles';

import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

import Icon from 'react-native-vector-icons/MaterialIcons';

const NewEntryAddress = ({address, onChange}) => {
  const getLocation = (latitude, longitude) => {
    Geocoder.init('AIzaSyD80wweBQIwq1m-Aktn-SHfhvyZaQns2Pg');

    Geocoder.from({latitude, longitude})
      .then(json => {
        const formattedAddress = json.results[0].formatted_address;
        Alert.alert('Localização', formattedAddress, [
          {text: 'Cancelar', onPress: () => {}, style: 'cancel'},
          {
            text: 'Confirmar',
            onPress: () => {
              onChange({
                latitude: latitude,
                longitude: longitude,
                address: formattedAddress,
              });
            },
          },
        ]);
      })
      .catch(error => {
        console.error(
          'NewEntryAddress :: erro ao recuperar a localização ',
          error,
        );
        Alert.alert(
          'Houve um erro ao recuperar sua localização, por favor tenha certeza que autorizou esse aplicativo.',
        );
      });
  };

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;

        getLocation(latitude, longitude);
      },
      error => {
        console.error(
          'NewEntryAddress :: erro ao recuperar as posições ',
          error,
        );
        Alert.alert(
          'Houve um erro ao recuperar sua posição, por favor tenha certeza que autorizou esse aplicativo.',
        );
      },
    );
  };

  const onButtonPress = () => {
    if (address) {
      Alert.alert('Localização', address, [
        {
          text: 'Apagar',
          onPress: () => {
            onChange({latitude: null, longitude: null, address: ''});
          },
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => console.log('Ok pressionado'),
        },
      ]);
    } else {
      getPosition();
    }
  };

  return (
    <View>
      <Botao onPress={onButtonPress}>
        <Icon name="person-pin" size={30} color="white" />
      </Botao>
    </View>
  );
};

export default NewEntryAddress;
