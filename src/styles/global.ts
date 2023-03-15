/* eslint-disable prettier/prettier */
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* :focus {
    outline: 0;
    box-shadow: 0 0 0 2px red;
  } */

  body {
    background: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
    }
    
  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`

export const TitleLStyle = `
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 130%;
`

export const TitleMStyle = `
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 160%;
`

export const TitleSStyle = `
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 160%;
`

export const TextMStyle = `
  font-size: 1rem;
  font-weight: normal;
  line-height: 160%;
`

export const TextSStyle = `
  font-size: 0.875rem;
  font-weight: normal;
  line-height: 160%;
`

export const LinkStyle = `
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 160%;
`

/* 
export const TitleL = {
  'font-size': '1.5rem',
  'font-weight': 'bold',
  'line-height': '130%',
}

export const TitleM = {
  'font-size': '1.25rem',
  'font-weight': 'bold',
  'line-height': '160%',
}

export const TitleS = {
  'font-size': '1.125rem',
  'font-weight': 'bold',
  'line-height': '160%',
}

export const TextM = {
  'font-size':' 1rem',
  'font-weight': 'normal',
  'line-height': '160%',
}

export const TextS = {
  'font-size': '0.875rem',
  'font-weight': 'normal',
  'line-height': '160%',
}

export const Link = {
  'font-size': '0.75rem',
  'font-weight': 'bold',
  'line-height': '160%',
}
*/