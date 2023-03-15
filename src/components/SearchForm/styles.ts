import styled from 'styled-components'
import { TextMStyle, TextSStyle, TitleSStyle } from '../../styles/global'

export const WrapperForm = styled.form`
  max-width: 864px;

  display: flex;
  flex-direction: column;
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 12px;
`

export const Title = styled.h3`
  ${TitleSStyle}

  color: ${(props) => props.theme['base-subtitle']};
`

export const NumOfPublications = styled.div`
  ${TextSStyle}
`

export const SearchInput = styled.input`
  ${TextMStyle}

  height: 50px;
  padding-left: 16px;

  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-input']};

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border-color: ${(props) => props.theme.blue};
  }
`
