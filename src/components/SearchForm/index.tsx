import { useContext } from 'react'
import { GitUserContext } from '../../contexts/GitUserContainer'
import {
  NumOfPublications,
  SearchInput,
  Title,
  TitleWrapper,
  WrapperForm,
} from './styles'

export function SearchForm() {
  const context = useContext(GitUserContext)

  return (
    <WrapperForm>
      <TitleWrapper>
        <Title>Publicações</Title>
        <NumOfPublications>
          {context.posts?.length}{' '}
          {context.posts?.length === 1 ? 'publicação' : 'publicações'}
        </NumOfPublications>
      </TitleWrapper>
      <SearchInput placeholder="Buscar conteúdo" />
    </WrapperForm>
  )
}
