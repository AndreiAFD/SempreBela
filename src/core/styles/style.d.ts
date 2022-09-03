import 'styled-components';
import {theme} from './theme';

export module 'styled-components/native' {
  type CustomTheme = typeof theme;
  export interface DefaultTheme extends ThemeProps {}
}
