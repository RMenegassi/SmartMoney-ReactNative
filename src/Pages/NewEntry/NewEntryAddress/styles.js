import styled from 'styled-components';

export const Container = styled.View``;

export const Button = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.asphalt};
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 150px;
  margin: 10px 20px;
`;
