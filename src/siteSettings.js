import { blue, green, purple, red } from '@mui/material/colors';
import { LoremIpsum } from "lorem-ipsum";

export default {
  name: 'Telemedica',
  defaultPageTitle: '#1 Telehealth Platform for Veterans | Nexus Letter Experts',
  url: 'https://telemedicallc.com',
  company: 'Telemedica LLC',
  copyrightYearInitial: 2023,
  social: [
    'https://www.facebook.com/telemedicallc',
    'https://instagram.com/telemedicallc',
    'https://www.linkedin.com/company/telemedica-llc/',
    'https://www.youtube.com/channel/UCoqOPabfIAlkDy9XjTGsb0Q',
  ],
  contact: {
    phone: '+15128838446',
    email: 'mailto:email@email.com',
  },
  articleTagColors: {
    'nexus-letter': red[400],
    'mental-health': blue[300],
    'physical-conditions': green[400],
    'veteran-resources': purple[400],
  },
  externalLinks: {
    patientPortal: 'https://telemedicallc.intakeq.com/portal',
    helpDesk: 'https://help.telemedicallc.com/',
    providerPortal: 'https://intakeq.com/',
    booking: 'http://booking.telemedicallc.com/',
  },
  // googleAnalyticsId: 'G-73TKHSVTNZ',
  dummyText: new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  }),
  newsletter: {
    listId: '08b1d97e11',
    tags: ['website', 'newsletter'],
  }
}