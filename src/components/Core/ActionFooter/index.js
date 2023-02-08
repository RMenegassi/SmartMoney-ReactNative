import React from 'react';

import {
  Container,
  BotaoPrimary,
  TextoPrimary,
  BotaoSecondary,
  TextoSecondary,
} from './styles';

const ActionFooter = ({children}) => {
  return <Container>{children}</Container>;
};

export const ActionPrimaryButton = ({title, onPress}) => {
  return (
    <BotaoPrimary onPress={onPress}>
      <TextoPrimary>{title}</TextoPrimary>
    </BotaoPrimary>
  );
};

export const ActionSecondaryButton = ({title, onPress}) => {
  return (
    <BotaoSecondary onPress={onPress}>
      <TextoSecondary>{title}</TextoSecondary>
    </BotaoSecondary>
  );
};

export default ActionFooter;
