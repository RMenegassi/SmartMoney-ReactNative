import styled from 'styled-components';

export const DaysModal = styled.Modal``;

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Botao = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.asphalt};

  border-radius: 8px;
  margin: 10px 15px;
  padding: 20px 0;
`;

export const Texto = styled.Text`
  color: white;
  text-align: center;
  font-size: 20px;
`;
