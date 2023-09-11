import { Box, Typography, Paper } from '@mui/material'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials({ items }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return items && items.length > 0 ? (
    <Slider {...settings}>
      {items.map((item, index) => {
        const text = 'text' in item ? item.text : item;
        const author = 'author' in item ? item.author : null;
        return (
          <Box sx={{ padding: 1, mb: 3 }} key={`testimonials-items-${index}`}>
            <Paper sx={{ borderRadius: 5, padding: { xs: 3, md: 5 } }} elevation={5}>
              <Typography variant={'body1'} sx={{ fontStyle: 'italic' }} gutterBottom>{text}</Typography>
              {author && <Typography variant={'subtitle2'} align='right'>- {author}</Typography>}
            </Paper>
          </Box>
        )
      })}
    </Slider>
  ) : null;
}