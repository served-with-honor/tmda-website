export default {
  site: {
    name: 'Telemedica',
    defaultPageTitle: '#1 Telehealth Platform for Veterans | Nexus Letter Experts',
    defaultPageDescription: 'Telemedica provides high-quality Disability Examinations, VA Nexus Letters, VA DBQs, and Independent Psychological Evaluations for Veterans worldwide.',
    url: 'https://telemedicallc.com',
  },
  company: {
    name: 'Telemedica LLC',
    copyrightYearInitial: 2020,
    contact: {
      phone: '+15128838446',
      email: 'customerservice@telemedicallc.com',
    },
  },
  social: [
    'https://www.facebook.com/telemedicallc',
    'https://instagram.com/telemedicallc',
    'https://www.linkedin.com/company/telemedica-llc/',
    'https://www.youtube.com/channel/UCoqOPabfIAlkDy9XjTGsb0Q',
  ],
  wordpress: {
    base: 'https://admin.telemedicallc.com',
    posts: '/blog',
    graphql: '/graphql',
    rankmath: '/wp-json/rankmath/v1/getHead',
  },
  externalLinks: {
    booking: 'https://booking.telemedicallc.com/',
    patientPortal: 'https://telemedicallc.intakeq.com/portal',
    helpDesk: 'https://help.telemedicallc.com/',
    providerPortal: 'https://intakeq.com/',
    jobs: 'https://telemedica.rippling-ats.com/',
    googleReviews: 'https://g.page/r/CXLI9fZbuI4iEB0/review',
  },
  google: {
    measurementId: 'GTM-MLD2CCD',
    gtmWidgetUrl: new URL(`https://www.googletagmanager.com/gtag/js?id=GTM-MLD2CCD`),
    gtmNoScriptUrl: new URL(`https://www.googletagmanager.com/ns.html?id=GTM-MLD2CCD`),
  },
  mailchimp: {
    subscribeUrl: new URL(`https://${process.env.MAILCHIMP_COMPANY}.${process.env.MAILCHIMP_SERVER}.list-manage.com/subscribe/post-json`),
    tags: [
      3514092, // Website
      3514096, // Newsletter
    ],
  },
  intakeq: {
    widgetUrl: new URL('https://intakeq.com/js/widget.min.js?1'),
    id: '6220cc1b8bb5475494af878a',
    services: {
      discoveryCall: '158c606a-bcb8-4fc4-9103-4b435fb154ff', // Free Discovery Call
      mentalHealthEvals: '1d25b960-b5eb-4351-a111-14caecc1bdff', // Mental Health Evaluations
      medicalNexus: '93e695cc-b1c9-4eac-832f-299e60c96370', // Medical Nexus Services
      telemedicineEvals: '42cbe660-d079-4f2e-84e7-240e5ce05a7f', // Telemedicine Evaluation Services
      therapeutic: '8f35ce75-ade2-4f09-851a-e703fd1337f0', // Therapeutic Services
      rebuttalLetters: '89fa2975-8191-415d-b808-879e664f2b7b', // Rebuttal Letters
    },
    locations: {
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
      'Out of US': '53'
    },
  },
  calendly: {
    consultationCall: 'https://calendly.com/vet-ambassadors-tmda/consultation-call',
  },
  ipGeolocation: new URL('http://ip-api.com/json'),
  termly: {
    embedUrl: new URL('https://app.termly.io/embed-policy.min.js'),
  },
}