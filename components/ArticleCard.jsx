import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '../src/Link';
import { slugify } from '../src/utils';
import settings from '../src/siteSettings';
import { splitTitle } from '../src/utils';

export default function ArticleCard({ slug: articleSlug, image, tags, title, excerpt = settings.dummyText.generateWords(32) }) {
  const router = useRouter();
  const handleClick = (a) => router.push(`/blog${a}`);
  const url = `/blog/${articleSlug}`;

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
          ) : null}

          <Box onClick={() => handleClick(`/${articleSlug}`)}>
            
            {/* TITLE */}
            {title ? (
              <Link href={url} color={'inherit'} underline='none'>
                <Typography variant={'h5'} component={'p'} color='secondary' sx={{ marginBottom: 2, lineHeight: 1.2 }}>
                  <FancyTitle />
                </Typography>
              </Link>
            ) : null}
            
            <Typography variant={'body1'}>
              {excerpt ? `${excerpt}...` : null}
              <Link href={url} aria-hidden={true}>continue reading</Link>
            </Typography>
            
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
