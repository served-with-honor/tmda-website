import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Link from '../src/Link';
import { slugify } from '../src/utils';
import settings from '../src/siteSettings';
import { splitTitle } from '../src/utils';

export default function ArticleCard({ isLoading = false, slug: articleSlug, image, categories, title, excerpt }) {
  const router = useRouter();
  const handleClick = (slug) => router.push(`/blog/${slug}`);
  const url = articleSlug ? `/blog/${articleSlug}` : null;

  const FancyTitle = () => {
		const { primaryText, preText, postText } = splitTitle(title);
		const secondaryStyles = { display: 'block', lineHeight: '1em' };

		return <>
			{preText && (
				<Typography variant='subtitle2' component='span' sx={secondaryStyles}>
					{preText}
				</Typography>
			)}
			{primaryText}
			{postText && (
				<Typography variant='subtitle2' component='span' sx={secondaryStyles}>
					{postText}
				</Typography>
			)}
		</>
	}
	
  return (
    <motion.div
      style={{ height: '100%' }}
      whileHover={!isLoading ? {
        scale: 1.05,
        transition: { duration: 0.25 },
      } : null}
    >
      <Card sx={{ cursor: 'pointer', height: '100%' }}>
        {image ? (
          <CardMedia sx={{ height: '15rem' }} image={image} title="" onClick={() => handleClick(articleSlug)} />
          ) : isLoading ? (
            <Skeleton variant="rectangular" height={150} />
        ) : null}
        <CardContent>

          {/* Categories */}
          {categories && categories.length > 0 ? (
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', marginBottom: 2 }}>
              {categories.map(({ slug: categorySlug, name }) => {
                const color = settings.articleCategoryColors[categorySlug];
                return <Chip
                  key={`post-listing-${categorySlug}-category-${categorySlug || slugify(name)}`}
                  variant={'contained'}
                  component="a"
                  label={name}
                  sx={color ? { color: '#fff', backgroundColor: color } : {}}
                  size={'small'}
                  clickable
                  href={`/blog?category=${categorySlug}`}
                />
              })}
            </Stack>
          ) : isLoading ? (
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', marginBottom: 2 }}>
              <Skeleton variant='rounded' width={100} height={20} sx={{ borderRadius: 10 }} />
              <Skeleton variant='rounded' width={100} height={20} sx={{ borderRadius: 10 }} />
            </Stack>
          ) : null}

          <Box onClick={() => handleClick(articleSlug)}>
            
            {/* TITLE */}
            {title ? (
              <Link href={url} color={'inherit'} underline='none'>
                <Typography variant={'h5'} component={'p'} sx={{ marginBottom: 2, lineHeight: 1.2 }}>{<FancyTitle />}</Typography>
              </Link>
            ) : isLoading ? (
              <Typography variant={'h5'} sx={{ marginBottom: 2, lineHeight: 1.2 }}>
                <Skeleton variant='text' />
                <Skeleton variant='text' width='50%' />
              </Typography>
            ) : null}
            
            <Typography variant={'body1'} component='div'>
              {excerpt ? excerpt : isLoading ? <>
                <Skeleton variant='text' />
                <Skeleton variant='text' width={'80%'} />
                <Skeleton variant='text' width={'90%'} />
                <Skeleton variant='text' width={'50%'}  />
              </> : null}
              {url ? <MuiLink component='span' aria-hidden={true}>continue reading</MuiLink> : null}
            </Typography>
            
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
