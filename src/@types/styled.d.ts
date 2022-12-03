import 'styled-components'
import { defaultTheme } from '../globals/styles/DefaultTheme'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}