import ptBR from 'date-fns/locale/pt-BR'
import { Post } from '../../contexts/GitUserContainer'
import {
  NavLink,
  InfoElement,
  InfoIcon,
  InfoText,
  InfoWrapper,
  NavLinksWrapper,
  Title,
  Wrapper,
  NavLinkIcon,
} from './styles'
import { formatDistanceToNow } from 'date-fns'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <NavLink to="/">
          <NavLinkIcon icon={faChevronLeft} />
          VOLTAR
        </NavLink>
        <NavLink to={post.url}>
          VER NO GITHUB
          <NavLinkIcon icon={faArrowUpRightFromSquare} />
        </NavLink>
      </NavLinksWrapper>
      <Title>{post.title}</Title>
      <InfoWrapper>
        <InfoElement>
          <InfoIcon>
            <FontAwesomeIcon icon={faGithub} />
          </InfoIcon>
          <InfoText>{post.author}</InfoText>
        </InfoElement>
        <InfoElement>
          <InfoIcon>
            <FontAwesomeIcon icon={faCalendarDay} />
          </InfoIcon>
          <InfoText>
            {dateStr.charAt(0).toUpperCase() + dateStr.slice(1)}
          </InfoText>
        </InfoElement>
        <InfoElement>
          <InfoIcon>
            <FontAwesomeIcon icon={faComment} />
          </InfoIcon>
          <InfoText>
            {post.comments}
            {post.comments === 1 ? ' comentário' : ' comentários'}
          </InfoText>
        </InfoElement>
      </InfoWrapper>
      {/* <Time>{'Há ' + 1 + ' dias'}</Time> */}
    </Wrapper>
  )
}
