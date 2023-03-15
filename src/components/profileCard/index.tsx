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
import profileImgExample from '../../assets/avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { Github } from '../../assets/FontAwesome/github'

export function ProfileCard() {
  return (
    <Wrapper>
      <ProfileImgWrapper>
        <img src={profileImgExample} alt="" />
      </ProfileImgWrapper>
      <TextSide>
        <UpperText>
          <TitleSection>
            <Title>Cameron Williamson</Title>
            <GithubLink>
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </GithubLink>
          </TitleSection>
          <Description>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </Description>
        </UpperText>
        <InfoWrapper>
          <InfoElement>
            <InfoIcon>
              <Github />
            </InfoIcon>
            <InfoText>cameronwll</InfoText>
          </InfoElement>

          <InfoElement>
            <InfoIcon>
              <FontAwesomeIcon icon={faBuilding} />
            </InfoIcon>
            <InfoText>Rocketseat</InfoText>
          </InfoElement>

          <InfoElement>
            <InfoIcon>
              <FontAwesomeIcon icon={faUserGroup} />
            </InfoIcon>
            <InfoText>32 seguidores</InfoText>
          </InfoElement>
        </InfoWrapper>
      </TextSide>
    </Wrapper>
  )
}
