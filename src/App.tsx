import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { useUnit } from "effector-react"
import { lightTheme, darkTheme } from './themes'
import { Switcher } from './components/Switcher'
import { $themeMode, themeToggler } from './stores/themeMode'
import { Calculator } from './components/Calculator/Calculator'
import { ResultsHistory } from './components/ResultsHistory'


export const GlobalStyles = createGlobalStyle`
    body {
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
      transition: all 0.50s linear;
    }
 `

const Container = styled.div`
    max-width: 500px;
    margin: 0 auto;    
`
const HeaderContent = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const SectionContent = styled(Container)`
    display: flex;
    justify-content: space-between;
    gap: 16px;    
`

const ThemeSwitcher = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const App = () => {
  const theme = useUnit($themeMode)
  
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <header>
        <HeaderContent>
          <h1>React Калькулятор</h1>
          <ThemeSwitcher>
            <span>Сменить тему</span>
            <Switcher id="dark" checked={theme === "dark"} onChange={() => themeToggler()} />
          </ThemeSwitcher>
        </HeaderContent>
      </header>
      <main>        
          <section>
            <SectionContent>
              <Calculator />
              <ResultsHistory />
            </SectionContent>
          </section>
      </main>
      
    </ThemeProvider>
  )
}
