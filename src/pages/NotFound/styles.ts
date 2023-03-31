import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: -88px;

  > div {
    /* max-width: 864px; */
    width: 432px;

    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 32px; */
    padding: 32px;
    border-radius: 10px;
    background: ${(props) => props.theme['base-profile']};
    filter: drop-shadow(0px 2px 28px rgba(0, 0, 0, 0.2));

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    svg {
      width: 32px;
      fill: ${(props) => props.theme['base-title']};
      color: ${(props) => props.theme['base-title']};
    }

    h1 {
      /* margin-top: 32px; */
      font-size: 32px;
      font-weight: 700;
      color: ${(props) => props.theme['base-title']};
    }

    h2 {
      /* margin-top: 16px; */
      font-size: 24px;
      font-weight: 700;
      color: ${(props) => props.theme['base-title']};
    }

    a {
      margin-top: 32px;
      text-decoration: none;
      color: ${(props) => props.theme.blue};

      :hover {
        text-decoration: underline;
      }
    }
  }

  /* a {
    margin-top: 32px;
    text-decoration: none;
    color: ${(props) => props.theme.blue};

    :hover {
      text-decoration: underline;
    }
  } */
`
