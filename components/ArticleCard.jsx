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
import Link from '../src/Link';
import { slugify } from '../src/utils';
import settings from '../src/siteSettings';
import { splitTitle } from '../src/utils';

export default function ArticleCard({ isLoading = false, slug: articleSlug, image, tags, title, excerpt }) {
  const router = useRouter();
  const handleClick = (a) => router.push(`/blog${a}`);
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
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.25 },
      }}
    >
      <Card sx={{ cursor: 'pointer', height: '100%' }}>
        {image ? (
          <CardMedia sx={{ height: '15rem' }} image={image} title="" onClick={() => handleClick(`/${articleSlug}`)} />
          ) : isLoading ? (
            <Skeleton variant="rectangular" height={150} />
        ) : null}
        <CardContent>

          {/* Tags */}
          {tags && tags.length > 0 ? (
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', marginBottom: 2 }}>
              {tags.map(({ slug: tagSlug, name }) => {
                const color = settings.articleTagColors[tagSlug];
                return <Chip
                  key={`post-listing-${articleSlug}-tag-${tagSlug || slugify(name)}`}
                  variant={'contained'}
                  label={name}
                  sx={color ? { color: '#fff', backgroundColor: color } : {}}
                  size={'small'}
                  onClick={() => handleClick(`?tag=${tagSlug}`)}
                />
              })}
            </Stack>
          ) : isLoading ? (
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', marginBottom: 2 }}>
              <Skeleton variant='rounded' width={100} height={20} sx={{ borderRadius: 10 }} />
              <Skeleton variant='rounded' width={100} height={20} sx={{ borderRadius: 10 }} />
            </Stack>
          ) : null}

          <Box onClick={() => handleClick(`/${articleSlug}`)}>
            
            {/* TITLE */}
            {title ? (
              <Link href={url} color={'inherit'} underline='none'>
                <Typography variant={'h5'} component={'p'} sx={{ marginBottom: 2, lineHeight: 1.2 }}>{title ? <FancyTitle /> : <Skeleton />}</Typography>
              </Link>
            ) : isLoading ? (
              <Typography variant={'h5'} sx={{ marginBottom: 2, lineHeight: 1.2 }}>
                <Skeleton variant='text' />
                <Skeleton variant='text' width='50%' />
              </Typography>
            ) : null}
            
            <Typography variant={'body1'}>
              {excerpt ? `${excerpt}...` : isLoading ? <>
                <Skeleton variant='text' />
                <Skeleton variant='text' width={'80%'} />
                <Skeleton variant='text' width={'90%'} />
                <Skeleton variant='text' width={'50%'}  />
              </> : null}
              {url ? <Link href={url} aria-hidden={true}>continue reading</Link> : null}
            </Typography>
            
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
