import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { overrides, strikeTheme } from "../theme";
import { ThemeMapping, ThemeMappingType } from "../utils";

export default function App({ Component, pageProps }: AppProps) {
  const currentTheme = process.env.NEXT_PUBLIC_THEME as keyof ThemeMappingType;
  const current = ThemeMapping[currentTheme];
  const theme = extendTheme({ overrides, current });
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
