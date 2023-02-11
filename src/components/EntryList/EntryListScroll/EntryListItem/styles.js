import styled from 'styled-components';

export const Container = styled.View`
  flex-direction: row;
`;

export const BoxEntries = styled.View`
  flex: 1;
  align-self: center;
  margin-top: 7px;
`;

export const BoxPrincipal = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextPrincipal = styled.Text`
  color: white;
`;

export const BoxSecondary = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const TextSecondary = styled.Text`
  color: gray;
  font-size: 13px;
  margin-right: 10px;
`;
