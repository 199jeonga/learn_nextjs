"use client";
import Providers from "./components/Providers";
import GlobalStyle from "./GlobalStyle";

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <GlobalStyle />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
