import ptBR from 'date-fns/locale/pt-BR'
import { Post } from '../../contexts/GitUserContainer'
import {
  BackLink,
  GithubLink,
  InfoElement,
  InfoIcon,
  InfoText,
  InfoWrapper,
  NavLinksWrapper,
  Title,
  Wrapper,
} from './styles'
import { formatDistanceToNow } from 'date-fns'

interface PostHeaderProps {
  post: Post
}

export function PostHeader({ post }: PostHeaderProps) {
  const dateStr = formatDistanceToNow(new Date(post.timestamp), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <Wrapper>
      <NavLinksWrapper>
        <BackLink to="/">VOLTAR</BackLink>
        <GithubLink to="https://www.github.com">VER NO GITHUB</GithubLink>
      </NavLinksWrapper>
      <Title>{post.title}</Title>
      <InfoWrapper>
        <InfoElement>
          <InfoIcon></InfoIcon>
          <InfoText>{post.author}</InfoText>
        </InfoElement>
        <InfoElement>
          <InfoIcon></InfoIcon>
          <InfoText>{}</InfoText>
        </InfoElement>
        <InfoElement>
          <InfoIcon></InfoIcon>
          <InfoText>{post.comments}</InfoText>
        </InfoElement>
      </InfoWrapper>
      {/* <Time>{'Há ' + 1 + ' dias'}</Time> */}
    </Wrapper>
  )
}
