import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  background-color: var(--color-body);
  
  /* width: clamp(18rem, 18rem + 2vw, 20rem); */
  overflow: hidden;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.3);
  border-radius: 1.25rem 1.25rem;
  background: #ECE9E6;
  background: linear-gradient(to right, #FFFFFF, #ECE9E6);
`

export default function Card({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const HeaderWrapper = styled.div`
  img {
    max-width: 100%;
    display: block;
    object-fit: cover;
  }
`
export const CardHeader = ({ children }) => (
  <HeaderWrapper>
    {children}
  </HeaderWrapper>
);

const BodyWrapper = styled.div`
  padding: 1rem;
`
export const CardBody = ({ children }) => (
  <BodyWrapper>{children}</BodyWrapper>
);
export const CardFooter = ({ children }) => (
  <div>{children}</div>
);