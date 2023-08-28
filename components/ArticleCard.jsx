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

export default function ArticleCard({ isLoading = false, slug: articleSlug, image, tags, title, excerpt }) {
  const router = useRouter();
  const handleClick = (a) => router.push(`/blog${a}`);
  const url = `/blog/${articleSlug}`;

  return (
    <motion.div
      style={{ height: '100%' }}
      whileHover={!isLoading ? {
        scale: 1.05,
        transition: { duration: 0.25 },
      } : null}
    >
      <Card sx={{ cursor: 'pointer', height: '100%' }}>
        {isLoading ? (
          <Skeleton variant={'rectangle'} height={'15rem'} />
        ) : image ? (
          <CardMedia sx={{ height: '15rem' }} image={image} title="" onClick={() => handleClick(`/${articleSlug}`)} />
        ) : null}
        <CardContent>

        {/* Tags */}
        {tags || isLoading ? (
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', marginBottom: 2 }}>
            {isLoading ? <>
              <Skeleton variant={'rounded'} height={24} width={80} />
              <Skeleton variant={'rounded'} height={24} width={120} />
            </> : tags.map(({ slug: tagSlug, name }) => {
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
          
          <Box onClick={() => !isLoading ? handleClick(`/${articleSlug}`) : null}>
            
            {/* TITLE */}
            {title || isLoading ? (
              <Link href={url} color={'inherit'} underline='none'>
                <Typography variant={'h5'} component={'p'} sx={{ marginBottom: 2, lineHeight: 1.2 }}>
                  {isLoading ? <>
                    <Skeleton />
                    <Skeleton width={'90%'} />
                  </> : title}
                </Typography>
              </Link>
            ) : null}
            
            {excerpt || isLoading ? (
              <Typography variant={'body1'}>
                {isLoading ? <>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </> : <>
                  {`${excerpt}... `}
                  <Link href={url} aria-hidden={true} whiteSpace={'nowrap'}>continue reading</Link>
                </>}
              </Typography>
            ): null}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
