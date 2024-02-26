import { useRouter } from 'next/router';
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import FancyTitle from './FancyTitle';
import { getCategoryColor } from '../src/utils';

export default function BlogHero({ title, author, date, modifed, categories, featuredImage }) {
	const router = useRouter();
  const handleCategoryClick = (slug) => router.push(`/blog?category=${slug}`);
	
	const publishDate = date ? new Date(date).toLocaleDateString() : null;
	const modifedDate = modifed ? new Date(modifed).toLocaleDateString() : null;

	return (
		<Box sx={{
			pt: 15,
			pb: 10,
			width: '100%',
			backgroundColor: 'primary.100',
			backgroundImage: `url(${featuredImage})`,
			backgroundSize: "cover",
			backgroundPosition: 'center',
			backgroundBlendMode: 'overlay',
		}}
		>
			<Container>
				<Typography variant='h1' color='secondary' gutterBottom>
					<FancyTitle title={title} styles={{ color: 'primary.main', display: 'block', fontSize: '0.5em', fontWeight: 400, lineHeight: '1em' }} />
				</Typography>

				{author || publishDate ? (
					<Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
						{author ? <>
							<Avatar alt={author.name} src={author.image} sx={{ width: 48, height: 48 }}></Avatar>
							<Box>
								<Typography variant={'body1'}>By {author.name}</Typography>
							</Box>
						</> : null}
						{publishDate ? (
							<Box>
								<Typography variant={'body1'}>{publishDate}</Typography>
								{modifedDate && modifedDate !== publishDate ? (
									<Typography sx={{ py: 1 }} variant={'body2'}>Last Modified on {modifedDate}</Typography>
								) : null}
							</Box>
						) : null}
					</Stack>
				) : null}

				{categories ? (
					<Grid container spacing={1} sx={{ mt: 5 }}>
						{categories.map(({ slug, name }) => {
							const color = getCategoryColor(slug);
							return (
								<Grid item key={`post-category-${slug}`}>
									<Chip
										label={name}
										onClick={() => handleCategoryClick(slug)}
										sx={color ? { color: '#fff', backgroundColor: color } : {}}
									/>
								</Grid>
							);
						})}
					</Grid>
				) : null}
			</Container>
		</Box>
	);
}