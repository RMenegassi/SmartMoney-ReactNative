import React from 'react';

import Svg, {Circle, Rect} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  BoxDados,
  BoxPrincipal,
  TextoPrincipal,
  BoxSecundario,
  TextoSecundario,
} from './styles';

const EntryListItem = ({entry, isFirstItem, isLastItem}) => {
  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletLineHeight = isLastItem ? 30 : 50;
  const showBulletLine = !(isFirstItem && isLastItem);

  return (
    <Container>
      <Svg height={50} width={30}>
        {showBulletLine && (
          <Rect
            x={8.5}
            y={bulletLineY}
            width={1.5}
            height={bulletLineHeight}
            fill="white"
          />
        )}
        <Circle
          cx={9}
          cy={25}
          r={8}
          fill={entry.category.color}
          stroke="#233240"
          strokeWidth={1.5}
        />
      </Svg>
      <BoxDados>
        <BoxPrincipal>
          <TextoPrincipal>{entry.category.name}</TextoPrincipal>
          <TextoPrincipal>{entry.amount.toFixed(2)}</TextoPrincipal>
        </BoxPrincipal>
        <BoxSecundario>
          <Icon name="access-time" size={13} color="gray" />
          <TextoSecundario>EntryAt</TextoSecundario>
          <Icon name="location-on" size={13} color="gray" />
          <TextoSecundario>Address</TextoSecundario>
        </BoxSecundario>
      </BoxDados>
    </Container>
  );
};

export default EntryListItem;
