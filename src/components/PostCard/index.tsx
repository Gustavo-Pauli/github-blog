import { Content, Time, Title, TitleWrapper, Wrapper } from './styles'

interface PostCardProps {
  id: number
  title: string
  content: string
  timestamp: Date
}

export function PostCard({ id, title, content, timestamp }: PostCardProps) {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{title}</Title>
        <Time>{'Há ' + timestamp.getDate() + ' dias'}</Time>
      </TitleWrapper>
      <Content>{content}</Content>
    </Wrapper>
  )
}
