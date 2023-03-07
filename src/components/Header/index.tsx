import { Wrapper } from './styles'
// import headerCover from '../../assets/headerCover.jpg'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <Wrapper>
      <img src={logo} alt="" />
    </Wrapper>
  )
}
