import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 15vh;

  ${({ style }) =>
    style == 1 ? css`
      background: linear-gradient(var(--clr-primary-white), hsl(177deg, 31%, 53%));
    `
    : style == 2 ? css`
      background: linear-gradient(hsl(212deg, 38%, 38%), var(--clr-primary-white));
    `
    : css``
  }
`

export default function Transition({ style }) {
  return <Wrapper style={style} />;
}
