import { formatDistanceToNow } from 'date-fns'
import { Content, Time, Title, TitleWrapper, Wrapper } from './styles'
import ptBR from 'date-fns/locale/pt-BR'

interface PostCardProps {
  id: string
  title: string
  content: string
  timestamp: Date
}

export function PostCard({ id, title, content, timestamp }: PostCardProps) {
  const dateStr = formatDistanceToNow(new Date(timestamp), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <Wrapper to={'/post/' + id}>
      <TitleWrapper>
        <Title>{title}</Title>
        {/* TODO: Implement time */}
        <Time>{dateStr.charAt(0).toUpperCase() + dateStr.slice(1)}</Time>
      </TitleWrapper>
      <Content>{content}</Content>
    </Wrapper>
  )
}
