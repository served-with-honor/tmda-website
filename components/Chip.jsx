import styled, { css } from 'styled-components'

const Wrapper = styled.span`
  align-self: flex-start;
  padding: 0.25em 0.75em;
  border-radius: 1em;
  font-size: 0.75rem;
  
  ${({ color }) => {
    if (color === 'blue') return css`
      background: #56CCF2;
      background: linear-gradient(to bottom, #2F80ED, #56CCF2);
      color: #fafafa;
    `
    if (color === 'green') return css`
      background: #59a759;
      background: linear-gradient(to bottom, #68c060, #7ef57e);
      color: #fafafa;
    `
    if (color === 'red') return css`
      background: #cb2d3e;
      background: linear-gradient(to bottom, #ef473a, #cb2d3e);
      color: #fafafa;
    `
  }}
`

export default function Chip({ color, label }) {
  return (
    <Wrapper color={color}>{ label }</Wrapper>
  )
}
