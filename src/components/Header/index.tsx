import { Wrapper } from './styles'
// import headerCover from '../../assets/headerCover.jpg'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <img src={logo} alt="github blog" />
      </Link>
    </Wrapper>
  )
}
