import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  padding: 10px;
`;

export const ImageContainer = styled.View`
  align-items: center;
`;
