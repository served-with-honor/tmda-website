import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Stack,
  Typography
} from '@mui/material';
import Link from '../src/Link';
import { slugify } from '../src/utils';
import settings from '../src/siteSettings';

export default function ArticleCard({ slug, image, tags, title, excerpt }) {
  const router = useRouter();
  const url = `/blog/${slug}`;
  
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.25 },
      }}
    >
      <Card sx={{ cursor: 'pointer', height: '100%' }} onClick={() => router.push(url)}>
        {image ? (
          <CardMedia sx={{ height: '15rem' }} image={image} title="" />
        ) : null}
        <CardContent>
          {tags && tags.length > 0 ? <Tags items={tags} parentSlug={slug} /> : null}
          {title ? <Link href={url} color={'inherit'} underline='none'><Typography variant={'subtitle1'}>{title}</Typography></Link> : null}
          <Typography variant={'body1'}>
            {excerpt ? excerpt : null}
            <Link href={url} aria-hidden={true}>continue reading</Link>
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const Tags = ({ items, parentSlug }) => {
  return (
    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', marginBottom: 1 }}>
      {items.map(({ slug, name }) => {
        const key = `post-listing-${parentSlug}-category-${slug || slugify(name)}`;
        const color = settings.articleCategoryColors[slug];
        return <Chip key={key} variant={'outlined'} label={name} color={color || 'default'} size={'small'} />;
      })}
    </Stack>
  );
}