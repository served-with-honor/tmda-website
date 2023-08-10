import { createClient } from '@sanity/client'

export default createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2021-10-21',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: true // `false` if you want to ensure fresh data
})
