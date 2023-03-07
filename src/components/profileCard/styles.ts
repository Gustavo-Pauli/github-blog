import styled from 'styled-components'
import { TextMSpan, TitleLSpan } from '../../styles/global'

export const Wrapper = styled.div`
  max-width: 864px;

  display: flex;
  gap: 32px;
  padding: 32px;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
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
`

export const Title = styled(TitleLSpan)`
  color: ${(props) => props.theme['base-title']};
  margin-bottom: 8px;
`

export const Description = styled(TextMSpan)`
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

  svg {
    fill: ${(props) => props.theme['base-label']};
    color: ${(props) => props.theme['base-label']};
  }
`

export const InfoText = styled.span`
  color: ${(props) => props.theme['base-subtitle']};
`
