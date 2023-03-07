import {
  Description,
  InfoElement,
  InfoIcon,
  InfoText,
  InfoWrapper,
  ProfileImgWrapper,
  TextSide,
  Title,
  Wrapper,
} from './styles'
import profileImgExample from '../../assets/avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { Github } from '../../assets/FontAwesome/github'

export function ProfileCard() {
  return (
    <Wrapper>
      <ProfileImgWrapper>
        <img src={profileImgExample} alt="" />
      </ProfileImgWrapper>
      <TextSide>
        <Title>Cameron Williamson</Title>
        <Description>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Description>
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
              <Github />
            </InfoIcon>
            <InfoText>32 seguidores</InfoText>
          </InfoElement>
        </InfoWrapper>
      </TextSide>
    </Wrapper>
  )
}
