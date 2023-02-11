import styled from 'styled-components';

export const Container = styled.View``;

export const Button = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.green};
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 150px;
  align-self: flex-end;
  margin-top: -25px;
  margin-right: 10px;
`;
