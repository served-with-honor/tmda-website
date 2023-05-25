import { addDoc, getFirestore, collection, Timestamp } from "firebase/firestore/lite";
import firebase from './firebaseConfig';
import client from './sanityConfig'
const retry = require('retry');

const mailchimpClient = require("@mailchimp/mailchimp_transactional")(process.env.MANDRILL_API_KEY);
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
        const response = await mailchimpClient.messages.send({ message });
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
    *[_type == "teamMember" && 'Telemedica' in entity[]] | order(orderRank asc){
      'name': coalesce(preferred_name, first_name) + " " + last_name,
      position,
      image,
    }
  `;

  return await client.fetch(query);
}

export {
  logContactForm,
  emailContactForm,
  getTeamMembers,
}