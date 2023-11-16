export default {
    google: {
        gtmWidgetUrl: new URL(`https://www.googletagmanager.com/gtag/js`),
        gtmNoScriptUrl: new URL(`https://www.googletagmanager.com/ns.html`),
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