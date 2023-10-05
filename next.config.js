/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SANITY_AUTH_TOKEN: process.env.SANITY_AUTH_TOKEN,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_DATASET: process.env.SANITY_DATASET,
  },
  async redirects() {
    return [
      // Pages
      { source: '/our-team', destination: '/about', permanent: true },
      { source: '/our-providers', destination: '/about', permanent: true },
      { source: '/newsletters', destination: '/blog', permanent: true },
      { source: '/about-telemedicallc', destination: '/about', permanent: true },
      { source: '/services-we-offer', destination: '/services', permanent: true },
      { source: '/news-and-updates', destination: '/blog', permanent: true },

      // Posts
      { source: '/how-much-does-a-nexus-letter-cost', destination: '/blog/how-much-does-a-nexus-letter-cost', permanent: true },
      { source: '/what-is-a-nexus-letter', destination: '/blog/what-is-a-nexus-letter', permanent: true },
      { source: '/blog-what-is-a-mental-health-evaluation', destination: '/blog/what-is-a-mental-health-evaluation', permanent: true },
      { source: '/blog-what-is-emdr-therapy-and-how-does-it-work', destination: '/blog/what-is-emdr-therapy-and-how-does-it-work', permanent: true },
      { source: '/blog-getting-help-with-a-nexus-letter', destination: '/blog/getting-help-with-a-nexus-letter', permanent: true },
      { source: '/world-mental-health-veterans-mental-health-day', destination: '/blog/world-mental-health-veterans-mental-health-day', permanent: true },
      { source: '/national-hire-a-veteran-day-2022', destination: '/blog/national-hire-a-veteran-day-2022', permanent: true },
      { source: '/recurring-therapy-for-veterans-with-ptsd', destination: '/blog/recurring-therapy-for-veterans-with-ptsd', permanent: true },
      { source: '/6-ways-to-cope-with-mental-illness', destination: '/blog/6-ways-to-cope-with-mental-illness', permanent: true },
      { source: '/telehealth-services-for-veterans', destination: '/blog/telehealth-services-for-veterans', permanent: true },
      { source: '/mental-health-evaluation-for-veterans', destination: '/blog/mental-health-evaluation-for-veterans', permanent: true },
      { source: '/blog-does-the-va-still-accept-dbqs', destination: '/blog/does-the-va-still-accept-dbqs', permanent: true },
      { source: '/blog-relief-for-veteran-chronic-pain', destination: '/blog/relief-for-veteran-chronic-pain', permanent: true },
      { source: '/blog-how-to-get-evaluated-for-depression', destination: '/blog/how-to-get-evaluated-for-depression', permanent: true },
      { source: '/how-to-help-a-veteran-in-crisis-mental-health', destination: '/blog/how-to-help-a-veteran-in-crisis-mental-health', permanent: true },
      { source: '/the-top-5-symptoms-of-chronic-pain-in-veterans', destination: '/blog/the-top-5-symptoms-of-chronic-pain-in-veterans', permanent: true },
      { source: '/is-there-a-link-between-ptsd-and-migraines', destination: '/blog/is-there-a-link-between-ptsd-and-migraines', permanent: true },
      { source: '/veteran-centered-memorial-day-events-near-you', destination: '/blog/veteran-centered-memorial-day-events-near-you', permanent: true },
      { source: '/service-connected-migraines', destination: '/blog/service-connected-migraines', permanent: true },
      { source: '/25-organizations-that-help-veterans', destination: '/blog/25-organizations-that-help-veterans', permanent: true },
      { source: '/telemedica-newsletter-october-2021', destination: '/blog', permanent: true },
      { source: '/telemedica-newsletter-september-2021', destination: '/blog', permanent: true },
      { source: '/telemedica-newsletter-august-2021', destination: '/blog', permanent: true },
      { source: '/telemedica-newsletter-july-2021', destination: '/blog', permanent: true },
      { source: '/telemedica-newsletter-may-2021', destination: '/blog', permanent: true },
      { source: '/telemedica-newsletter-april-newsletter', destination: '/blog', permanent: true },
      { source: '/march-newsletter-2021', destination: '/blog', permanent: true },
      { source: '/february-newsletter-2021', destination: '/blog', permanent: true },
      { source: '/january-newsletter-2021', destination: '/blog', permanent: true },
      { source: '/december-newsletter', destination: '/blog', permanent: true },
      { source: '/november-newsletter', destination: '/blog', permanent: true },
      { source: '/telemadica-newsletter-august-1', destination: '/blog', permanent: true },
      { source: '/september-newsletter-1', destination: '/blog', permanent: true },
      { source: '/september-newsletter-2', destination: '/blog', permanent: true },
    ]
  },
}

module.exports = nextConfig
