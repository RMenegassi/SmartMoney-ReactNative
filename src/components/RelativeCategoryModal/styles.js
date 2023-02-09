import styled from 'styled-components';

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
