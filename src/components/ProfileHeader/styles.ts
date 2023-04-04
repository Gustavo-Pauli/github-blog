import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LinkStyle, TextMStyle, TitleLStyle } from '../../styles/global'
// import { LinkSpan, TextMSpan, TitleLSpan } from '../../styles/global'

export const Wrapper = styled.div`
  max-width: 864px;

  display: flex;
  gap: 32px;
  padding: 32px;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};

  filter: drop-shadow(0px 2px 28px rgba(0, 0, 0, 0.2));
`

export const ProfileImgWrapper = styled.div`
  width: 148px !important;
  height: 148px !important;
  border-radius: 8px;
  overflow: hidden;

  flex: 1 0 1;
`

/* justify-content: ${(props) =>
    props.hasBio ? 'space-between' : 'flex-end'}; */

export const TextSide = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;

  padding-top: 8px;
  justify-content: space-between;
`

export const UpperText = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`

interface hasBioProps {
  hasBio: boolean
}

export const TitleSection = styled.div<hasBioProps>`
  margin-bottom: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* height: ${(props) => (props.hasBio ? 'initial' : '100%')}; */
`

export const Title = styled.h1`
  ${TitleLStyle}

  margin-top: auto;

  color: ${(props) => props.theme['base-title']};
`

export const GithubLink = styled(Link)`
  ${LinkStyle}

  text-decoration: none;

  margin-bottom: auto;

  display: flex;
  align-items: center;
  column-gap: 8px;
  color: ${(props) => props.theme.blue};

  :hover {
    text-decoration: underline;
  }
`

export const Description = styled.span`
  ${TextMStyle}

  color: ${(props) => props.theme['base-text']};
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
  display: flex;
  align-items: center;
  justify-content: center;

  width: 18px;
  height: 18px;

  svg {
    fill: ${(props) => props.theme['base-label']};
    color: ${(props) => props.theme['base-label']};

    width: 18px;
    height: 18px;
  }
`

export const InfoText = styled.span`
  color: ${(props) => props.theme['base-subtitle']};
`
