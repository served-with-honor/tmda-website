import Typography from '@mui/material/Typography';
import nexusImage from '../public/images/nexus-dbqs.png';
import mentalHealthImage from '../public/images/mental-health-evaluation.png';
import telemedicineImage from '../public/images/telemedicine-evaluations.png';
import rebuttalLetterImage from '../public/images/logo-rebuttal-letter.png';

export default [
  {
    title: 'Nexus Letters',
    icon: { ...nexusImage, height: 40, width: 40},
    body:
      <>
        <Typography variant='body1'>
          Telemedica offers Independent Medical Opinions (Nexus Letters) based on previously diagnosed disability conditions related to:
        </Typography>
        <ul>
          <Typography variant='body1'>+ Direct Service Connections</Typography>
          <Typography variant='body1'>+ Secondary Service Connections </Typography>
          <Typography variant='body1'>+ Presumptive Service Connections </Typography>
        </ul>
        <Typography variant='body1'>
          You will need to submit documents and/or medical records to your patient portal. Below is a list of the documents you will need to gather for this service.
        </Typography>
        
        <Typography sx={{ pt: 2 }} variant='body1'>Required Documentation:</Typography>
        <ul>
          <li>DD214</li>
          <li>Benefits Summary</li>
          <li>Current treatment records (including your current diagnosis of your medical conditions).</li>
        </ul>
        <Typography variant='body1'>Recommended:</Typography>
        <ul>
          <li>Blue Button Report</li>
          <li>Personal Statements</li>
          <li>Buddy Letters</li>
          <li>Medical Records</li>
          <li>Lab tests/imaging studies</li>
        </ul>
      </>
  },
  {
    title: 'Mental Health Evaluation',
    icon: { ...mentalHealthImage, height: 40, width: 40},
    body:
      <>
        <Typography variant='body1'>
          Our team of licensed and professional providers will perform a comprehensive chart review and one of the following:
        </Typography>
        <ul>
          <Typography variant='body1'>+ One time mental health assessment that can include a diagnosis (if applicable).</Typography>
          <Typography variant='body1'>+ Comprehensive, evidence-based mental health examination.</Typography>
        </ul>
        <Typography variant='body1'>
          Before your appointment, you will need to submit documents and/or medical records to your patient portal. Below is a list of the documents you will need to gather for this service.
        </Typography>
        
        <Typography sx={{ pt: 2 }} variant='body1'>Required:</Typography>
        <ul>
          <li>DD214</li>
          <li>Benefits Summary</li>
        </ul>
        <Typography variant='body1'>Recommended:</Typography>
        <ul>
          <li>Personal Statements</li>
          <li>Buddy Letters</li>
          <li>Medical Records</li>
        </ul>
      </>
  },
  {
    title: 'Telemedicine Evaluations',
    icon: { ...telemedicineImage, height: 40, width: 40},
    body:
      <>
        <Typography variant='body1'>
          Our medical team provides telemedicine examinations to determine first-time medical diagnosis or confirmation/updated evaluations of 20 applicable conditions.*
        </Typography>
        <Typography sx={{ pt: 2 }} variant='body1'>
          *See below for the full list of conditions we evaluate for.
        </Typography>
        <Typography sx={{ pt: 2 }} variant='body1'>
          No documentation is required for this service, but it is highly recommended that you upload documentation to your patient portal. Below is a list of the recommended documents for this service.
        </Typography>
        <Typography sx={{ pt: 2 }} variant='body1'>Required:</Typography>
        <ul>
          <li>DD214</li>
          <li>Benefits Summary</li>
        </ul>
        <Typography variant='body1'>Recommended:</Typography>
        <ul>
          <li>Blue Button Report</li>
          <li>Personal Statements</li>
          <li>Buddy Letters</li>
          <li>Medical Records</li>
        </ul>
      </>
  },
  {
    title: 'Rebuttal Letters',
    icon: { ...rebuttalLetterImage, height: 40, width: 40},
    body:
      <>
        <Typography variant='body1'>
          Rebuttal letters are response documents that we write for veterans who have received medical evidence documents from Telemedica to submit with VA disability claims.  These letters are only for clients who receive a denial letter for a claim that we wrote a letter for.  The purpose of the letters are to respond to or refute incorrect or inaccurate statements in a denial letter.  Both our mental health and medical nexus services write these letters.
        </Typography>
      </>
  },
];
