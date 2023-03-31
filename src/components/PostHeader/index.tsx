import { Post } from '../../contexts/GitUserContainer'
import {
  BackLink,
  GithubLink,
  InfoWrapper,
  NavLinksWrapper,
  Title,
  Wrapper,
} from './styles'

interface PostHeaderProps {
  post: Post
}

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <Wrapper>
      <NavLinksWrapper>
        <BackLink to="/">VOLTAR</BackLink>
        <GithubLink to="https://www.github.com">VER NO GITHUB</GithubLink>
      </NavLinksWrapper>
      <Title>{post.title}</Title>
      <InfoWrapper></InfoWrapper>
      {/* <Time>{'Há ' + 1 + ' dias'}</Time> */}
    </Wrapper>
  )
}
