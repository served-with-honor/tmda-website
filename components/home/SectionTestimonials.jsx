import { forwardRef } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'
import googleRatingBadge from '../../public/google-rating.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import items from '../../lib/content/testimonials';

export default forwardRef(function SectionTestimonials(props, ref) {
  return (
    <Box paddingY={12} backgroundColor='grey.50' id="testimonials" ref={ref}>
      <Container maxWidth={'md'}>
				
        <Typography variant={'sectionHeading'} sx={{ mb: 8 }}>Testimonials</Typography>
					
        <Typography align={'center'} variant={'body1'} sx={{ fontSize: 30 }}>What satisfied veteran clients are saying about Telemedica.</Typography>
				
        <Box sx={{ marginY: 5 }}><Testimonials items={items} /></Box>
				
        <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
          <Stack direction='row' spacing={1} alignItems='center'>
            <Image src={googleRatingBadge} alt='Google Rating' />
            <Typography variant={'h4'} component={'p'}>4.9</Typography>
          </Stack>
        </Box>
				
        <Box align='center' sx={{ mt: 10 }}>
          <Button variant='contained' href='https://g.page/r/CXLI9fZbuI4iEB0/review' target='_blank'>
            Leave A Review
          </Button>
        </Box>

      </Container>
    </Box>
  );
});

const Testimonials = ({ items }) => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return items && items.length > 0 ? (
    <Box sx={{
      '.slick-prev, .slick-next': {
        height: 30,
        width: 30,
      },
      '.slick-prev': { left: -40 },
      '.slick-next': { right: -40 },
      '.slick-prev:before, .slick-next:before': {
        color: 'grey.400',
        fontSize: 30,
        opacity: 1,
      },
      px: { xs: '40px', md: 0 },
    }}>
      <Slider {...settings}>
        {items.map((item, index) => {
          const text = 'text' in item ? item.text : item;
          const author = 'author' in item ? item.author : null;
          return (
            <Box sx={{ padding: 1, mb: 3 }} key={`testimonials-items-${index}`}>
              <Paper sx={{ borderRadius: 5, padding: { xs: 3, md: 5 } }} elevation={5}>
                <Typography variant={'body1'} sx={{ fontStyle: 'italic' }} gutterBottom>{text}</Typography>
                {author && <Typography variant={'subtitle2'} component='p' align='right'>- {author}</Typography>}
              </Paper>
            </Box>
          )
        })}
      </Slider>
    </Box>
  ) : null;
};
