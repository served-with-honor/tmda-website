import { addDoc, getFirestore, collection, Timestamp } from "firebase/firestore/lite";
import firebase from './firebaseConfig';
import sanityClient from './sanityConfig'
import settings from '../src/siteSettings';

const retry = require('retry');

const mandrillClient = require("@mailchimp/mailchimp_transactional")(process.env.MANDRILL_API_KEY);
const mailchimpClient = require("@mailchimp/mailchimp_marketing");

mailchimpClient.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

const db = getFirestore(firebase);
const retryOperationConfig = {
  retries: 3,
  factor: 2,
  minTimeout: 1 * 1000,
  maxTimeout: 10 * 1000,
};

const logContactForm = (data: Object) => {
  const operation = retry.operation(retryOperationConfig);
  const ref = collection(db, "form-submissions");

  return new Promise((resolve, reject) => {
    operation.attempt(async () => {
      try{
        const document = await addDoc(ref, { ...data, sentAt: Timestamp.now().toDate() });
        resolve(document);
      } catch (error) {
        if (operation.retry(error)) return;
        reject(operation.mainError(error));
      }
    })
  })
}

const emailContactForm = async (data: Object) => {
  const operation = retry.operation(retryOperationConfig);
  const message = {
    ...{
      from_email: process.env.EMAIL_FROM,
      from_name: process.env.EMAIL_NAME,
      to: process.env.EMAIL_TO?.split(',').map(email => ({ email })),
    },
    ...data
  };

  return new Promise((resolve, reject) => {
    operation.attempt(async () => {
      try {
        const response = await mandrillClient.messages.send({ message });
        if (response.isAxiosError) throw response;
        resolve(response);
      } catch (error) {
        if (operation.retry(error)) return;
        reject(operation.mainError(error));
      }
    })
  })
}

const getTeamMembers = async (): Promise<{ name: string, position: string, image?: any }[]> => {
  const query = `
    *[
      _type == "teamMember"
      && active
      && 'Telemedica' in entity[]
      && !(_id in path("drafts.**")) 
    ] | order(orderRank asc){
      'name': coalesce(preferred_name, first_name) + " " + last_name,
      position,
      image,
    }
  `;

  return await sanityClient.fetch(query);
}

const getProviders = () => (
  [
    { name: 'Jikesha Benton-Johnson', image: [ 'images/provider-photos/jikesha-benton-johnson.jpg', 'images/provider-photos/jikesha-benton-johnson@2x.jpg 2x', ], degree: 'PsyD', category: ['Psych'], },
    { name: 'Trevor Boon', degree: 'PsyD', category: ['Psych'], },
    { name: 'Crystal Frazier', image: [ 'images/provider-photos/crystal-frazier.jpg', 'images/provider-photos/crystal-frazier@2x.jpg 2x', ], degree: 'PsyD', category: ['Psych'], },
    { name: 'Sheena Glover', image: [ 'images/provider-photos/sheena-glover.jpg', 'images/provider-photos/sheena-glover@2x.jpg 2x', ], degree: 'PsyD', category: ['Psych'], },
    { name: 'Titus Hamlett', image: [ 'images/provider-photos/titus-hamlett.jpg', 'images/provider-photos/titus-hamlett@2x.jpg 2x', ], degree: 'PhD', category: ['Psych'], },
    { name: 'Franklyn Laracuente', image: [ 'images/provider-photos/franklyn-laracuente.jpg', 'images/provider-photos/franklyn-laracuente@2x.jpg 2x', ], degree: 'PhD', category: ['Psych'], },
    { name: 'Erik Levy', degree: 'PsyD', category: ['Psych'], },
    { name: 'Reginald Riggins', image: [ 'images/provider-photos/reginald-riggins.jpg', 'images/provider-photos/reginald-riggins@2x.jpg 2x', ], degree: 'PhD', category: ['Psych'], },
    { name: 'Sehrish Tariq', image: [ 'images/provider-photos/sehrish-tariq.jpg', 'images/provider-photos/sehrish-tariq@2x.jpg 2x', ], degree: 'PsyD', category: ['Psych'], },
    { name: 'Angela Venda', degree: 'PsyD', category: ['Psych'], },
    { name: 'Reed Vierra', image: [ 'images/provider-photos/reed-vierra.jpg', 'images/provider-photos/reed-vierra@2x.jpg 2x', ], degree: 'PsyD', category: ['Psych'], },
    { name: 'Jonathan Rapp', image: [ 'images/provider-photos/jonathan-rapp.jpg', 'images/provider-photos/jonathan-rapp@2x.jpg 2x', ], degree: 'PhD', category: ['Psych'], },
    { name: 'Julie Peters', image: [ 'images/provider-photos/julie-peters.jpg', 'images/provider-photos/julie-peters@2x.jpg 2x', ], degree: 'PsyD', category: ['Psych'], },
    { name: 'Sarah Zwetzig', image: [ 'images/provider-photos/sarah-zwetzig.jpg', 'images/provider-photos/sarah-zwetzig@2x.jpg 2x', ], degree: 'PhD', category: ['Psych'], },
    { name: 'Jacqueline Herrera', image: [ 'images/provider-photos/jacqueline-herrera.jpg', 'images/provider-photos/jacqueline-herrera@2x.jpg 2x', ], degree: 'PsyD', category: ['Psych'], },
    { name: 'Hannah Mathews', degree: 'PA-C', category: ['Nexus'], },
    { name: 'Nancy Reeves', degree: 'PA-C', category: ['Nexus'], },
    { name: 'Chad Retzloff', degree: 'PA-C', category: ['Nexus'], },
    { name: 'Lindsay Lyon', degree: 'PA-C', category: ['Nexus'], },
    { name: 'Shervon Robinson', degree: 'PA-C', category: ['Nexus'], },
    { name: 'Tara Thompson', image: [ 'images/provider-photos/tara-thompson.jpg', 'images/provider-photos/tara-thompson@2x.jpg 2x', ], degree: 'PA-C', category: ['Nexus'], },
    { name: 'Randy Vena', degree: 'FNP-C', category: ['Nexus'], },
    { name: 'Sabrina Vizzini', degree: 'PA-C', category: ['Nexus'], },
    { name: 'Daniel Olivero', degree: 'MD', category: ['Telemedicine Eval'], },
  ]
);

const newsletterSignup = async (email: string) => {
  // const operation = retry.operation(retryOperationConfig);

  return new Promise(async (resolve, reject) => {
    // operation.attempt(async () => {
      try {
        const response = await mailchimpClient.lists.batchListMembers(settings.newsletter.listId, {
          members: [{ email_address: email, status: 'subscribed' }],
        });
        
        if (response.isAxiosError) throw response;
        if (response.errors) throw response.errors[0].error;

        resolve(response);
      } catch (error) {
        reject(error);
        // if (operation.retry(error)) return;
        // reject(operation.mainError(error));
      }
    // })
  });
}

export {
  logContactForm,
  emailContactForm,
  getTeamMembers,
  getProviders,
  newsletterSignup,
}