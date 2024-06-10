// import original module declarations

import { theme } from '@/theme';
import 'styled-components';

// and extend them!
const ITheme = typeof theme

declare module 'styled-components' {

export interface DefaultTheme extends ITheme {}
}