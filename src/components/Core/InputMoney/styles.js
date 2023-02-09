import styled from 'styled-components';

import {theme} from '../../../styles/Theme';

export const Container = styled.View`
  align-items: center;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  background-color: ${theme.colors.asphalt};
  border-radius: 15px;
  align-items: center;
  margin: 10px 25px;
  padding: 5px 20px;
`;

export const Botao = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const TextoCifrao = styled.Text`
  color: ${props => (props.positivo ? theme.colors.green : theme.colors.red)};
  font-weight: 500;
  font-size: 25px;
  text-align: center;
`;
