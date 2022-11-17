import { holeyMoleyTheme, strikeTheme } from "./theme";
import colors from "./colors.json";

export type BrandType = keyof typeof colors;
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
  return colors[appTheme]["colors"] as IColors;
};
export const colorsBrand = getColors();
