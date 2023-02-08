import styled from 'styled-components';

export const Container = styled.View`
  min-width: 300px;
`;

export const Botao = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.asphalt};
  border-radius: 15px;
  margin: 10px 25px;
  padding: 10px 20px;
`;

export const Texto = styled.Text`
  text-align: center;
  color: white;
  font-size: 28px;
`;

export const ContainerModal = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
`;

export const BotaoItem = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.asphalt};
  border-radius: 15px;
  margin: 10px 20px;
  padding: 20px;
`;

export const TextoModal = styled.Text`
  text-align: center;
  color: ${props => props.color};
  font-size: 28px;
`;

export const BotaoFechar = styled.TouchableOpacity`
  align-self: center;
  background-color: white;
  margin: 10px 20px;
  padding: 10px;
`;

export const TextoFechar = styled.Text`
  text-align: center;
`;
