"use client";

import Providers from "./components/Providers";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

const theme = {
  primaryColor: "blue",
  secondaryColor: "green",
};

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <Providers>{children}</Providers>
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
