import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import phoneImage from '../../public/images/iPhone-14-SDS1-04.png'
import phoneShadowImage from '../../public/images/iPhone-Blur-Shadow.png'

export default function Section1({ heading, text, button }) {
	const phoneImageRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: phoneImageRef,
		offset: ["start end", "end start"],
	});
	
	const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scaleX = useTransform(scrollYProgress, [0, 1], ['50%', '150%']);
  const opacity = useTransform(scrollYProgress, [0, 1], ['100%', '10%']);
  
	return (
		<Box sx={{ py: 10 }}>
			<Container>
        <Grid container spacing={{ xs: 1, md: 15 }}>
					<Grid item md order={{ xs: 2, md: 1 }}>
						<Typography variant='sectionHeading' component='h2' marginBottom={5} sx={{ textAlign: 'left', '&:after': { marginLeft: 0 } }}>{heading}</Typography>
            <Typography variant='body1' marginBottom={5}>{text}</Typography>
            {button ? (
              <Button variant='contained' color='secondary' href={button.url || ''} onClick={button.action || null}>{button.label}</Button>
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
										alt=''
										src={phoneImage}
										style={{ width: 'auto', height: 'auto' }}
										sizes="(min-width: 1024px) 300px, (min-width: 768px) 30vw, 200px"
										/>
								</Box>
							</motion.div>
							<Box sx={{ maxWidth: '100%', overflow: 'hidden' }}>
							<motion.div
								style={{ scaleX, opacity }}
								>
								<Box sx={{ my: { xs: 5, md: 0 } }}>
									<Image 
										alt=''
										src={phoneShadowImage}
										sizes="(min-width: 1024px) 300px, (min-width: 768px) 30vw, 200px"
										style={{ width: 'auto', height: 'auto' }}
									/>
								</Box>
							</motion.div></Box>
						
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
