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

  > span {
    display: block;
    position: absolute;
    opacity: 0;
    animation: fade ${({ count }) => count * 2000}ms infinite;
    white-space: nowrap;
    img {
      display: block;
      position: absolute;
      top: 50%;
      left: 0;  
      width: 100%;
      height: auto;
    }
  }
  ${({ count = 0 }) => createCSS(count)}
  
  @keyframes fade {
    0% { opacity: 0; }
    6%, 10% { opacity: 1; }
    16% { opacity: 0; }
  }
`

export default function Words ({ items }) {
 return <WordsWrapper count={items ? items.length : 0}>
    {items ? items.map((text, i) => <span key={`word-${i}`}>
      {text}
      <Image src={underlineImage} alt="" />
    </span>) : null}
  </WordsWrapper>
}
