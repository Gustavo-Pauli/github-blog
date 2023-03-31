import reactMarkdown from 'react-markdown'
import styled from 'styled-components'
import {
  TextMStyle,
  TitleLStyle,
  TitleMStyle,
  TitleSStyle,
} from '../../styles/global'
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: -88px;
`

export const PostHeaderWrapper = styled.div`
  width: 100%;
  max-width: 864px;
`

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 864px;
  padding: 40px 32px;

  margin-bottom: 72px;
`

export const ContentMarkdown = styled(reactMarkdown)`
  color: ${(props) => props.theme['base-text']};

  p {
    ${TextMStyle}
    margin-bottom: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1.5rem;
    color: ${(props) => props.theme.blue};
  }

  h1 {
    ${TitleLStyle}/* border-bottom: 1px solid ${(props) => props.theme.blue}; */
  }

  h2 {
    ${TitleMStyle}
    border-bottom: 1px solid ${(props) => props.theme.blue};
    margin-bottom: 1rem;
  }

  h3 {
    ${TitleSStyle}
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }

  ul,
  ol {
    padding-left: 24px;
    li {
      margin-bottom: 1.6rem;
    }
  }

  img {
    max-width: 100%;
  }

  code {
    /* padding: 16px; */
  }
`

// console.log('style: ', dracula)

// export const codeStyle = {
//   ...dracula,
//   'pre[class*="language-"]': {
//     ...dracula['pre[class*="language-"]'],
//     background: theme['base-post'],
//   },
// }

// console.log('changed style: ', codeStyle)
