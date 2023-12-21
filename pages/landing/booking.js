import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import settings from '../../src/siteSettings';
import Counter from '../../components/Counter'
import Logo from '../../public/images/logo-white.svg';
import BookingWidget from '../../components/BookingWidget'
import image1 from '../../public/images/couple-on-couch-with-laptop-and-dog.jpg'
import nexusImage from '../../public/images/nexus-dbqs.svg';
import mentalHealthImage from '../../public/images/mental-health-evaluation.svg';
import rebuttalLetterImage from '../../public/images/logo-rebuttal-letter.svg';
import veteranWithPhone from '../../public/images/veteran-with-phone-cutout.png';
import clientPhotoJim from '../../public/images/client-photo-jim.jpg';
import ListItemAvatar from '@mui/material/ListItemAvatar';

// https://learn.telemedicallc.com/15-minute-consult-booking1693585205261?preview=true&track=0&updated_at=a392a0c93b6be40f9542fb632cc8f071v2#section--88576
export default function LandingBookingPage() {
	const firstYear = settings.copyrightYearInitial;
	const thisYear = new Date().getFullYear();
	const copyrightYear = thisYear > firstYear ? `${firstYear} - ${thisYear}` : firstYear;

	const reviews = [
		{
			title: 'I highly recommend Telemedica!',
			text: 'As a veteran of the Marine Corps I have found that most health professionals don\'t necessarily understand common ailments and symptoms that vets face as a result of our military service. Telemedica gets it! I\'ve used them twice now and have been very happy with the attention and understanding that they have toward the military veteran.They understand when we relate our military experience and how it has or still affects us.I highly recommend Telemedica!',
			author: 'Greg R.',
		},
		{
			title: 'The most positive and best experience to a medical appointment I\'ve ever had.',
			text: 'With evolving technology comes our ability to conduct safe and secure medical appointments through a video conferencing system.Telemedica LLC provided an approach to my appointment that both efficiently and effective.My doctor was prompt, even early to the appointment, there was a period of introduction and discussion to manage expectation, and then a very professional doctor\'s appointment conducted in the privacy of our spaces. The most positive and best experience to a medical appointment I\'ve ever had.Highly, highy, recommend Telemedica LLC.',
			author: 'Joey M.',
		},
		{
			title: 'I would recommend Telemedica 100 times over...',
			text: 'Just recently had my evaluation.My doctor was punctual, informative, and asked the tough questions and pertinent questions that needed to be asked but still was very respectful and empathetic.I would recommend Telemedica 100 times over to get the job done.They were also very flexible with my schedule to get appointment in as soon as possible.',
			author: 'Aaron H.',
		},
		{
			title: 'Telemedica ROCKS!',
			text: 'As a Veteran I know that Telemedica ROCKS! I have had 2 AWESOME EXPERIENCES with this healthcare company.Their website is USER FRIENDLY! I know this due to being 64 years young.Some one is always ready to help via phone, patient portal and email.Their response time is spot on! Thank you Telemedica!',
			author: 'Nell G.',
		},
		{
			title: 'I felt very comfortable...',
			text: 'I was very happy with the professionalism with my doctor.She was caring, empathetic, and professional.I felt very comfortable that I could open up and share things with her that I could not otherwise share with others, even close friends.Thank you!',
			author: 'Thomas E.',
		},
	];

	return (
		<Box
			// title={'Get Your Nexus Letter in 48 Hours - Book Your FREE Call Today!'}
			// descrtipion={'Lack of medical evidence is the #1 reason why VA disability claims are denied. Don\'t let this hold you back - get your Nexus Letter FAST! Book with one of Telemedica\'s subject matter experts and see if a Nexus Letter is right for you.'}
		>

			{/* HERO */}
			<Box sx={{
				paddingTop: 3,
				paddingBottom: 12,	
				background: `url(${image1.src}) center / cover no-repeat`,
				// minHeight: '100vh',
			}}>
				<Container sx={{ height: '100%' }}>
					<Box sx={{ mb: 3 }}><Image src={Logo} alt={`${settings.name} logo`} width={225} height={49} /></Box>
					<Box sx={{
						color: 'common.white',
						maxWidth: 600,
					}}>
						<Typography variant='h2' component='h1' sx={{ mb: 3 }}>Increase Your Chances of Winning Your VA Claim</Typography>
						<Typography variant='lead' sx={{ mb: 3 }}>Those who file their VA disability claim with medical evidence are MORE LIKELY to win their claim compared to veterans who do not file with medical evidence.</Typography>
						<Typography variant='lead' sx={{ mb: 3 }}>Book your Mental Health Evaluation, Nexus Letter service, or Telemedicine Evaluation with Telemedica TODAY!</Typography>
						<Button variant='contained' color='primary' size='large' href='#booking'>Book Now</Button>
					</Box>
				</Container>
			</Box>

			<Container maxWidth='sm'>
				<Paper id='booking' sx={{ my: -5, p: 3, zIndex: 1, position: 'relative' }}>
					<BookingWidget />
				</Paper>
			</Container>

			<Box sx={{ backgroundColor: 'grey.100', py: 12, textAlign: 'center' }}>
				<Container>
					<Typography variant='h2' color='primary' gutterBottom>Medical Evidence To Fit Your Needs!</Typography>
					<Typography variant='lead' sx={{ mb: 10 }}>Telehealth Services from Telemedica</Typography>
				
					<Grid container spacing={10}>
						<Grid item xs={12} md={4}>
							<Box sx={{ mb: 3 }}><Image src={nexusImage} width={64} /></Box>
							<Typography color='secondary' variant='h5' component='h3' sx={{ mb: 3 }}>DBQ and Nexus Letters</Typography>
							<Typography variant='body1' gutterBottom>We specialize in Nexus Letters for your previously diagnosed disability conditions.</Typography>
							<Typography variant='body2'>(No appointment required)</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Box sx={{ mb: 3 }}><Image src={mentalHealthImage} width={64} /></Box>
							<Typography color='secondary' variant='h5' component='h3' sx={{ mb: 3 }}>Mental Health Evals</Typography>
							<Typography variant='body1'>Our licensed professionals conduct thorough chart reviews and provide a one-time mental health assessment, including a diagnosis (if applicable) OR a comprehensive, evidence-based IMO (independent medical opinion).</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Box sx={{ mb: 3 }}><Image src={rebuttalLetterImage} width={64} /></Box>
							<Typography color='secondary' variant='h5' component='h3' sx={{ mb: 3 }}>Rebuttal Letters</Typography>
							<Typography variant='body1'>Our medical team offers telemedicine examinations for initial medical diagnoses and confirmation or updated evaluations of 20 applicable conditions.</Typography>
						</Grid>
					</Grid>

				</Container>
			</Box>

			<Box sx={{ background: 'linear-gradient(-135deg, #e2f5f1 0%, #d5d9e4 100%)', pt: 12 }}>
				<Container>
					<Typography variant='h2' color='secondary' align='center' sx={{ mb: 6 }}>
						The #1 Mistake Veterans Make
						<Box component='span' sx={{ color: 'secondary.800', display: 'block', fontWeight: 400 }}>When Filing For VA Benefits</Box>
					</Typography>
					<Grid container spacing={6}>
						<Grid item xs={12} md={6} alignSelf={'end'}>
							<Image src={veteranWithPhone} style={{ maxWidth: '100%', height: 'auto' }} />
						</Grid>
						<Grid item xs={12} md={6} sx={{ pb: 12 }}>
							<Typography variant='lead' sx={{ mb: 5 }}>A Lack Of Medical Evidence Is The #1 Reason Va Disability Claims Are Denied.</Typography>
							<Typography variant='subtitle1' gutterBottom>But why is medical evidence so important?</Typography>
							<List>
								<ListItem sx={{ alignItems: 'flex-start' }}>
									<ListItemIcon sx={{ mt: 0.5, minWidth: 32 }}><AddIcon color='primary'/></ListItemIcon>
									<ListItemText>Medical evidence provides PROOF to the VA that a veteran's disability was caused by the veteran's time in service.</ListItemText>
								</ListItem>
								<ListItem sx={{ alignItems: 'flex-start' }}>
									<ListItemIcon sx={{ mt: 0.5, minWidth: 32 }}><AddIcon color='primary'/></ListItemIcon>
									<ListItemText sx={{ textTransform: 'uppercase' }}>Medical evidence is the missing link between your time in service and your current disability!</ListItemText>
								</ListItem>
								<ListItem sx={{ alignItems: 'flex-start' }}>
									<ListItemIcon sx={{ mt: 0.5, minWidth: 32 }}><AddIcon color='primary'/></ListItemIcon>
									<ListItemText>Telemedica - The #1 Most Trusted Telehealth Provider for Veterans - can provide this missing link through our high-quality medical evidence for VA disability claims.</ListItemText>
								</ListItem>
							</List>
							<Typography variant='h4' color='secondary' component='p' sx={{ textAlign: 'center', mt: 5, textTransform: 'uppercase' }}>Stop fighting, start winning.</Typography>
							<Typography variant='lead' component='p' sx={{ textAlign: 'center', mb: 5 }}>Book your medical evidence service with Telemedica today!</Typography>
							<Box sx={{ textAlign: 'center' }}><Button variant='contained' color='primary' size='large' href='#booking'>Book Now</Button></Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box sx={{ py: 12 }}>
				<Container maxWidth='md'>
					<Typography variant='h2' color='secondary' sx={{ textAlign: 'center' }}>What Veterans Are Saying</Typography>
					<Box sx={{ marginY: 5 }}><Testimonials items={reviews} /></Box>
					<Box sx={{ textAlign: 'center' }}><Button variant='contained' color='primary' size='large' href='#booking'>Book Now</Button></Box>
				</Container>
			</Box>

			<Box sx={{ background: 'linear-gradient(-135deg, #e2f5f1 0%, #d5d9e4 100%)', py: 12 }}>
				<Container>
					<Typography variant='h2' color='secondary' sx={{ textAlign: 'center', mb: 6 }}>Why Choose Use?</Typography>
					<Grid container spacing={6} sx={{ mb: 6 }}>
						<Grid item xs={12} md={6}>
							<Typography variant='h4' component='p' color='primary.800' sx={{ textAlign: 'center', mb: 3 }}>
								We've Helped More Than
								<Typography variant='h2' component='span' color='primary.600' sx={{ display: 'block' }}><Counter to={15000} /> Veterans</Typography>
								Win Their Claim Through
							</Typography>
							<List sx={{ mb: 3 }}>
								<ListItem>
									<ListItemIcon><CheckCircleIcon color='secondary' /></ListItemIcon>
									<ListItemText>Licensed, trusted providers</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemIcon><CheckCircleIcon color='secondary' /></ListItemIcon>
									<ListItemText>High-quality medical evidence</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemIcon><CheckCircleIcon color='secondary' /></ListItemIcon>
									<ListItemText>90% success rate</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemIcon><CheckCircleIcon color='secondary' /></ListItemIcon>
									<ListItemText>Fast turnaround times, GUARANTEED!</ListItemText>
								</ListItem>
							</List>
							<Box sx={{ textAlign: 'center' }}><Button variant='contained' color='secondary' size='large' href='#booking'>Get Your Medical Evidence Now</Button></Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Avatar src={clientPhotoJim.src} sx={{ border: 'solid', borderColor: 'common.white', borderWidth: 10, boxShadow: 3, width: 200, height: 200, mx: 'auto', mb: 3 }} />
							<Typography variant='h6' component='p' sx={{ textAlign: 'center', mb: 3 }}>I wholeheartedly recommend Telemedica...</Typography>
							<Typography variant='body1' gutterBottom>I was quite nervous at the beginning of the IMO; however, Dr. Benton-Johnson quickly helped me relax well enough to actually enjoy what I feared would be an ordeal.</Typography>
							<Typography variant='body1' gutterBottom>I think I even kept her over the allotted time! She was efficient and thorough as well as pleasant. I wholeheartedly recommend Telemedica LLC.</Typography>
							<Typography variant='subtitle2' align='right'>&mdash; Jim Young</Typography>
						</Grid>
					</Grid>
					<Typography variant={'body1'} align='center'>When you choose Telemedica, you choose providers who understand you, see you in your fight, and are experts in crafting high-quality medical evidence <strong>that wins VA claims</strong>. Our network of trusted providers understands the unique needs of the veteran community. Telemedica providers bring a wealth of experience, having dedicated themselves to serving veterans, some as military spouses, and others as veterans who have walked the same path. Don't leave the success of your claim to chance; get connected with a medical evidence expert today!</Typography>
				</Container>
			</Box>
			
			<Box sx={{ py: 12 }}>
				<Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
					<Typography variant='h2' color='secondary'>How It Works</Typography>
					<Typography variant='lead'>Get Your Medical Evidence in 5 Easy Steps!</Typography>
					<List sx={{ maxWidth: 720 }}>
						<ListItem alignItems='flex-start'>
							<ListItemAvatar><Avatar sx={{bgcolor: 'secondary.main'}}>1</Avatar></ListItemAvatar>
							<ListItemText 
								primary='Book Online:' 
								secondary='Choose a service a book online through our booking portal.'
								primaryTypographyProps={{variant: 'h6', component: 'h3'}}
								secondaryTypographyProps={{variant: 'body1'}}
							/>
						</ListItem>
						<ListItem alignItems='flex-start'>
							<ListItemAvatar><Avatar sx={{bgcolor: 'secondary.main'}}>2</Avatar></ListItemAvatar>
							<ListItemText 
								primary='Complete Intake:' 
								secondary='Register in the Patient Portal, fill out intake forms, pay remaining balance, and upload required documents (DD214, benefits summary, etc).'
								primaryTypographyProps={{variant: 'h6', component: 'h3'}}
								secondaryTypographyProps={{variant: 'body1'}}
							/>
						</ListItem>
						<ListItem alignItems='flex-start'>
							<ListItemAvatar><Avatar sx={{bgcolor: 'secondary.main'}}>3</Avatar></ListItemAvatar>
							<ListItemText 
								primary='Connect:' 
								secondary='Connect with your provider via our convenient Telehealth platform and receive your medical evidence. You will receive an email to join your appointment.'
								primaryTypographyProps={{variant: 'h6', component: 'h3'}}
								secondaryTypographyProps={{variant: 'body1'}}
							/>
						</ListItem>
						<ListItem alignItems='flex-start'>
							<ListItemAvatar><Avatar sx={{bgcolor: 'secondary.main'}}>4</Avatar></ListItemAvatar>
							<ListItemText 
								primary='Medical Evidence:' 
								secondary='Receive your expert medical evidence from our professional independent providers directly to your patient portal.'
								primaryTypographyProps={{variant: 'h6', component: 'h3'}}
								secondaryTypographyProps={{variant: 'body1'}}
							/>
						</ListItem>
						<ListItem alignItems='flex-start'>
							<ListItemAvatar><Avatar sx={{bgcolor: 'secondary.main'}}>5</Avatar></ListItemAvatar>
							<ListItemText 
								primary='Submit Your Claim:' 
								secondary='After you receive your medical, your VA claim submission is in your hands! Use your documentation to bolster your claim.'
								primaryTypographyProps={{variant: 'h6', component: 'h3'}}
								secondaryTypographyProps={{variant: 'body1'}}
							/>
						</ListItem>
					</List>
					<Box sx={{ textAlign: 'center' }}><Button variant='contained' color='primary' size='large' href='#booking'>Book Now</Button></Box>
				</Container>
			</Box>

			<Box sx={{ backgroundColor: 'secondary.700', color: 'common.white', py: 12 }}>
				<Container>
					<Grid container spacing={5}>
						<Grid item xs={12} md={6}>
							<LiteYouTubeEmbed
								id="AI7CW81RHzw"
								title="video_title"
								aspectWidth={16}
								aspectHeight={9}
								params={`rel=0&color=white`}
							/>
						</Grid>
						<Grid item xs={12} md={6} alignSelf='center'>
							<Typography variant='h4' component='h2' align='center' sx={{ mb: 5 }}>The Medical Evidence Experts!</Typography>
							<Typography variant='body1' align='center'>We connect you to licensed providers all over the US! Many of our providers are veterans themselves and have experience working with the VA. Find out more about the company by veterans, for veterans!</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box sx={{ backgroundColor: 'grey.100', py: 1 }}>
				<Container>
				<Typography variant={'body2'} align='center'>Copyright &copy; {copyrightYear} | {settings.company}</Typography>
				</Container>
			</Box>
			
		</Box>
	)
}



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
          const title = 'title' in item ? item.title : null;
          const text = 'text' in item ? item.text : item;
          const author = 'author' in item ? item.author : null;
          return (
            <Box sx={{ padding: 1, mb: 3 }} key={`testimonials-items-${index}`}>
              <Paper sx={{ borderRadius: 5, padding: { xs: 3, md: 5 } }} elevation={5}>
                {title && <Typography variant={'h4'} component='p' gutterBottom>{title}</Typography>}
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
