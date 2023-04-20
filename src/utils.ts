import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';

const slugify = (str: string) => str.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

const getSocialIcon = (str: string) => {
  if (str.includes('facebook')) return { name: 'Facebook', text: 'Like on Facebook', Icon: FacebookIcon };
  if (str.includes('youtube')) return { name: 'YouTube', text: 'Subscribe on YouTube', Icon: YouTubeIcon };
  if (str.includes('linkedin')) return { name: 'LinkedIn', text: 'Follow on LinkedIn', Icon: LinkedInIcon };
  if (str.includes('instagram')) return { name: 'Instagram', text: 'Follow on Instagram', Icon: InstagramIcon };
  return { name: 'Site', text: '', Icon: LinkIcon };
}

export {
  slugify,
  getSocialIcon,
}