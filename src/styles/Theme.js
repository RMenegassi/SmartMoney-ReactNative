import React from 'react';

import {ThemeProvider} from 'styled-components';

const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = px => `${round(px / 16)}rem`;

export const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    turquese: '#1abc9c',
    turqueseDark: '#16a085',
    green: '#2ecc71',
    greenDark: '#27ae60',
    blue: '#3498db',
    blueDark: '#2980b9',
    violet: '#9b59b6',
    violetDark: '#8e44ad',
    yellow: '#f1c40f',
    yellowDark: '#f39c12',
    orange: '#e67e22',
    orangeDark: '#d35400',
    red: '#f37272',
    redDark: '#c0392b',
    champagne: '#ecf0f1',
    champagneDark: '#bdc3c7',
    metal: '#95a5a6',
    metalDark: '#7f8c8d',
    asphalt: '#34495e',
    asphaltDark: '#2c3e50',
    carbon: '#555459',
    carbonDark: '#3b3a3e',
    primary: '#3498db',
    secondary: '#2ecc71',
    danger: '#f37272',
    light: '#ecf0f1',
    dark: '#34495e',
    background: '#233240',
  },
  fontFamily: {
    heading: ['IBM Plex Sans', 'sans-serif'].join(','),
    sans: ['Open Sans', 'Arial', 'Helvetica', 'sans-serif'].join(','),
    mono: ['IBM Plex Mono', 'serif'].join(','),
  },
  fontSize: {
    xs: rem(10),
    sm: rem(12),
    md: rem(14),
    base: rem(16),
    lg: rem(18),
    xl: rem(20),
    '2xl': rem(24),
    '3xl': rem(32),
    '4xl': rem(40),
    '5xl': rem(64),
  },
};

export function Theme({children}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
