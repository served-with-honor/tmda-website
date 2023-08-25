import { useRef } from 'react';
import Image from 'next/image';
import {
	motion,
  useScroll,
  useSpring,
	useTransform
} from 'framer-motion';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import phoneImage from '../../public/images/iPhone 14 SDS1-04 copy.png'
import phoneShadowImage from '../../public/images/iPhone Blur Shadow.png'

function useParallax(value, distance) {
	return useTransform(value, [0, 1], [distance, -distance]);
}

export default function Section1({ heading, text, button }) {
	const phoneImageRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: phoneImageRef,
		offset: ["start end", "end start"],
	});
	
	const y = useSpring(useParallax(scrollYProgress, 100));
  const scaleX = useTransform(scrollYProgress, [0, 1], ['50%', '150%']);
  const opacity = useTransform(scrollYProgress, [0, 1], ['100%', '10%']);
  
	return (
    <Box sx={{ pt: 10, pb: { xs: 10, md: 0 } }}>
			<Container>
        <Grid container spacing={{ xs: 1, md: 15 }}>
					<Grid item md order={{ xs: 2, md: 1 }}>
						<Typography variant='sectionHeading' component='h2' marginBottom={5} sx={{ textAlign: 'left', '&:after': { marginLeft: 0 } }}>{heading}</Typography>
            <Typography variant='body1' marginBottom={5}>{text}</Typography>
            {button ? (
              <Button variant='contained' color='secondary' href={button.url}>{button.label}</Button>
            ): null}
					</Grid>
          <Grid item xs={12} md order={{ xs: 1, md: 2 }}>
            <Box ref={phoneImageRef} sx={{ textAlign: 'center' }}>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1, }}
								transition={{ duration: 1 }}
								style={{ y: y }}
							>
								<Box sx={{ ml: 10, mt: -10 }}>
									<Image 
										src={phoneImage}
										placeholder='blur'
										style={{ width: 'auto', height: 'auto' }}
										sizes="(min-width: 1024px) 300px, (min-width: 768px) 30vw, 200px"
										/>
								</Box>
							</motion.div>
							<motion.div
								style={{ scaleX, opacity }}
								>
								<Box sx={{ my: 5 }}>
									<Image 
										src={phoneShadowImage}
										sizes="(min-width: 1024px) 300px, (min-width: 768px) 30vw, 200px"
										style={{ width: 'auto', height: 'auto' }}
									/>
								</Box>
							</motion.div>
						
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
