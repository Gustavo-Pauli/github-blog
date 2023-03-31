import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { TextMStyle, TextSStyle, TitleMStyle } from '../../styles/global'

export const Wrapper = styled(Link)`
  width: 416px;
  height: 251px;

  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* row-gap: 20px; */

  text-decoration: none;

  border: 2px solid transparent;
  transition: border 0.125s ease;

  :hover {
    cursor: pointer;
    /* box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25); */
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 16px;
`

export const Title = styled.h3`
  ${TitleMStyle}

  color: ${(props) => props.theme['base-title']};
  flex: 1 0 0;
`

export const Time = styled.span`
  ${TextSStyle}

  color: ${(props) => props.theme['base-span']};
  margin-top: 5px;
  flex: 1 0 1;
`

export const Content = styled.p`
  ${TextMStyle}

  width: 100%;
  height: 103px;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  color: ${(props) => props.theme['base-text']};
`
