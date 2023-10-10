import Typography from '@mui/material/Typography';
import nexusImage from '../public/images/nexus-dbqs.png';
import mentalHealthImage from '../public/images/mental-health-evaluation.png';
import telemedicineImage from '../public/images/telemedicine-evaluations.png';
import rebuttalLetterImage from '../public/images/logo-rebuttal-letter.png';

export default [
  {
    title: 'Nexus Services',
    icon: { ...nexusImage, height: 40, width: 40},
    body:
      <>
        <Typography variant='body1'>
          We specialize in Nexus Letters for your previously diagnosed disability conditions, including:
        </Typography>
        <ol>
          <Typography variant='body1' component='li'>Direct Service Connections</Typography>
          <Typography variant='body1' component='li'>Secondary Service Connections </Typography>
          <Typography variant='body1' component='li'>Presumptive Service Connections </Typography>
        </ol>
        <Typography variant='body1'>
          Get started by submitting these documents via your secure patient portal:
        </Typography>
        
        <Typography sx={{ pt: 2 }} variant='body1'>Required Documentation:</Typography>
        <ul>
          <Typography variant='body1'>+ DD214</Typography>
          <Typography variant='body1'>+ Benefits Summary</Typography>
          <Typography variant='body1'>+ Current Treatment Records (including diagnosis).</Typography>
        </ul>
        <Typography variant='body1'>Recommended Docs:</Typography>
        <ul>
          <Typography variant='body1'>+ Blue Button Report</Typography>
          <Typography variant='body1'>+ Personal Statements</Typography>
          <Typography variant='body1'>+ Buddy Letters</Typography>
          <Typography variant='body1'>+ Medical Records</Typography>
          <Typography variant='body1'>+ Lab Tests/Imaging Studies</Typography>
        </ul>
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
        <ul>
          <Typography variant='body1'>+ One-time mental health assessment, including a diagnosis if applicable.</Typography>
          <Typography variant='body1'>+ Comprehensive, evidence-based IMO (independent medical opinion) to help bolster your VA disability claim.</Typography>
        </ul>
        <Typography variant='body1'>
          Before your appointment, please prepare the following documents for your patient portal:
        </Typography>
        
        <Typography sx={{ pt: 2 }} variant='body1'>Required:</Typography>
        <ul>
          <Typography variant='body1'>+ DD214</Typography>
          <Typography variant='body1'>+ Benefits Summary</Typography>
        </ul>
        <Typography variant='body1'>Recommended:</Typography>
        <ul>
          <Typography variant='body1'>+ Personal Statements</Typography>
          <Typography variant='body1'>+ Buddy Letters</Typography>
          <Typography variant='body1'>+ Medical Records</Typography>
          <Typography variant='body1'>+ Blue Button Report</Typography>
        </ul>
      </>
  },
  {
    title: 'Telemedicine Evals',
    icon: { ...telemedicineImage, height: 40, width: 40},
    body:
      <>
        <Typography variant='body1'>
        Our medical team offers telemedicine examinations for initial medical diagnoses and confirmation or updated evaluations of 21 applicable conditions.* See the full list of conditions we assess below.
        </Typography>
        <Typography sx={{ pt: 2 }} variant='body1'>
          No documentation is mandatory for this service, but we strongly recommend uploading documents to your patient portal for a more comprehensive evaluation. Here are the recommended documents:
        </Typography>
        <Typography variant='body1'>Recommended Documents:</Typography>
        <ul>
          <Typography variant='body1'>+ DD214</Typography>
          <Typography variant='body1'>+ Benefits Summary</Typography>
          <Typography variant='body1'>+ Blue Button Report</Typography>
          <Typography variant='body1'>+ Personal Statements</Typography>
          <Typography variant='body1'>+ Buddy Letters</Typography>
          <Typography variant='body1'>+ Medical Records</Typography>
        </ul>
      </>
  },
  {
    title: 'Rebuttal Letters',
    icon: { ...rebuttalLetterImage, height: 40, width: 40},
    body:
      <>
        <Typography variant='body1'>
          Our Rebuttal Letters serve as timely responses, prepared on behalf of veterans who have received medical evidence documents from Telemedica to accompany their VA disability claims. These letters are exclusively available to clients who have received a denial letter for a claim for which we have previously provided support.
        </Typography>
        <Typography sx={{pt: 2}} variant='body1'>
          Rebuttal Letters help to address incorrect or inaccurate statements contained within VA denial letters. Available for mental health and medical denials.
        </Typography>
      </>
  },
];
