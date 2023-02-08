import {View, Platform, PermissionsAndroid, Modal} from 'react-native';
import React, {useState} from 'react';

import {launchCamera} from 'react-native-image-picker';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Botao,
  ImageBG,
  ContainerBotoes,
  BotaoDelete,
  BotaoCheck,
} from './styles';

const NewEntryPhoto = ({photo, setPhoto}) => {
  const [visible, setVisible] = useState(false);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else {
      return true;
    }
  };

  const captureImage = async () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        console.log('Response = ', response);

        setPhoto(response.assets[0].uri);
      });
    }
  };

  const onDeletePress = () => {
    setPhoto(null);
    setVisible(false);
  };

  return (
    <View>
      <Botao onPress={photo ? () => setVisible(true) : () => captureImage()}>
        <Icon name="photo-camera" size={30} color="white" />
      </Botao>
      <Modal animationType="slide" transparent={false} visible={visible}>
        <ImageBG source={{uri: photo}} resizeMode="cover" />
        <ContainerBotoes>
          <BotaoDelete onPress={onDeletePress}>
            <Icon name="delete" size={50} color="white" />
          </BotaoDelete>
          <BotaoCheck onPress={() => setVisible(false)}>
            <Icon name="check" size={50} color="white" />
          </BotaoCheck>
        </ContainerBotoes>
      </Modal>
    </View>
  );
};

export default NewEntryPhoto;
