import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, BoxButtons, Button, Text} from './styles';

const DataList = ({
  children,
  actionLabelText,
  actionButtonText,
  onPressActionButton,
  isMain,
}) => {
  return (
    <Container>
      {children}

      {(actionLabelText || actionButtonText) && (
        <BoxButtons>
          {actionLabelText && (
            <Button>
              <Text>Últimos {actionLabelText} dias</Text>
            </Button>
          )}

          {actionButtonText && isMain && (
            <Button onPress={onPressActionButton}>
              <Icon name="add-box" color="white" size={10} />
              <Text>Ver mais</Text>
            </Button>
          )}
        </BoxButtons>
      )}
    </Container>
  );
};

export default DataList;
