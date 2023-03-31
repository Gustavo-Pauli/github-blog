import { Content, Time, Title, TitleWrapper, Wrapper } from './styles'

interface PostCardProps {
  id: string
  title: string
  content: string
  timestamp: Date
}

export function PostCard({ id, title, content, timestamp }: PostCardProps) {
  return (
    <Wrapper to={'/post/' + id}>
      <TitleWrapper>
        <Title>{title}</Title>
        {/* TODO: Implement time */}
        <Time>{'Há ' + timestamp.getDate() + ' dias'}</Time>
      </TitleWrapper>
      <Content>{content}</Content>
    </Wrapper>
  )
}
