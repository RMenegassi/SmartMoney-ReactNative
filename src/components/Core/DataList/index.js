import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, BoxBotoes, Botao, Texto} from './styles';

const DataList = ({children, actionLabelText, actionButtonText}) => {
  return (
    <Container>
      {children}

      {(actionLabelText || actionButtonText) && (
        <BoxBotoes>
          {actionLabelText && (
            <Botao>
              <Texto>Últimos 7 dias</Texto>
            </Botao>
          )}

          {actionButtonText && (
            <Botao>
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
