import {
  createTheme,
  Palette,
  PaletteColor,
  PaletteColorOptions,
  PaletteOptions,
  ThemeOptions,
} from '@mui/material/styles';

interface NumberedPaletteColorOptions {
  900: string;
  800: string;
  700: string;
  600: string;
  500: string;
  400: string;
  300: string;
  200: string;
  100: string;
}

interface CustomPalette extends Palette {
  primary: PaletteColor & NumberedPaletteColorOptions;
  secondary: PaletteColor & NumberedPaletteColorOptions;
  white: PaletteColor & NumberedPaletteColorOptions;
}

interface CustomPaletteOptions extends PaletteOptions {
  primary: PaletteColorOptions & NumberedPaletteColorOptions;
  secondary: PaletteColorOptions & NumberedPaletteColorOptions;
  white: PaletteColorOptions & NumberedPaletteColorOptions;
}

interface CustomThemeOptions extends ThemeOptions {
  palette?: CustomPaletteOptions;
}

declare module '@mui/material/styles' {
  interface Theme {
    palette: CustomPalette;
    typography: {
      fontFamily: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#B24865',
      800: '#DA5A75',
      700: '#F1899D',
      600: '#FFC1CD',
    },
    secondary: {
      600: '#64A161',
      main: '#89CC86',
      400: '#ACE8A9',
    },
    white: {
      300: '#F3D8DD',
      200: '#FFE4E9',
      main: '#FFFAFB',
    },
  },
  typography: {
    fontFamily: `var('--font-sintony')`,
    button: {
      textTransform: 'none',
    },
  },
} as CustomThemeOptions);

export default theme;
