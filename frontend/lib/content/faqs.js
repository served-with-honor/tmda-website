import constants from '../../src/constants';
import { formatPhoneNumber } from '../../src/utils';

export default [
	{
		question: 'Will the provider call me on the day of my appointment?',
		answer: 'The link to your evaluation will be sent via text and email shortly before your scheduled appointment time.',
		topic: 'General',
	},
	{
		question: 'Do I need to download Zoom before my appointment?',
		answer: 'No, you are not required to download Zoom or any special application for the appointment.',
		topic: 'General',
	},
	{
		question: 'Where do I need to go for my appointment?',
		answer: 'You will be matched with a provider who is licensed in the state you choose, so you need to be physically located in that state at the time of the appointment. You will access your appointment via a link that will be sent to you prior to your appointment.',
		topic: 'General',
	},
	{
		question: 'Where and how do I upload my documents?',
		answer: "Your intake package will walk you through the documents you’ll need to upload in order to proceed with your desired service. Any records you’d like to add after you’ve completed your intake package may be uploaded using the paperclip in the bottom left corner of the messaging section of the patient portal. (please note additional fees may apply. See “What is the 90 day plan and do I need it?” for more information.",
		topic: 'General',
	},
	{
		question: 'Why are there no Mental Health Evaluation appointments in my state?',
		answer: 'Either there is no available provider licensed in your state or we are fully booked.',
		topic: 'General',
	},
	{
		question: 'Can I get an earlier date for my appointment?',
		answer: 'You may reach out to customer service for assistance.',
		topic: 'General',
	},
	{
		question: 'What is the third party rate?',
		answer: 'CS will confirm if veteran is a VACI client first, then will refer to VACI price list.',
		topic: 'General',
	},
	{
		question: 'When will I receive my document?',
		answer: 'Within 10 business days from the time your invoice is paid for physical medical conditions and within 10 business days of the completion of your mental health evaluation for Psych. For Nexus, you may also pay a rush fee ($100 per document) to receive them within 2 business days.',
		topic: 'General',
	},
	{
		question: 'Do you accept insurance or offer payment plans?',
		answer: 'No, we do not accept insurances or offer payment plans.',
		topic: 'General',
	},
	{
		question: 'Do I need to set up an appointment to request a Nexus Letter?',
		answer: "This depends on your knowledge of the VA disability claims process and the services offered by Telemedica. You can purchase our Nexus Services using this <a href='/services#booking' style='color: #2F4177'>link</a>. If you aren't certain or would like assistance with discovering which of our services would be best for you, you can use this <a href='/consultation-call' style='color: #2F4177'>link</a> to schedule an appointment with one of our Veteran Ambassadors.",
		topic: 'General',
	},
	{
		question: 'What is the next step after I complete the Nexus Intake Package form?',
		answer: 'You will be assigned to a Nexus provider. The provider will send your comprehensive chart review and summary document to you in the patient portal within 3 business days. You will also be sent an order form which will allow you to order your Nexus documents.',
		topic: 'General',
	},
	{
		question: 'What is the $299 fee for?',
		answer: "The $299 fee covers the Nexus records review process. With the records review process you’ll receive a comprehensive chart review, summary document and document order form(if applicable). Please note that a medical Nexus letter and/or DBQ is a separate charge and is not included in this cost.",
		topic: 'General',
	},
	{
		question: 'What is the difference between a regular and enhanced letter?',
		answer: 'A Nexus letter links one potential service-connected condition to one already service-connected condition. A Nexus letter enhanced links one potential service-connected condition to 2 or more already service-connected conditions.',
		topic: 'General',
	},
	{
		question: 'How do I contact the Nexus provider? Can the Nexus provider call me?',
		answer: "All communication with your Nexus provider will take place within the patient portal. If you have questions you’d like to address over the phone, please reach out to our customer service team so that they can assist.",
		topic: 'General',
	},
	{
		question: "Where will I answer the Nexus provider's comments or questions in my chart review?",
		answer: 'You may answer them by sending a message in the portal.',
		topic: 'General',
	},
	{
		question: "I do not see any invoice included in the chart review, how much is the total for my document/s?",
		answer: 'You will be able to view the price list under the Payment Terms in your intake form and when you fill out the order form.',
		topic: 'General',
	},
	{
		question: "Is the $299 deducted from my total invoice?",
		answer: 'The $299 fee covers the Nexus records review process only. Medical Nexus letters and/or DBQs are a separate charge.',
		topic: 'General',
	},
	{
		question: "What are the qualifications of your providers?",
		answer: 'Our Nexus providers are comprised of PA-Cs, NPs, or FNP-Cs, while our Psych providers are licensed Psychologists.',
		topic: 'General',
	},
	{
		question: "Can I pay in installments?",
		answer: 'No, we do not accept installment payments.',
		topic: 'General',
	},
	{
		question: "Can I book over the phone?",
		answer: `You may book through our <a href='\services#booking' style='color: #2F4177'>booking link</a>  or by phone at <a style="color: #2F4177" href="tel:${constants.company.contact.phone}">${formatPhoneNumber(constants.company.contact.phone)}</a>, but if you encounter any issues, feel free to reach out to customer service for assistance.`,
    	topic: 'General',
	},
	{
		question: "Is TMDA the same as VACI?",
		answer: "No, they are separate companies.",
		topic: 'General',
	},
	{
		question: "What documents do you need for the Mental Health Evaluation?",
		answer: `Providers require a copy of your DD214 and Rated Disabilities. Medical records are optional but highly recommended. You may also upload any personal statements, buddy letters, VA decision letters, and additional documents that you feel would be relevant to your claim.`,
		topic: 'General',
	},
	{
		question: "When do I have to pay for the Mental Health Evaluation?",
		answer: "A payment of $599 is required to book the appointment. The remaining balance needs to be paid 48 hours prior to the scheduled appointment.",
		topic: 'General',
	},
	{
		question: "Will my Mental Health Evaluation be in-person or online?",
		answer: "Your evaluation will be conducted online via video call. The link is sent a few minutes before the appointment.",
		topic: 'General',
	},
	{
		question: "What is the 3rd party rate?",
		answer: "We do offer a discount to veterans that are working with some 3rd party companies. The customer service team can help you determine if you qualify for the 3rd party discount or not.",
		topic: 'General',
	},
	{
		question: "What is the 90 day plan and do I need it?",
		answer: "The 90 day plan is required if you upload 500 or more pages of records or if you upload additional records for review after the review process has started. It also allows you to upload additional records within the 90 day timeframe without paying any additional review fees. The cost is $99 and the plan does not auto renew.",
		topic: 'General',
	},
	{
		question: 'Do you take my insurance?',
		answer: 'No, we do not accept any forms of insurance at this time.',
		topic: 'General',
	},
	{
		question: 'This process feels overwhelming. Can I speak with someone to help me understand the service I need?',
		answer: "Yes, on our homepage you’ll find a link to book a free 20 minute consultation call with one of our veteran ambassadors. They’ll be able to answer any questions you may have to make the process a little less overwhelming. You can also call customer service at 512-883-8446 to book this service.",
		topic: 'General',
	},
	{
		question: 'I’d like to have my records reviewed for possible physical medical conditions and I’d like to schedule a mental health evaluation. Do I need to sign up for both services?',
		answer: "No, the Nexus records review process is included in the cost of your mental health evaluation.",
		topic: 'General',
	},
	{
		question: 'What is an Independent Medical Opinion (IMO) from Telemedica, and why should I get one?',
		answer: "An Independent Medical Opinion (IMO) is a document that is completed by someone who does not work with and/or is not contracted with the VA. This document provides evidence of mental health conditions and how they have affected your life. You can use an IMO to help you obtain a service connection for mental health. Many veterans' mental health was impacted by their time in service, and obtaining an IMO can help document these concerns clearly and concisely.",
		topic: 'Psych',
	},
	{
		question: 'What is the purpose of a Telemedica Psych evaluation for mental health?',
		answer: "The psychologist you meet with will be attempting to determine if you have a mental illness that is caused by your time in the military. Our psychologists may sometimes determine that you have a mental illness but that it was not caused by the military. At other times, the psychologist may determine that you do not have a mental illness. Our psychologists offer their professional opinion, they do not guarantee a diagnosis or that the VA will agree with them. You are paying to see a licensed psychologist who will meet with you and discuss your life before the military, during the military, and after the military. You only pay for a one-time evaluation with the psychologist and not for any other services. After your appointment, you will not see the psychologist again.",
		topic: 'Psych',
	},
	{
		question: 'Can the Telemedica psychologist guarantee a service connection?',
		answer: "Our psychologists are doctors who do not work for the VA, although many of them have worked there before or worked for additional companies contracted through the VA. Because of this, our psychologists can offer a non-biased opinion of your diagnoses and current symptoms. However, because the VA does not employ our psychologists, they can only recommend a service connection. The VA will ultimately determine if you receive a service connection, even if our psychologists believe that you should have one.",
		topic: 'Psych',
	},
	{
		question: 'What does the psychologist look for during the evaluation?',
		answer: `The primary questions that your psychologist will be looking for are:
			
			Did your time in the military cause a mental illness? 
			Did your time in the military cause a decline in your ability to work, have relationships, and take care of yourself because of a mental illness that was caused by being in the military? 
			What happened in the military that may have caused this mental illness? 
			Can the psychologist provide enough concrete evidence to show that these symptoms and mental illness are due to your being in the military?`,
		topic: 'Psych',
	},
	{
		question: 'I feel nervous or uncomfortable about my upcoming evaluation. What can I do to prepare?',
		answer: `It is normal to feel nervous about your evaluation. Many things you will discuss with our psychologists may be difficult or hard to talk about. Your story and what has happened to you are very important to our psychologists, and we want to hear what you say. However, to ease your mind, you should know that our psychologists do not expect you to go into great detail about distressing events. Instead, they are looking for one or two sentences that speak to what you went through, how it is affecting you, and evidence that shows that these things are occurring or did occur for you. They are also trained to provide the best and most important information in the shortest way possible. This is because the VA tends to believe that “less is more,” and VA raters are very busy. A short and to the point report is better than a long, meandering report. 
			
			Make sure that you do not schedule anything overly stressful on the day of your appointment. If you have a good friend or family member who supports you, make sure you talk with them about the appointment. If you see a therapist, you may want to book an appointment with them to discuss your feelings about the appointment. The day of your appointment should involve as much self-care as possible.`,
		topic: 'Psych',
	},
	{
		question: 'Why do I need to provide records for my evaluation?',
		answer: "Although your story is important to us, the VA puts more weight on evidence (your medical records, service records, or any other paperwork that shows that what you are saying occurred) than they do on your report or the report of others in your life. Our psychologists will be more likely to recommend a service connection if you provide them with written, concrete evidence. In addition, without this evidence, the VA is more likely to reject your IMO and not provide you with a service connection.",
		topic: 'Psych',
	},
	{
		question: 'What records should I provide prior to my appointment?',
		answer: "The minimum documentations are the DD214 and a screenshot of their Benefits Summary for psych. The Blue button report is recommended but we can still do the appointment without them. For nexus, you need to upload your medical records and DD214 and benefits screenshot. For medical diagnosis, we do not require any medical records although encouraged.",
		topic: 'Psych',
	},
	{
		question: 'How long will it take to get my completed IMO after the evaluation?',
		answer: "Your IMO and comprehensive chart review will be sent to you within 10 business days after the completion of your appointment.",
		topic: 'Psych',
	},
	{
		question: 'I noticed a mistake on my IMO or I do not agree with my IMO. What should I do?',
		answer: `If you notice a mistake on your IMO, you should create a ticket in the Telemedica Help Desk. This way your psychologist can respond to you and ensure that any factual corrections are made in a timely manner and that your concerns are reviewed. It is up to the discretion of the independent provider to use their clinical judgement and provide a determination. The Help Desk can be found at: <a style="color: #2F4177" href="${constants.externalLinks.helpDesk}" target="_blank">${constants.externalLinks.helpDesk}</a>.`,
		topic: 'Psych',
	},
	{
		question: 'Can I request corrections to an IMO from a year ago?',
		answer: "Mental health disorders and life circumstances can change quite rapidly. Because of this, we cannot edit or make changes to any IMO over six months old. It is recommended that if you would like changes made you make an appointment for a new evaluation.",
		topic: 'Psych',
	},
	{
		question: 'I have a friend who has the exact same symptoms as I do, but my psychologist gave me a different diagnosis. Why did this happen?',
		answer: "Many mental health diagnoses have overlapping symptoms. Symptoms can show up in one person in different ways, and, although you and your friend may have similar symptoms, only someone with schooling and training can determine your true diagnosis.",
		topic: 'Psych',
	},
	{
		question: 'I read the symptoms for the diagnosis I think I have online. Why didn’t my psychologist agree?',
		answer: `Although the internet is a valuable source of information, diagnosis of mental health conditions requires years of school and training. A review of symptoms cannot provide an accurate diagnosis. Psychologists also look for symptoms that they determine to be “clinically significant, " meaning that these symptoms impact your life enough to cause a decline in your quality of life. Someone can have symptoms of a mental health condition, but these symptoms may not meet the requirements to be clinically significant.`,
		topic: 'Psych',
	},
	{
		question: 'I have hired another company to help me obtain my disability benefits. Someone at this company said that I have a certain diagnosis, but my psychologist disagreed. What happened?',
		answer: `Unless you are working with someone who is a licensed mental health professional, people from different agencies cannot provide you with a diagnosis. This is because they lack the schooling and training necessary to provide an accurate diagnosis.`,
		topic: 'Psych',
	},
	{
		question: 'What is a DBQ and why should I purchase it?',
		answer: "A DBQ is a disability benefits questionnaire. The benefit is twofold. It highlights the severity of your condition according to the VA rating system. For example, specific conditions such as GERD and headache conditions have a question on the DBQ that is very pertinent to receiving at least a 30% rating. Secondly, if you submit sufficient evidence that fulfills the VA’s fully developed claim criteria, you may be able to bypass a C&P exam and get rated based on the information you submit. It’s up to you if you’d like to purchase this additional document to submit with your claim.",
		topic: 'Nexus',
	},
	{
		question: 'Can you do all DBQs or only specific conditions?',
		answer: "We can only complete DBQs for conditions in which we do not need to perform an in-person physical examination. Some conditions require this for rating purposes. Examples include orthopedic conditions and most neurological conditions (except headache conditions).",
		topic: 'Nexus',
	},
	{
		question: 'Can I get a document for my social security claim?',
		answer: 'No, we only provide documents for VA disability claims.',
		topic: 'Nexus',
	},
	{
		question: 'Can I get a rebuttal document if I did not get the award percentage I wanted?',
		answer: 'No, we do not guarantee a specific award percentage. There are many factors that go into which award percentage is assigned by the VA, and even though our document may be written to support a higher level than you received, it may have been due to other factors in your claim filing or during the C&P exam. If you think that you qualify for a higher rating, we can evaluate a DBQ as a stand-alone document to ask for an increase in your service-connected condition. To do this, you would sign up for the nexus service for the provider to evaluate your evidence and claim.',
		topic: 'Nexus',
	},
	{
		question: 'My friend got a document from your company for the same connection I am looking for… can I qualify for a nexus? I saw a VA board of appeals case with this connection, can I sign up to get a letter?',
		answer: 'Each case is evaluated for supporting a service connection. Just because a connection can be made for one Veteran, it does not mean that everyone will qualify for the connection. This is why our trained providers complete a thorough review of the uploaded records before discussing what document(s) you may qualify for.',
		topic: 'Nexus',
	},
	{
		question: 'How many conditions can I be diagnosed within 1 visit?',
		answer: 'Our Telehealth providers can diagnose 2 conditions per appointment. Please note that only one condition is included in the cost of the initial appointment. Each additional diagnosis will incur an additional charge.',
		topic: 'Telemedicine',
	},
	{
		question: 'Is the fee per visit or per diagnosis?',
		answer: 'The fee is per evaluation document. If you were seen for multiple conditions, our fees are per condition.',
		topic: 'Telemedicine',
	},
	{
		question: 'Can I be seen for a condition that is not listed on your approved condition list?',
		answer: 'Possibly. If you would like to be seen for a condition that is not listed on our approved list, please reach out to our customer service team for assistance, and they can confirm with the medical team.',
		topic: 'Telemedicine',
	},
	{
		question: 'Do you offer treatment or prescription services?',
		answer: 'No, not at this time.',
		topic: 'Telemedicine',
	},
	{
		question: 'Do you have a physical location that I can be seen in person?',
		answer: 'No, not at this time.',
		topic: 'Telemedicine',
	},
];