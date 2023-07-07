import { Box, Typography, Paper } from '@mui/material'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const items = [
    'The only way you could improve is have Dr. Decruise do every single evaluation for VA claims insider PTSD. This is my 2nd eval with Telemedica so I was apprehensive about how the second exam would go. Dr. Decruuse is absolutely the most genuine and sincere mental health care provider possible. I know she sees thousands of patients but I honestly felt as though I was her one and only patient. She was kind, caring, compassionate and sincere. Her patience and concern for myself as a human (not just a number) are top notch. She is a world class human and physician. Dr. Decruise made me feel safe, secure, welcomed and as if she actually listened. I could not be more satisfied with how my exam went. And another short kudos for customer service team: Your customer service follow up and care is to be commended and appreciated',
    'I feel that the whole process from beginning (scheduling) to end (the actual appointment) was very easy and stress free! Ms. Mia was so helpful that she went above and beyond to help me reschedule and answer a few questions I had with ease. The doctor was very personable and professional but at the same time made me feel extremely comfortable with the evaluation process.',
    'Testimonial 3',
    'Testimonial 4',
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <Slider {...settings}>
      {items.map((text, index) => (
        <Box sx={{ padding: 1 }} key={`testimonials-items-${index}`}>
          <Paper sx={{ padding: { xs: 3, md: 5 } }} elevation={5}>
            <Typography variant={'body1'}>{text}</Typography>
          </Paper>
        </Box>
      ))}
    </Slider>
  );
}