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
`

export const TitleSection = styled.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  ${TitleLStyle}

  color: ${(props) => props.theme['base-title']};
`

export const GithubLink = styled.span`
  ${LinkStyle}

  display: flex;
  align-items: center;
  column-gap: 8px;
  color: ${(props) => props.theme.blue};
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
