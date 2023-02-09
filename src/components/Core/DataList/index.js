import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, BoxBotoes, Botao, Texto} from './styles';

const DataList = ({
  children,
  actionLabelText,
  actionButtonText,
  onPressActionButton,
}) => {
  return (
    <Container>
      {children}

      {(actionLabelText || actionButtonText) && (
        <BoxBotoes>
          {actionLabelText && (
            <Botao>
              <Texto>Últimos {actionLabelText} dias</Texto>
            </Botao>
          )}

          {actionButtonText && (
            <Botao onPress={onPressActionButton}>
              <Icon name="add-box" color="white" size={10} />
              <Texto>Ver mais</Texto>
            </Botao>
          )}
        </BoxBotoes>
      )}
    </Container>
  );
};

export default DataList;
