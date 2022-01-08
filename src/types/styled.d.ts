import 'styled-components';
import { TypographyProps } from 'styled-typography';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundSecondary: string;
      primary: string;
      secondary: string;
      tertiary: string;
      white: string;
      black: string;
    };
    typography: Partial<TypographyProps>;
    breakpoints: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
  }
}
