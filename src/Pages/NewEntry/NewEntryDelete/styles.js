import styled from 'styled-components';

export const Botao = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.red};
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 150px;
  margin: 10px 20px;
`;
