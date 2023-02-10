import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const ContainerContent = styled.View`
  flex: 1;
`;
