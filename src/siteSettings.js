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
  },
  bookingForms: {
    'Alabama': '1',
    'Alaska': '4',
    'Arizona': '5',
    'Arkansas': '6',
    'California': '7',
    'Colorado': '8',
    'Connecticut': '55',
    'Delaware': '10',
    'Florida': '3',
    'Georgia': '11',
    'Hawaii': '12',
    'Idaho': '13',
    'Illinois': '14',
    'Indiana': '15',
    'Iowa': '16',
    'Kansas': '17',
    'Kentucky': '18',
    'Louisiana': '19',
    'Maine': '20',
    'Maryland': '21',
    'Massachusetts': '22',
    'Michigan': '23',
    'Minnesota': '24',
    'Mississippi': '25',
    'Missouri': '26',
    'Montana': '27',
    'Nebraska': '28',
    'Nevada': '29',
    'New Hampshire': '30',
    'New Jersey': '31',
    'New Mexico': '32',
    'New York': '33',
    'North Carolina': '34',
    'North Dakota': '35',
    'Ohio': '36',
    'Oklahoma': '37',
    'Oregon': '38',
    'Pennsylvania': '39',
    'Rhode Island': '40',
    'South Carolina': '41',
    'South Dakota': '42',
    'Tennessee': '43',
    'Texas': '2',
    'Utah': '44',
    'Vermont': '45',
    'Virginia': '46',
    'Washington': '47',
    'West Virginia': '49',
    'Wisconsin': '50',
    'Wyoming': '51',
    'District of Columbia': '48',
    'Puerto Rico': '52',
    // 'Guam': '0',
    // 'American Samoa': '0',
    // 'U.S. Virgin Islands': '0',
    // 'Northern Mariana Islands': '0',
    'Other': '53'
  }
}