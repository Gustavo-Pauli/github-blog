import styled from 'styled-components'
import headerCover from '../../assets/headerCover.jpg'

export const Wrapper = styled.header`
  width: 100%;
  height: 296px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-bottom: 35px;

  /* background: url(headerCover) cover no-repeat; */
  background-image: url(${headerCover});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-position-y: center;
`

export const ImgCover = styled.img`
  /* background: url(headerCover) cover no-repeat; */
`
