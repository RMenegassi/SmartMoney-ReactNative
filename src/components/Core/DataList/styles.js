import styled from 'styled-components';

export const Container = styled.View`
  padding: 5px 10px 5px 10px;
  border: 1px ${({theme}) => theme.colors.carbon};
  border-radius: 10px;
  margin: 10px 5px 0px 5px;
  background-color: ${({theme}) => theme.colors.asphalt};
`;

export const BoxButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
  margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: 12px;
  color: white;
`;
