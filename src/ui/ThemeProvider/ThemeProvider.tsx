"use client";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import appTheme from "@/ds/theme/appTheme";
import SnackbarProvider from "@/ds/snackbar/SnackbarProvider";
import { currentTheme } from "@ui/_stores/theme";
import { useAtomValue } from "jotai";

export const HypThemeProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {

  const theme = useAtomValue(currentTheme);
  const HypTheme = createTheme(appTheme(theme));

  return (
    <ThemeProvider theme={HypTheme}>
      <CssBaseline />
      <SnackbarProvider>
        <body>{children}</body>
      </SnackbarProvider>
    </ThemeProvider>
  );
};
