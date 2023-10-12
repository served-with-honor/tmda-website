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

// TODO - add support for international numbers
function formatPhoneNumber(phone: string, separator: string) {
  const cleaned = phone.toString().replace(/\D/g, '');
  const matches = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (!matches) return;

  const intlCode = (matches[1] ? '+1' : '');
  const parts = matches.splice(2);

  if(separator) return `${intlCode} ${parts.join(separator)}`.trim();
  return `${intlCode} (${parts[0]}) ${parts[1]}-${parts[2]}`.trim();
}

function truncateString(string, limit, displayEllipses) {
  if (!string) return null;
  if (!limit || string.length <= limit) return string;

  return `${string.substring(0, limit).trim()}${displayEllipses ? '...' : null}`;
}

const splitTitle = (title) => {
  let primaryText = title;
  let preText;
  let postText;

  if (title.includes(':')) {
    primaryText = title.split(':')[1];
    preText = title.split(':')[0];
  } else if (title.includes('(')) {
    primaryText = title.split('(')[0];
    postText = title.split('(')[1].replace(')', '');
  }

  return { preText, primaryText, postText }
}

const parserStripStyles = (attribs) => {
	if (attribs && 'style' in attribs) {
		delete attribs.style;
	}
}

const parserFixClass = (attribs) => {
	if (attribs && 'class' in attribs) {
		attribs.className = attribs.class;
		delete attribs.class;
	}
}

export {
  slugify,
  getSocialIcon,
  formatPhoneNumber,
  truncateString,
  splitTitle,
  parserStripStyles,
  parserFixClass,
}