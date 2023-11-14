import settings from './siteSettings';

export default {
    wordpress: {
        rankmath: `${process.env.WORDPRESS_URL}/wp-json/rankmath/v1/getHead`,
    },
    google: {
        gtmWidgetUrl: new URL(`https://www.googletagmanager.com/gtag/js?id=${settings.googleMeasurementId}`),
        gtmNoScriptUrl: new URL(`https://www.googletagmanager.com/ns.html?id=${settings.googleMeasurementId}`),
    },
    mailchimp: {
        subscribeUrl: new URL(`https://${process.env.MAILCHIMP_COMPANY}.${process.env.MAILCHIMP_SERVER}.list-manage.com/subscribe/post-json`),
    },
    intakeq: {
        widgetUrl: new URL('https://intakeq.com/js/widget.min.js?1'),
    },
    geoPlugin: {
        url: new URL('http://www.geoplugin.net/json.gp?'),
    },
    termly: {
        embedUrl: new URL('https://app.termly.io/embed-policy.min.js'),
    },
}