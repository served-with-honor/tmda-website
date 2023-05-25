import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Stack,
  Typography
} from '@mui/material';
import Link from '../src/Link';
import { slugify } from '../src/utils';
import settings from '../src/siteSettings';

export default function ArticleCard({ slug, image, tags, title, excerpt = settings.dummyText.generateWords(32) }) {
  const router = useRouter();
  const handleClick = (a) => router.push(`/blog${a}`);
  const url = `/blog/${slug}`;
  
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
          <CardMedia sx={{ height: '15rem' }} image={image} title="" onClick={() => handleClick(`/${slug}`)} />
        ) : null}
        <CardContent>

          {/* Tags */}
          {tags && tags.length > 0 ? (
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', marginBottom: 2 }}>
              {tags.map(({ slug: tagSlug, name }) => {
                const color = settings.articleCategoryColors[tagSlug];
                return <Chip
                  key={`post-listing-${slug}-category-${tagSlug || slugify(name)}`}
                  variant={'contained'}
                  label={name}
                  sx={color ? { color: '#fff', backgroundColor: color } : {}}
                  size={'small'}
                  onClick={() => handleClick(`?category=${slug}`)}
                />
              })}
            </Stack>
          ) : null}

          <Box onClick={() => handleClick(`/${slug}`)}>
            
            {/* TITLE */}
            {title ? (
              <Link href={url} color={'inherit'} underline='none'>
                <Typography variant={'h5'} component={'p'} sx={{ marginBottom: 2, lineHeight: 1.2 }}>{title}</Typography>
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
