import styled from 'styled-components'
import headerCover from '../../assets/headerCover.jpg'

export const Wrapper = styled.header`
  width: 100%;
  height: 296px;

  /* display: flex;
  justify-content: center;
  align-items: center; */

  /* padding-bottom: 35px; */

  /* background: url(headerCover) cover no-repeat; */
  background-image: url(${headerCover});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-position-y: center;

  a {
    width: 148px;
    margin: 0 auto;
    position: relative;
    top: 64px;
    display: flex;
    justify-content: center;

    img {
      display: block;
      /* width: 148px; */
      /* margin: 0 auto; */
      /* padding-top: 64px; */
    }
  }
`

export const ImgCover = styled.img`
  /* background: url(headerCover) cover no-repeat; */
`
