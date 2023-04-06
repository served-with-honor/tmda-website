import styled from 'styled-components';

const UnderlineWrapper = styled.div`
  text-align: center;
  
  &:after {
    background-color: var(--color-primary);
    content: '';
    display: block;
    height: 2px;
    position: relative;
    margin: 1rem auto 0;
    max-width: 100%;
    width: 7.5rem;
  }
`;
export function HeadingUnderline({ level = 3, children }) {
  return <UnderlineWrapper as={`h${level}`}>{children}</UnderlineWrapper>;
}
