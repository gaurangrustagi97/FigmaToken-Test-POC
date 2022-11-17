import { colors } from "./color";

export const strikeTheme = {
  colors: {
    app: colors.strike,
  },
};

export const holeyMoleyTheme = {
  colors: {
    app: colors.holeyMoley,
  },
};

export const overrides = {
  colors,
  shadows: {
    md: "0 4px 8px 0 #0D0E0F1F, 0 0 2px 0 #0D0E0F29",
    outline: "0 0 0 3px var(--chakra-colors-core-disabled-grey)",
  },
};
