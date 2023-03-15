import {
  NumOfPublications,
  SearchInput,
  Title,
  TitleWrapper,
  WrapperForm,
} from './styles'

export function SearchForm() {
  return (
    <WrapperForm>
      <TitleWrapper>
        <Title>Publicações</Title>
        <NumOfPublications>6 publicações</NumOfPublications>
      </TitleWrapper>
      <SearchInput placeholder="Buscar conteúdo" />
    </WrapperForm>
  )
}
