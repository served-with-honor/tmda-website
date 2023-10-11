import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Chip from '@mui/material/Chip';
import AddIcon from '@mui/icons-material/Add';

import nexusImage from '../public/images/nexus-dbqs.png';
import mentalHealthImage from '../public/images/mental-health-evaluation.png';
import telemedicineImage from '../public/images/telemedicine-evaluations.png';
import rebuttalLetterImage from '../public/images/logo-rebuttal-letter.png';


const CustomListItem = ({ children }) => {
  return (
    <ListItem dense>
      <ListItemIcon sx={{ minWidth: 32 }}><AddIcon color='primary' /></ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </ListItem>
  );
}

export default [
  {
    title: 'Nexus Services',
    icon: { ...nexusImage, height: 40, width: 40},
    body:
      <>
        <Typography variant='body1' gutterBottom>
          We specialize in Nexus Letters for your previously diagnosed disability conditions, including:
        </Typography>
        <ol>
          <li>Direct Service Connections</li>
          <li>Secondary Service Connections </li>
          <li>Presumptive Service Connections </li>
        </ol>
        <Typography variant='subtitle2' component='p' gutterBottom>
          Get started by submitting these documents via your secure patient portal:
        </Typography>
        <List>
          <CustomListItem>DD214 <Chip label='Required' color='error' size='small' /></CustomListItem>
          <CustomListItem>Benefits Summary <Chip label='Required' color='error' size='small' /></CustomListItem>
          <CustomListItem>Current Treatment Records (including diagnosis) <Chip label='Required' color='error' size='small' /></CustomListItem>
          <CustomListItem>Blue Button Report</CustomListItem>
          <CustomListItem>Personal Statements</CustomListItem>
          <CustomListItem>Buddy Letters</CustomListItem>
          <CustomListItem>Medical Records</CustomListItem>
          <CustomListItem>Lab Tests/Imaging Studies</CustomListItem>
        </List>
      </>
  },
  {
    title: 'Mental Health Evaluation and IMO',
    icon: { ...mentalHealthImage, height: 40, width: 40},
    body:
      <>
        <Typography variant='body1'>
          Our licensed professionals conduct thorough chart reviews and provide the following:
        </Typography>
        <List>
          <CustomListItem>One-time mental health assessment, including a diagnosis if applicable.</CustomListItem>
          <CustomListItem>Comprehensive, evidence-based IMO (independent medical opinion) to help bolster your VA disability claim.</CustomListItem>
        </List>
        <Typography variant='subtitle2' component='p'>
          Before your appointment, please prepare the following documents for your patient portal:
        </Typography>
        
        <List>
          <CustomListItem>DD214 <Chip label='Required' color='error' size='small' /></CustomListItem>
          <CustomListItem>Benefits Summary <Chip label='Required' color='error' size='small' /></CustomListItem>
          <CustomListItem>Personal Statements</CustomListItem>
          <CustomListItem>Buddy Letters</CustomListItem>
          <CustomListItem>Medical Records</CustomListItem>
          <CustomListItem>Blue Button Report</CustomListItem>
        </List>
      </>
  },
  {
    title: 'Telemedicine Evals',
    icon: { ...telemedicineImage, height: 40, width: 40},
    body:
      <>
        <Typography variant='body1' gutterBottom>
          Our medical team offers telemedicine examinations for initial medical diagnoses and confirmation or updated evaluations of 21 applicable conditions.
        </Typography>
        <Typography variant='body2' gutterBottom>
          * See the full list of conditions we assess below.
        </Typography>
        <Typography sx={{ mb: 3 }} variant='body1'>
          No documentation is mandatory for this service, but we strongly recommend uploading documents to your patient portal for a more comprehensive evaluation.
        </Typography>
        <Typography variant='subtitle2' component='p'>Recommended Documents:</Typography>
        <List>
          <CustomListItem>DD214</CustomListItem>
          <CustomListItem>Benefits Summary</CustomListItem>
          <CustomListItem>Blue Button Report</CustomListItem>
          <CustomListItem>Personal Statements</CustomListItem>
          <CustomListItem>Buddy Letters</CustomListItem>
          <CustomListItem>Medical Records</CustomListItem>
        </List>
      </>
  },
  {
    title: 'Rebuttal Letters',
    icon: { ...rebuttalLetterImage, height: 40, width: 40},
    body:
      <>
        <Typography variant='body1' gutterBottom>
          Our Rebuttal Letters serve as timely responses, prepared on behalf of veterans who have received medical evidence documents from Telemedica to accompany their VA disability claims. These letters are exclusively available to clients who have received a denial letter for a claim for which we have previously provided support.
        </Typography>
        <Typography variant='body1'>
          Rebuttal Letters help to address incorrect or inaccurate statements contained within VA denial letters. Available for mental health and medical denials.
        </Typography>
      </>
  },
];
