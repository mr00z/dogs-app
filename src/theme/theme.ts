import { DefaultTheme } from 'styled-components';

import { BACKGROUND, BACKGROUND_SECONDARY, BLACK, PRIMARY, SECONDARY, TERTIARY, WHITE } from './colors';
import { typography } from './typography';

export const theme: DefaultTheme = {
  colors: {
    background: BACKGROUND,
    backgroundSecondary: BACKGROUND_SECONDARY,
    primary: PRIMARY,
    secondary: SECONDARY,
    tertiary: TERTIARY,
    black: BLACK,
    white: WHITE,
  },
  typography,
};
