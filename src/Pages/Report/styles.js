import styled from 'styled-components';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
`;

export const ContainerContent = styled.View`
  flex: 1;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 20px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 30px;
  border: 1px solid gray;
  border-radius: 150px;
`;

export const Text = styled.Text`
  color: gray;
`;
