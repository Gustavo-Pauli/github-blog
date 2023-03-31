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

export const InfoWrapper = styled.div`
  display: flex;
  column-gap: 24px;
`

export const InfoElement = styled.div`
  height: 26px;
  color: white;

  display: flex;
  column-gap: 8px;
  align-items: center;
`

export const InfoIcon = styled.div`
  width: 18px;
  height: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${(props) => props.theme['base-label']};
    color: ${(props) => props.theme['base-label']};
  }
`

export const InfoText = styled.span`
  color: ${(props) => props.theme['base-subtitle']};
`
