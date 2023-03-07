/* eslint-disable prettier/prettier */
import styled, { createGlobalStyle } from 'styled-components'

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

export const TitleLSpan = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 130%;
`

export const TitleMSpan = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 160%;
`

export const TitleSSpan = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 160%;
`

export const TextMSpan = styled.p`
  font-size: 1rem;
  font-weight: normal;
  line-height: 160%;
`

export const TextSSpan = styled.span`
  font-size: 0.875rem;
  font-weight: normal;
  line-height: 160%;
`

export const LinkSpan = styled.span`
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