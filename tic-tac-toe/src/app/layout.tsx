"use client"
import { GlobalContextProvider } from "./Context"
import theme from "./global/theme";
import { ThemeProvider } from "styled-components";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body> 
        <ThemeProvider theme={theme}>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
