/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SANITY_AUTH_TOKEN: process.env.SANITY_AUTH_TOKEN,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_DATASET: process.env.SANITY_DATASET,
  },
	webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [{
              name: 'removeViewBox',
              active: false
            }]
          }
        }
      }
    });

    return config;
  }
}

module.exports = nextConfig
