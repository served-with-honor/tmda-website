const firebase = require('firebase-admin');
const { getFirestore, Timestamp } = require('firebase-admin/firestore');
const retry = require('retry');
const mandrillClient = require("@mailchimp/mailchimp_transactional")(process.env.MANDRILL_API_KEY);
const mailchimpClient = require("@mailchimp/mailchimp_marketing");

import sanityClient from './sanityConfig'

mailchimpClient.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

const retryOperationConfig = {
  retries: 3,
  factor: 2,
  minTimeout: 1 * 1000,
  maxTimeout: 10 * 1000,
};

const logContactForm = (data: Object) => {
  const operation = retry.operation(retryOperationConfig);
  
  return new Promise((resolve, reject) => {
    operation.attempt(async () => {
      try {
        const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG || '');
        if (!firebase.apps.length) firebase.initializeApp({ credential: firebase.credential.cert(serviceAccount) });
        const db = getFirestore();
        const res = await db.collection('form-submissions').doc().set({
          ...data,
          sentAt: Timestamp.now().toDate()
        });
        resolve(res);
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
    ...data,
    from_email: process.env.EMAIL_FROM,
    from_name: process.env.EMAIL_NAME,
    to: [{ email: process.env.EMAIL_TO }],
  };

  return new Promise((resolve, reject) => {
    if(!message.from_email) reject('No from email');
    if(!message.to) reject('No to email');

    operation.attempt(async () => {
      try {
        const response = await mandrillClient.messages.send({ message });
        if (response.isAxiosError) throw response.response?.data?.message || response;
        if (response.length < 1) throw 'whooops';
        if (response[0].reject_reason) throw response[0].reject_reason;
        
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
      && hidden != true
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

const getProviders = async (): Promise<{ name: string, certification: string, team: string, image?: any, isTeamLead?: boolean }[]> => {
  const query = `
    *[_type=='provider'
    && active
    && !(_id in path("drafts.**"))
    ] | order(orderRank)
    {
      'name': coalesce(name.preferred, name.first) + " " + name.last,
      team,
      isTeamLead,
      certification,
      position,
      image,
    }
  `;
  return await sanityClient.fetch(query);
}

export {
  logContactForm,
  emailContactForm,
  getTeamMembers,
  getProviders,
}