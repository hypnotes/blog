import type { Metadata } from "next";
import { MainHeader } from "@ui/MainHeader/MainHeader";
import { HypThemeProvider } from "@ui/ThemeProvider/ThemeProvider";
import StyledComponentsRegistry from "./registry";

export const metadata: Metadata = {
  title: "HYPNOTES",
  description: "My Record ✨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <HypThemeProvider>
          <MainHeader />
          <div style={{ display: "flex", justifyContent: "center" }}>
            {children}
          </div>
        </HypThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
