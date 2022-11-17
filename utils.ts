import { holeyMoleyTheme, strikeTheme } from "./theme";

export interface ThemeMappingType {
  strike: any;
  holeyMoley: any;
}

export const ThemeMapping: ThemeMappingType = {
  strike: strikeTheme,
  holeyMoley: holeyMoleyTheme,
};
