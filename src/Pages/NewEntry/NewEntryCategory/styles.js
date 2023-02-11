import styled from 'styled-components';

export const Container = styled.View`
  min-width: 300px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.asphalt};
  border-radius: 15px;
  margin: 10px 25px;
  padding: 10px 20px;
`;

export const Text = styled.Text`
  text-align: center;
  color: white;
  font-size: 28px;
`;
