"use client"
import { GlobalContextProvider } from "./Context"
import theme from "./global/theme";
import { ThemeProvider } from "styled-components";
import styles from './page.module.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.container}> 
        <ThemeProvider theme={theme}>
        <GlobalContextProvider>
        <div className={styles.centeredContainer}>
            {children}
        </div>
        </GlobalContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
