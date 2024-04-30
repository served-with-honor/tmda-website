import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Page from "../components/Page";
import Link from "../src/Link";
import TermlyWidget from "../components/TermlyWidget";
import constants from "../src/constants";
import { List, ListItem } from "@mui/material";

export default function ContactUsPage() {
  return (
    <Page title={"Terms and Conditions"}>
      <Box sx={{ pt: 20, mb: 10 }}>
        <Container>
          <Typography variant="h1" color="primary">
            Terms and Conditions
          </Typography>
        </Container>
      </Box>

      <Box sx={{ my: 10 }}>
        <Container>
          <Typography variant="body1" gutterBottom>
            If you would like to contact us regarding Telemedica LLC, our
            telemedicine services, our service providers, additional services,
            or have a general inquiry, you can also{" "}
            <Link href={"/contact-us"}>click here to contact us</Link>.
          </Typography>
          <Typography variant="body1" gutterBottom>
            If you were directed to this page in error, and would like to learn
            more about our telemedicine services, including Nexus Letters,
            Telemedicine Evaluations, Mental Health Evaluations, and more,
            please{" "}
            <Link href={"/"}>click here to be directed to our home page</Link>.
          </Typography>
          <Typography variant="body1" gutterBottom>
            If you are looking for assistance on a medical service that you have
            submitted, and need to locate our ticket portal -{" "}
            <Link href={constants.externalLinks.helpDesk} target="_blank">
              please click here
            </Link>
            .
          </Typography>

          <TermlyWidget id={"d53cf8d7-00fc-418f-a433-e8feb01a7500"} />

          <Typography variant="h4" component={"h2"} sx={{ my: 5 }}>
            Payment Terms
          </Typography>
          <Typography variant="body1" gutterBottom>
            You agree to pay all fees for your Telemedica Services in accordance
            with the fees, charges, and payment terms in effect at the time a
            fee or charge is due and payable. All pricing terms are
            confidential, and you agree not to disclose them to any third party.
          </Typography>
          <Typography variant="body1" gutterBottom>
            You should be aware that Telemedica may use a third-party payment
            processor (Square) to process fees. The processing of payments or
            credits in connection with your use of Telemedica services will be
            subject to the terms, conditions, and privacy policies of the
            payment processor (Square) and your credit card issuer in addition
            to this Payment Terms Agreement. Telemedica is not responsible for
            any errors by the Payment Processor or your credit card issuer.
          </Typography>
          <Typography variant="body1" gutterBottom>
            You understand and agree that for services provided on an
            appointment basis, if you fail to properly cancel a scheduled
            appointment at least 72 hours in advance of the appointment or if
            you fail to attend the appointment, you will be responsible for a
            missed appointment fee. (See "Missed Appointment Policy")
          </Typography>
          <Typography variant="body1" gutterBottom>
            You understand that Independent Medical Opinions (IMO's), Nexus
            Letters, and/or any other requested documentation will only be
            provided to you by Telemedica after full payment of the fee has been
            received.
          </Typography>
          <Typography variant="body1" gutterBottom>
            For mental health appointments, you understand that you will be
            matched with a provider licensed in the state you choose upon
            booking. You need to be physically located in the state at the time
            of the appointment otherwise, you will be charged a $50 rescheduling
            fee.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Telemedica charges and collects a portion OR all the fee in advance
            for the use of all Telemedica Services. Fees for other services will
            be charged on an as-quoted basis and billed to you directly or
            charged to your card on file. Telemedica's prices are exclusive of
            all taxes or duties imposed by taxing authorities, and you shall be
            responsible for payment of all such taxes or duties.
          </Typography>
          <Typography variant="body1" gutterBottom>
            You agree to provide Telemedica with complete and accurate billing
            and contact information. This information includes your legal name,
            e-mail address, street address, and telephone number. You agree to
            update this information immediately upon any change to it. If the
            contact information you have provided is false or fraudulent,
            Telemedica reserves the right to terminate your Telemedica service
            in addition to any other legal remedies. All transactions will be
            billed in United States Dollars (USD).{" "}
          </Typography>
          <Typography variant="body1" gutterBottom>
            If you believe your invoice/bill is incorrect, you must immediately
            contact us in writing regarding the amount in question to be
            eligible to receive an adjustment. You waive your right to challenge
            the accuracy of any bill or otherwise obtain an adjustment to any
            bill, if you fail to notify Telemedica in writing within seven (7)
            calendar days after your receipt of the invoice, indicating that you
            believe the bill is inaccurate (with an explanation of why).
          </Typography>

          <Typography variant="h4" component={"h2"} sx={{ my: 5 }}>
            Fee Disclosures
          </Typography>
          <Typography variant="h6" component={"h3"}>
            Telemedica Rates:
          </Typography>
          <List sx={{ listStyleType: "disc", pl: 4, sup: { fontSize: 10 } }}>
            <ListItem variant="body1" gutterBottom>
              Mental Health Evaluation<sup>1/4</sup>&nbsp;- $1,495
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Psych Re-evaluation - $150
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Psych Rebuttal Letter - $200
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Telemedicine Medical Diagnosis Evaluation<sup>1/4</sup>&nbsp;-
              $985
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Additional Telemedicine Medical Diagnosis Evaluation - $860
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Medical Nexus Records Review (up to 500 pages)<sup>*</sup>&nbsp;-
              $299
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Additional Pages For Records Review (500 pages) - $99
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Unlimited Pages & Medical Records Review for 90 days<sup>*</sup>
              &nbsp;- $99
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Nexus Letter (1 connection)<sup>1/2</sup>&nbsp;- $1,345
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              P&T Document/Specialty Letter<sup>1/2</sup>&nbsp;- $1,345
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Nexus Letter Enhanced (2+ connections)<sup>1/2</sup>&nbsp;- $1,595
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Nexus Service DBQ (1-4 pages)<sup>1/2</sup>&nbsp;- $1,145
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Nexus Service DBQ Enhanced (4+ pages)<sup>1/2</sup>&nbsp;- $1,400
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Nexus Service Rebuttal Letter<sup>1/3</sup>&nbsp;- $275
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              <strong>
                <sup>*</sup>This fee is made up of two separate charges: (i) a
                portion is retained for the Professional Fee charged by the
                Independent Provider’s PLLC, and (ii) a portion is retained for
                an Administrative Management Fee charged by Telemedica LLC.
              </strong>
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              <sup>1</sup> For Mental Health Evaluation, there is a $125 Non-Refundable
              Technology & Access Fee. There is an additional $54 Non-Refundable
              Chart Review Fee. This is obtained when services are initiated.
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              <sup>1</sup> For Telemedicine Evaluation, there is a $125 Non-Refundable
              Technology & Access Fee. There is an additional $54 Non-Refundable
              Chart Review Fee. This is obtained when services are initiated.
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              <sup>1</sup> For Nexus Letter/DBQ Services, there is a $299 ($398 for
              unlimited chart review) Non-Refundable Technology & Access Fee.
              This is obtained when services are initiated.
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              <sup>2</sup> Chart review must be completed prior to service
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              <sup>3</sup> In some cases, a targeted chart review must be completed
              before confirmation that this document is possible with a cost of
              $50
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              <sup>4</sup> This fee includes a medical chart review of up to 500 pages.
              Additional fees apply if uploading more than 500 pages. See fee
              breakdown for chart review pages
            </ListItem>
          </List>

          <Typography variant="h6" component={"h3"}>
            Third-Party Member Discounted Rates:
          </Typography>
          <List sx={{ listStyleType: "disc", pl: 4, sup: { fontSize: 10 } }}>
            <ListItem variant="body1" gutterBottom>
              Mental Health Evaluation<sup>1/4</sup>&nbsp;- $599
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Psych Re-evaluation - $150
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Psych Rebuttal Letter - $200
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Telemedicine Medical Diagnosis Evaluation<sup>1/4</sup>&nbsp;-
              $524
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Additional Telemedicine Medical Evaluation - $399
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Medical Nexus Records Review (up to 500 pages)<sup>*</sup>&nbsp;-
              $299
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Additional Pages For Records Review (500 pages) - $99
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Unlimited Pages & Medical Records Review for 90 days<sup>*</sup>
              &nbsp;- $99
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Nexus Letter<sup>1/2</sup>&nbsp;- $520
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Nexus Letter Enhanced/Specialty Letter/P&T Document<sup>1/2</sup>
              &nbsp;- $620
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Nexus Service DBQ (1-4 pages)<sup>1/2</sup>&nbsp;- $325
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Nexus Service DBQ Enhanced (4+ pages)<sup>1/2</sup>&nbsp;- $425
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              Nexus Service Rebuttal Letter<sup>1/3</sup>&nbsp;- $275
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              <strong>
                <sup>*</sup>This fee is made up of two separate charges: (i) a
                portion is retained for the Professional Fee charged by the
                Independent Provider’s PLLC, and (ii) a portion is retained for
                an Administrative Management Fee charged by Telemedica LLC.
              </strong>
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              <strong>
                <sup>*</sup>You will only be eligible for the preferred
                third-party discount rate if you have an active contract with
                the preferred third-party.
              </strong>
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              <strong>
                <sup>*</sup>Please note that if you cancel your third-party
                membership 72 hours or more prior to your appointment, you will
                be billed at the non-discounted rate. Failure to pay the
                remaining balance will result in the cancelation of your
                appointment.
              </strong>
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              <sup>1</sup> For Mental Health Evaluation, there is a $125 Non-Refundable
              Technology & Access Fee. There is an additional $54 Non-Refundable
              Chart Review Fee. This is obtained when services are initiated.
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              <sup>1</sup> For Telemedicine Evaluation, there is a $125 Non-Refundable
              Technology & Access Fee. There is an additional $54 Non-Refundable
              Chart Review Fee. This is obtained when services are initiated.
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              <sup>1</sup> For Nexus Letter/DBQ Services, there is a $299 ($398 for
              unlimited chart review) Non-Refundable Technology & Access Fee.
              This is obtained when services are initiated.
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              <sup>2</sup> Chart review must be completed prior to service.
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              <sup>3</sup> In some cases, a targeted chart review must be completed
              before confirmation that this document is possible with a cost of
              $50.
            </ListItem>
            <ListItem variant="body1" gutterBottom>
              <sup>4</sup> This fee includes a medical chart review up to 500 pages.
              Additional fees apply if uploading more than 500 pages. See fee
              breakdown for chart review pages.
            </ListItem>
          </List>
          <Typography variant="body1" gutterBottom>
            <strong>
              Please note that for the customer’s convenience, Telemedica LLC
              collects all of the fees and passes the professional fees directly
              to the appropriate professional entity without offset. For the
              avoidance of doubt, Telemedica does not provide any professional
              services, including but not limited to health evaluations or
              medical diagnostic services.
            </strong>
          </Typography>
          <Typography variant="h4" component={"h2"} sx={{ my: 5 }}>
            Refund/Missed Appointment Policy
          </Typography>
          <Typography variant="body1" gutterBottom>
            To request a refund from Telemedica, you must contact{" "}
            <Link
              href={`mailto:${constants.company.contact.email}`}
              target="_blank"
            >
              {constants.company.contact.email}
            </Link>{" "}
            in writing regarding the amount in question to be eligible to
            receive a refund. A transaction may be eligible for a refund up to
            seven (7) days from the date of the completed payment. After this
            period, Telemedica will not review or issue refunds for captured
            payments unless an escalation ticket has been submitted at{" "}
            <Link href={constants.externalLinks.helpDesk} target="_blank">
              {constants.externalLinks.helpDesk}
            </Link>
            .
          </Typography>
          <Typography variant="body1" gutterBottom>
            You understand that the <strong>$125</strong> "Tech Fee" for all
            services is non-refundable. You understand that once a provider has
            begun working on your documents, that no refunds will be issued even
            if within the 7-day refund eligibility window.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Refunds for completed appointments and completed documentation will
            only be considered on a case-by-case basis and upon review by the
            Telemedica Quality Assurance Team, and requests may be submitted at{" "}
            <Link href={constants.externalLinks.helpDesk} target="_blank">
              {constants.externalLinks.helpDesk}
            </Link>
          </Typography>
          <Typography variant="body1" gutterBottom>
            You understand and agree that for services provided on an
            appointment basis, if you fail to properly cancel a scheduled
            appointment at least 48 hours in advance of the appointment or if
            you fail to attend the appointment, you will be responsible for a
            missed appointment fee of <strong>$50.</strong>
          </Typography>
        </Container>
      </Box>
    </Page>
  );
}
