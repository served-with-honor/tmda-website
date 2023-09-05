import { useRouter } from 'next/router';
import parse, { domToReact } from 'html-react-parser';
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddIcon from '@mui/icons-material/Add';
import { getPost } from '../../lib/api'
import Page from '../../components/Page'
import Link from '../../src/Link';
import { splitTitle } from '../../src/utils';
import settings from '../../src/siteSettings';
import { WPButtons } from '../../src/WPBlocks';

export default function Post({ post }) {
	const { author, tags, title, content, featuredImage, date, modifed } = post;
	const contentComponents = parse(content, { replace: replaceContent });
	const publishDate = new Date(date).toLocaleDateString();
	const modifedDate = modifed ? new Date(modifed).toLocaleDateString() : null;

	const router = useRouter();
  const handleTagClick = (slug) => router.push(`/blog?tag=${slug}`);

	const FancyTitle = () => {
		const { primaryText, preText, postText } = splitTitle(title);
		const secondaryStyles = { display: 'block', fontSize: '0.5em', fontWeight: 400, lineHeight: '1em' };

		return <>
			{preText && (
				<Box component='span' color='primary.main' sx={secondaryStyles}>
					{preText}
				</Box>
			)}
			{primaryText}
			{postText && (
				<Box component='span' color='primary.main' sx={secondaryStyles}>
					{postText}
				</Box>
			)}
		</>
	}

	return (
		<Page title={title}>
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
						<FancyTitle />
					</Typography>
					<Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
						<Avatar alt={author.name} src={author.image} sx={{ width: 48, height: 48 }}></Avatar>
						<Box>
							<Typography variant={'body1'}>By {author.name} - {publishDate}</Typography>
							{modifedDate && modifedDate !== publishDate ? (
								<Typography sx={{ py: 1 }} variant={'body2'}>Last Modified on {modifedDate}</Typography>
							) : null}
						</Box>
					</Stack>
					{tags ? (
						<Grid container spacing={1} sx={{ mt: 5 }}>
							{tags.map(({ slug, name }) => {
								const color = settings.articleTagColors[slug];
								return (
									<Grid item key={`post-tag-${slug}`}>
										<Chip
											label={name}
											onClick={() => handleTagClick(slug)}
											sx={color ? { color: '#fff', backgroundColor: color } : {}}
										/>
									</Grid>
								);
							})}
						</Grid>
					) : null}
				</Container>
			</Box>
			<Box sx={{ my: 10 }}>
				<Container>
					{contentComponents}
				</Container>
			</Box>
  	</Page>
  )
}

export const getServerSideProps = async ({ params }) => {
	const { post } = await getPost(params.slug);
	return { props: { post } }
}

const replaceContent = element => {

	const renderElementContents = (element) => {
		if (element.children) return element.children.map(item => {
			const { children, name, attribs, type } = item;
			if (attribs && 'style' in attribs) delete attribs.style;
			if (type === 'text') return item.data;
			if (name === 'a') return <Link {...attribs}>{domToReact(children)}</Link>
			
			return renderElementContents(item);
		});

		return domToReact(element);
	}

	const renderUnorderedList = (element) => (
		<List disablePadding>
			{element.children.map(item => item.type === 'tag' ? (
				<ListItem dense>
					<ListItemIcon sx={{ minWidth: 0, mr: 2 }}><AddIcon sx={{ color: 'primary.main' }} /></ListItemIcon>
					<ListItemText>{renderElementContents(item)}</ListItemText>
				</ListItem>
			) : null)}
		</List>
	);

	if (element.name === 'p') return <Typography variant='body1' my={3}>{renderElementContents(element)}</Typography>
	if (element.name === 'h1') return <Typography variant='h4' component='h2' color='secondary.main' my={6}>{domToReact(element.children)}</Typography>
	if (element.name === 'h2') return <Typography variant='h4' component='h2' color='secondary.main' my={6}>{domToReact(element.children)}</Typography>
	if (element.name === 'h3') return <Typography variant='h5' component='h3' color='secondary.main' my={5}>{domToReact(element.children)}</Typography>
	if (element.name === 'h4') return <Typography variant='h6' component='h4' color='secondary.main' my={4}>{domToReact(element.children)}</Typography>
	if (element.name === 'h5') return <Typography variant='h6' component='h5' color='secondary.main' my={3}>{domToReact(element.children)}</Typography>
	if (element.name === 'h6') return <Typography variant='h6' component='h6' color='secondary.main' my={2}>{domToReact(element.children)}</Typography>
	if (element.name === 'ul') return renderUnorderedList(element);
	if (element.name === 'hr') return <Divider />;

	if (element?.attribs?.class?.includes('wp-block-buttons')) return WPButtons(element);
	
	return element;
}