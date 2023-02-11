import styled from 'styled-components';

export const CategoryModal = styled.Modal``;

export const ContainerModal = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
`;

export const ButtonItem = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.asphalt};
  border-radius: 15px;
  margin: 10px 20px;
  padding: 20px;
`;

export const TextModal = styled.Text`
  text-align: center;
  color: ${props => props.color};
  font-size: 28px;
`;
