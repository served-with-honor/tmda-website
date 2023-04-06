import styled, { css } from 'styled-components'

const ButtonWrapper = styled.button`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 1.9375rem;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  transition: all 200ms ease-in-out;
  text-transform: uppercase;

  ${ ({ color }) => {
    if (color === 'primary') return `
      background-color: var(--color-primary);
      color: var(--clr-primary-white);
      &:hover {
        background-color: var(--color-primary-700);
      }
    `;
    if (color === 'secondary') return `
      background-color: var(--color-secondary);
      color: var(--color-secondary-idk);
      &:hover {
        background-color: var(--color-secondary-600);
      }
    `;
  }}
  
  ${ ({ size }) => {
    if (size === 'sm') return `
        border-radius: 1.5em;
        padding: 0.75em 2em;
      `
    if (size === 'lg') return `
        border-radius: 2em;
        font-size: 1.4rem;
        padding: 1.5rem 1.75rem;
      `
    if (size === 'xl') return `
        font-size: 1.8rem;
        max-width: 30rem;
      `
    if (size === 'xxl') return `
      font-size: 2.4rem;
    `
    return `
      border-radius: 1.75em;
      font-size: 1.2rem;
      padding: 1em 2em;
    `;
  }}
`;

export default function Button({ link = true, size = 'md', color, children }) {
  return (
    <ButtonWrapper as={!link ? 'button' : 'a'} href="#" size={size} color={color}>
      {children}
    </ButtonWrapper>
  );
}

const ButtonOutlineWrapper = styled(Button)`
  color: var(--clr-primary-white);
  border: 2px solid currentColor;
  transition: transform 0.5s;

  &:hover {
    background: var(--clr-primary-teal);
    transform: translateY(-0.35em);
  }
`
export function ButtonOutline({ link = true, color, children }) {
  return <ButtonOutlineWrapper>{children}</ButtonOutlineWrapper>
}

// .button.dropbtn {
//   background-color: transparent;
//   color: white;
//   border: none;
//   font-family: inherit;
//   font-size: 1rem;
//   cursor: pointer;
// }
// .button.dropbtn-clear {
//   background-color: white;
//   color: black;
//   border: none;
//   border-radius: none;
// }