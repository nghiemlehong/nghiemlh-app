import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from 'styled-components'
import AppBar from '../components/base/AppBar'

const theme = {
}

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <ThemeProvider theme={theme}>
      <AppBar/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
