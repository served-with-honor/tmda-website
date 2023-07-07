import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Page from '../components/Page'
import Link from '../src/Link';

export default function ContactUsPage() {
	return (
		<Page title={'Terms and Conditions'}>
			<Box sx={{ pt: 20, mb: 10, }}>
				<Container>
						<Typography variant='h1' color='primary'>Terms and Conditions</Typography>
				</Container>
			</Box>
			
			<Box sx={{ m: 10 }}>
				<Container>

					{/* Termly Tracking Code */}
					{/* <div name="termly-embed" data-id="d53cf8d7-00fc-418f-a433-e8feb01a7500" data-type="iframe"></div>
					<script type="text/javascript">{`(function(d, s, id) {
						var js, tjs = d.getElementsByTagName(s)[0];
						if (d.getElementById(id)) return;
						js = d.createElement(s); js.id = id;
						js.src = "https://app.termly.io/embed-policy.min.js";
						tjs.parentNode.insertBefore(js, tjs);
					}(document, 'script', 'termly-jssdk'));`}</script> */}

					<Typography variant='body1' gutterBottom>If you would like to contact us regarding Telemedica LLC, our telemedicine services, our service providers, additional services, or have a general inquiry, you can also <Link href={'/contact-us'}>click here to contact us</Link>.</Typography>
					<Typography variant='body1' gutterBottom>If you were directed to this page in error, and would like to learn more about our telemedicine services, including Nexus Letters, Medical Diagnosis, a mental evaluation, and more, please <Link href={'/'}>click here to be directed to our home page</Link>.</Typography>
					<Typography variant='body1' gutterBottom>If you are looking for assistance on a medical service that you have submitted, and need to locate our ticket portal - <Link href={'https://www.help.telemedicallc.com/'} target="_blank">please click here</Link>.</Typography>
					<Typography variant='h4' component={'h2'} gutterBottom sx={{ mt :5 }}>Payment Terms</Typography>
					<Typography variant='body1' gutterBottom>You agree to pay all fees for your Telemedica Services in accordance with the fees, charges, and payment terms in effect at the time a fee or charge is due and payable. All pricing terms are confidential, and you agree not to disclose them to any third party.</Typography>
					<Typography variant='body1' gutterBottom>You should be aware that Telemedica may use a third-party payment processor (PayPal) to process fees. The processing of payments or credits in connection with your use of Telemedica services will be subject to the terms, conditions, and privacy policies of the payment processor (PayPal) and your credit card issuer in addition to this Payment Terms Agreement. Telemedica is not responsible for any errors by the Payment Processor or your credit card issuer.</Typography>
					<Typography variant='body1' gutterBottom>You understand and agree that for services provided on an appointment basis, if you fail to properly cancel a scheduled appointment at least 24 hours in advance of the appointment or if you fail to attend the appointment, you will be responsible for a missed appointment fee. (See “Missed Appointment Policy”) </Typography>
					<Typography variant='body1' gutterBottom>You understand that Independent Medical Opinions (IMO’s), Nexus Letters, and/or any other requested documentation will only be provided to you by Telemedica after full payment of the fee has been received.</Typography>
					<Typography variant='body1' gutterBottom>Telemedica charges and collects a portion OR all the fee in advance for the use of all Telemedica Services. Fees for other services will be charged on an as-quoted basis and billed to you directly. Telemedica’s prices are exclusive of all taxes or duties imposed by taxing authorities, and you shall be responsible for payment of all such taxes or duties.</Typography>
					<Typography variant='body1' gutterBottom>You agree to provide Telemedica with complete and accurate billing and contact information. This information includes your legal name, e-mail address, street address, and telephone number. You agree to update this information immediately upon any change to it. If the contact information you have provided is false or fraudulent, Telemedica reserves the right to terminate your Telemedica service in addition to any other legal remedies. All transactions will be billed in United States Dollars (USD). </Typography>
					<Typography variant='body1' gutterBottom>If you believe your invoice/bill is incorrect, you must immediately contact us in writing regarding the amount in question to be eligible to receive an adjustment. You waive your right to challenge the accuracy of any bill or otherwise obtain an adjustment to any bill, if you fail to notify Telemedica in writing within seven (7) calendar days after your receipt of the invoice, indicating that you believe the bill is inaccurate (with an explanation of why).</Typography>
					<Typography variant='h4' component={'h2'} gutterBottom sx={{ mt :5 }}>Fee Disclosures for VA Claims Insider Elite & Mastery Members ONLY</Typography>
					<Typography variant='body1' gutterBottom><strong>Mental Health Evaluation: $495</strong> of which a portion ($220) is retained by Telemedica LLC as an administrative Management Fee</Typography>
					<Typography variant='body1' gutterBottom><strong>Telemedicine Medical Diagnosis Evaluation: $395</strong> of which a portion ($175) is retained by Telemedica LLC as an administrative Management Fee</Typography>
					<Typography variant='body1' gutterBottom><strong>Nexus Letter/IMO: $495*</strong> of which a portion ($255) is retained by Telemedica LLC as an administrative Management Fee.</Typography>
					<Typography variant='body1' gutterBottom sx={{ fontWeight: '700'}}>*Please note there is a $100.00 Non- Refundable Review & Access Fee that is retained upon submission of the intake form to the Med Team ONLY. </Typography>
					<Typography variant='h4' component={'h2'} gutterBottom sx={{ mt :5 }}>Refund/Missed Appointment Policy</Typography>
					<Typography variant='body1' gutterBottom>To request a refund from Telemedica, you must contact <Link href={'mailto:customerservice@telemedicallc.com'} target="_blank">customerservice@telemedicallc.com</Link> in writing regarding the amount in question to be eligible to receive a refund. A transaction may be eligible for a refund up to seven (7) days from the date of the completed payment. After this period, Telemedica will not review or issue refunds for captured payments unless an escalation ticket has been submitted at <Link href={'help.telemedicallc.com'} target="_blank">help.telemedicallc.com</Link>.</Typography>
					<Typography variant='body1' gutterBottom>You understand that the <strong>$100</strong> “Medical Review & Access Fee” for Nexus letter services is non-refundable. You understand that once a provider has begun working on your documents, that no refunds will be issued even if within the 7-day refund eligibility window.</Typography>
					<Typography variant='body1' gutterBottom>Refunds for completed appointments and completed documentation will only be considered on a case-by-case basis and upon review by the Telemedica Quality Assurance Team, and requests may be submitted at <Link href={'help.telemedicallc.com'} target="_blank">help.telemedicallc.com</Link></Typography>
					<Typography variant='body1' gutterBottom>You understand and agree that for services provided on an appointment basis, if you fail to properly cancel a scheduled appointment at least 24 hours in advance of the appointment or if you fail to attend the appointment, you will be responsible for a missed appointment fee of <strong>$50.</strong></Typography>
				</Container>
			</Box>
  	</Page>
  )
}