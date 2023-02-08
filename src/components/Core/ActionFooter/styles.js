import styled from 'styled-components';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  flex-direction: row;
  padding: 20px 0px;
  justify-content: center;
`;

export const BotaoPrimary = styled.TouchableOpacity`
  border: 1px solid ${({theme}) => theme.colors.green};
  border-radius: 150px;
  padding: 10px 20px;
`;

export const TextoPrimary = styled.Text`
  color: ${({theme}) => theme.colors.green};
  text-align: center;
`;

export const BotaoSecondary = styled.TouchableOpacity`
  padding: 10px 20px;
`;

export const TextoSecondary = styled.Text`
  color: white;
  text-align: center;
`;
