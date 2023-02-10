import React from 'react';

import Svg, {Circle, Rect} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import moment from '../../../../vendors/moment';

import {currencyFormatter} from '../../../../vendors/currencyFormatter';
import {dateFormatter} from '../../../../vendors/dateFormatter';

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
          <TextoPrincipal>{currencyFormatter(entry.amount)}</TextoPrincipal>
        </BoxPrincipal>
        <BoxSecundario>
          {entry.entryAt && (
            <>
              <Icon name="access-time" size={13} color="gray" />
              <TextoSecundario>
                {dateFormatter(entry.dateString)}
              </TextoSecundario>
            </>
          )}
          {entry.address && (
            <>
              <Icon name="location-on" size={13} color="gray" />
              <TextoSecundario>
                {entry.address.length > 25
                  ? entry.address.substring(0, 25 - 3) + '...'
                  : entry.address}
              </TextoSecundario>
            </>
          )}
        </BoxSecundario>
      </BoxDados>
    </Container>
  );
};

export default EntryListItem;
