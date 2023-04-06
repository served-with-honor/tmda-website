import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  --spacing: 6rem;
  --color1: ${({ color }) => color && Array.isArray(color) ? color[0] : color ? color : 'transparent' };
  --color2: ${({ color }) => color && Array.isArray(color) ? color[color.length - 1] : color ? color : 'transparent' };
  
  ${({ color }) => color && Array.isArray(color) ?
    css`background: linear-gradient(0deg, ${ color.join(', ') });`
    : color ? css`background-color: ${color};`
    : null
  }

  position: relative;
  padding-top: var(--spacing);
  padding-bottom: var(--spacing);
  /* background-image: url(/images/Untitled\ design\ \(40\).png); */

  ${({ topTransitionColor }) => topTransitionColor ? css`
    padding-top: 0;
    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 15vh;
      background: linear-gradient(${topTransitionColor}, var(--color1));
    }
    ` : ''}
    
    ${({ bottomTransitionColor }) => bottomTransitionColor ? css`
    padding-bottom: 0;
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 15vh;
      background: linear-gradient(var(--color2), ${bottomTransitionColor});
    }
  ` : ''}
`
export default function Section({ children, color, topTransitionColor, bottomTransitionColor }) {
  return <>
    <Wrapper
      color={color}
      topTransitionColor={topTransitionColor}
      bottomTransitionColor={bottomTransitionColor}
    >
      {children}
    </Wrapper>
  </>
}



// .threeColCTA {
  
// }
// @media (min-width: 40em) {
//   .threeColCTA {
//     height: 35vh;
//   }
// }
// .threeColCTA .container {
//   flex-wrap: wrap;
//   height: 100%;
//   justify-content: center;
//   align-items: center;
// }
// .threeColCTA h1 {
//   margin: 1.875rem 0;
// }
// /* @media (min-width: ) {
//   .threeColCTA h1 {
//     margin: 0;
//     padding-bottom: 0;
//   }
// } */
// .threeColCTA h1:after {
//   background-color: var(--clr-primary-teal);
//   content: "";
//   display: block;
//   height: 2px;
//   position: relative;
//   margin: 0.9375rem auto 0;
//   max-width: 100%;
//   width: 7.5rem;
// }
// .threeColCTA .row {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   width: 100%;
//   gap: 40px;
// }
// @media (min-width: 40em) {
//   .threeColCTA .row .threeColCTA__item {
//     flex: 1;
//     justify-content: space-between;
//   }
// }
// .threeColCTA .centered-div {
//   justify-content: center;
//   align-items: center;
// }
// .threeColCTA .button {
//   width: 16em;
//   text-shadow: 0px 3px 15px rgba(0, 0, 0, 0.5);
//   text-transform: uppercase;
// }
// .threeColCTA .button:hover {
//   box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.5);
// }
// @media (min-width: 40em) {
//   .threeColCTA .button {
//     border-radius: 1.75em;
//     font-size: 1.2rem;
//     padding: 1em 2em;
//   }
// }