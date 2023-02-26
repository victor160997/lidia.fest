import { ThemeProvider } from "styled-components"
import type { AppProps } from "next/app"
import { defaultTheme } from "src/styles/themes/default"
import { GlobalStyle } from "src/styles/global"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
