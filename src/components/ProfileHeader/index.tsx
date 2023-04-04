import {
  Description,
  GithubLink,
  InfoElement,
  InfoIcon,
  InfoText,
  InfoWrapper,
  ProfileImgWrapper,
  TextSide,
  Title,
  TitleSection,
  UpperText,
  Wrapper,
} from './styles'
// import profileImgExample from '../../assets/avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { GitUserContext } from '../../contexts/GitUserContainer'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function ProfileHeader() {
  const context = useContext(GitUserContext)

  return (
    <Wrapper>
      <ProfileImgWrapper>
        <img src={context.user?.avatar_url} height="148" width="148" alt="" />
      </ProfileImgWrapper>
      <TextSide>
        <UpperText>
          <TitleSection hasBio={!!context.user?.bio}>
            <Title>{context.user?.name}</Title>
            <GithubLink to={context.user?.html_url || ''}>
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </GithubLink>
          </TitleSection>
          <Description>{context.user?.bio}</Description>
        </UpperText>
        <InfoWrapper>
          <InfoElement>
            <InfoIcon>
              <FontAwesomeIcon icon={faGithub} />
            </InfoIcon>
            <InfoText>{context.user?.login}</InfoText>
          </InfoElement>

          {context.user?.company && (
            <InfoElement>
              <InfoIcon>
                <FontAwesomeIcon icon={faBuilding} />
              </InfoIcon>
              <InfoText>{context.user?.company}</InfoText>
            </InfoElement>
          )}

          <InfoElement>
            <InfoIcon>
              <FontAwesomeIcon icon={faUserGroup} />
            </InfoIcon>
            <InfoText>
              {context.user?.followers}
              {context.user?.followers === 1 ? ' seguidor' : ' seguidores'}
            </InfoText>
          </InfoElement>
        </InfoWrapper>
      </TextSide>
    </Wrapper>
  )
}
