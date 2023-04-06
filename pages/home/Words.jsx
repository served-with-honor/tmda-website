import Image from 'next/image';
import styled, { css } from 'styled-components';
import underlineImage from '../../public/images/Underline3.png'

function createCSS(count = 0) {
  let styles = '';

  for (let i = 1; i < count; i += 1) {
    styles += `
      span:nth-child(${i}) { animation-delay: ${i* 2000}ms; }
     `
  }

  return css`${styles}`;
}

const WordsWrapper = styled.span`
  position: relative;
  display: inline-block;
  font-size: 2.188rem;
  line-height: 1em;
  margin-left: 5px;
  height: 1em;
  text-transform: uppercase;
  vertical-align: text-bottom;

  span {
    position: absolute;
    left: 5px;
    opacity: 0;
    overflow: hidden;
    animation: fade ${({ count }) => count * 2000}ms infinite;
    white-space: nowrap;
  }
  ${({ count = 0 }) => createCSS(count)}
  
  @keyframes fade {
    0% { opacity: 0; }
    6%, 10% { opacity: 1; }
    16% { opacity: 0; }
  }
`
const Underline = styled.div`
  position: relative;
  height: auto;
  width: auto;
  margin-inline: auto;
  margin-top: -12px;
  img { width: 100%; height: auto; }
`
export default function Words ({ items }) {
 return <WordsWrapper count={items.length}>
    {items.map((text, i) => <span key={`words-${i}`}>
      {text}
      <Underline><Image src={underlineImage} alt="" /></Underline>
    </span>)}
  </WordsWrapper>
}
