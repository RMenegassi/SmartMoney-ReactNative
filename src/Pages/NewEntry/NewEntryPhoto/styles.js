import styled from 'styled-components';

export const Conainer = styled.View``;

export const PhotoModal = styled.Modal``;

export const Button = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.asphalt};
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 150px;
  margin: 10px 20px;
`;

export const ImageBG = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const ContainerButton = styled.View`
  flex: 0;
  flex-direction: row;
  justify-content: space-between;

  position: absolute;
  bottom: 25px;
  width: 100%;
  padding: 0px 50px;
`;

export const ButtonAction = styled.TouchableOpacity``;
