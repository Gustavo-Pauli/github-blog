import { useContext } from 'react'
import { GitUserContext } from '../../contexts/GitUserContainer'
import {
  NumOfPublications,
  SearchInput,
  Title,
  TitleWrapper,
  WrapperForm,
} from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export function SearchForm() {
  const schema = z.object({
    search: z.string().max(256),
  })
  type FormValues = z.infer<typeof schema>

  const context = useContext(GitUserContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  function handleSearch(data: FormValues) {
    context.searchPosts(data.search)
  }

  return (
    <WrapperForm onSubmit={handleSubmit(handleSearch)}>
      <TitleWrapper>
        <Title>Publicações</Title>
        <NumOfPublications>
          {context.posts?.length}{' '}
          {context.posts?.length === 1 ? 'publicação' : 'publicações'}
        </NumOfPublications>
      </TitleWrapper>
      <SearchInput
        placeholder="Buscar conteúdo"
        {...register('search')}
        disabled={isSubmitting || !context.user}
      />
    </WrapperForm>
  )
}
