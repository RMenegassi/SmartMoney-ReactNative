import React from 'react';

import {currencyFormatter} from '../../../../vendors/currencyFormatter';

import Svg, {Circle, Rect} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  BoxEntries,
  BoxPrincipal,
  TextPrincipal,
  BoxSecondary,
  TextSecondary,
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
      <BoxEntries>
        <BoxPrincipal>
          <TextPrincipal>{entry.category.name}</TextPrincipal>
          <TextPrincipal>{currencyFormatter(entry.amount)}</TextPrincipal>
        </BoxPrincipal>
        <BoxSecondary>
          {entry.entryAt && (
            <>
              <Icon name="access-time" size={13} color="gray" />
              <TextSecondary>{entry.dateString}</TextSecondary>
            </>
          )}
          {entry.address && (
            <>
              <Icon name="location-on" size={13} color="gray" />
              <TextSecondary>
                {entry.address.length > 25
                  ? entry.address.substring(0, 25 - 3) + '...'
                  : entry.address}
              </TextSecondary>
            </>
          )}
        </BoxSecondary>
      </BoxEntries>
    </Container>
  );
};

export default EntryListItem;
