import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const ContainerPrincipal = styled.View`
  flex: 1;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;
