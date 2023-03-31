import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LinkStyle, TitleLStyle } from '../../styles/global'

export const Wrapper = styled.div`
  max-width: 864px;

  display: flex;
  flex-direction: column;

  padding: 32px;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  filter: drop-shadow(0px 2px 28px rgba(0, 0, 0, 0.2));
`

export const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const BackLink = styled(Link)`
  ${LinkStyle}
  text-decoration: none;
  color: ${(props) => props.theme.blue};

  :hover {
    text-decoration: underline;
  }
`

export const GithubLink = styled(Link)`
  ${LinkStyle}
  text-decoration: none;
  color: ${(props) => props.theme.blue};

  :hover {
    text-decoration: underline;
  }
`

export const Title = styled.div`
  ${TitleLStyle}
  color: ${(props) => props.theme['base-title']};
  margin-bottom: 8px;
`

// TODO add info
export const InfoWrapper = styled.div``