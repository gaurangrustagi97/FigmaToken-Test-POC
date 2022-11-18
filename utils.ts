import { holeyMoleyTheme, strikeTheme } from "./theme";
import { Colors } from "./colors.json";

export type BrandType = keyof typeof Colors;
export interface IColors {
  background1?: string;
  action1?: string;
  black?: string;
}
export interface ThemeMappingType {
  strike: any;
  holeyMoley: any;
}

export const ThemeMapping: ThemeMappingType = {
  strike: strikeTheme,
  holeyMoley: holeyMoleyTheme,
};

const getColors = () => {
  const appTheme: BrandType = process.env.NEXT_PUBLIC_THEME as BrandType;
  console.log(typeof Colors[appTheme]);
  return Colors[appTheme] as IColors;
};
export const colorsBrand = getColors();
