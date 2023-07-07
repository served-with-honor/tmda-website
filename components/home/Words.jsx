import Image from 'next/image';
import { styled, keyframes } from '@mui/system';
import underlineImage from '../../public/images/Underline3.png'

const animation = keyframes` 
  0% { opacity: 0 }
  6%, 10% { opacity: 1 }
  16% { opacity: 0 }
`

const Wrapper = styled('span')({
  position: 'relative',
  display: 'inline-block',
  fontSize: '2.188rem',
  lineHeight: '1em',
  marginLeft: '5px',
  height: '1em',
  textTransform: 'uppercase',
  verticalAlign: 'text-bottom',
});

const Item = styled('span')(({ count, num }) => ({
  display: 'block',
  position: 'absolute',
  opacity: 0,
  animation: `${animation} ${count * 2000}ms ${num * 2000}ms infinite`,
  whiteSpace: 'nowrap',
}));
  
const Test = styled(Image)({
  display: 'block',
  position: 'absolute',
  top: '50%',
  left: '0; ',
  width: '100%',
  height: 'auto',
});

export default function Words ({ items }) {
  return items && items.length > 0 ? (
    <Wrapper count={items ? items.length : 0}>
      {items.map((text, index) => (
        <Item key={`word-${index}`} count={items.length} num={index}>
          {text}
          <Test src={underlineImage} alt="" />
        </Item>
      ))}
    </Wrapper>
   ) : null
}
