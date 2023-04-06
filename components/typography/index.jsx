import { HeadingUnderline } from './Headings'

import styled, { css } from 'styled-components'

const Wrapper = styled.p`
  ${({ align }) => align === 'start' && 'text-align: left;'}
  ${({ align }) => align === 'center' && 'text-align: center;'}
  ${({ align }) => align === 'end' && 'text-align: right;'}
  
  /* @media (min-width: 576px){
    ${({ align }) => align === 'start-sm' && 'text-align: left;'}
    ${({ align }) => align === 'center-sm' && 'text-align: center;'}
    ${({ align }) => align === 'end-sm' && 'text-align: right;'}
  }
  @media (min-width: 768px){
    ${({ align }) => align === 'start-md' && 'text-align: left;'}
    ${({ align }) => align === 'center-md' && 'text-align: center;'}
    ${({ align }) => align === 'end-md' && 'text-align: right;'}
  }
  @media (min-width: 992px){
    ${({ align }) => align === 'start-lg' && 'text-align: left;'}
    ${({ align }) => align === 'center-lg' && 'text-align: center;'}
    ${({ align }) => align === 'end-lg' && 'text-align: right;'}
  }
  @media (min-width: 1200px){
    ${({ align }) => align === 'start-xl' && 'text-align: left;'}
    ${({ align }) => align === 'center-xl' && 'text-align: center;'}
    ${({ align }) => align === 'end-xl' && 'text-align: right;'}
  } */
}
`

const BodyText = ({ align, children }) => (
  <Wrapper align={align}>
    { children }
  </Wrapper>
);

export {
  BodyText,
  HeadingUnderline,
}