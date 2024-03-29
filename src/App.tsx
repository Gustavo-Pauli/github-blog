import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GitUserProvider } from './contexts/GitUserContainer'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GitUserProvider>
        <HashRouter>
          <Router />
          <GlobalStyle />
        </HashRouter>
      </GitUserProvider>
    </ThemeProvider>
  )
}
