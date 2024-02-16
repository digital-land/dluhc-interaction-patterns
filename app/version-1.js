// use the x-gov prototype wizard (thanks Paul!)
// see doc: https://github.com/x-govuk/govuk-prototype-wizard
const wizard = require('@x-govuk/govuk-prototype-wizard')

const standardsManagerWizard = req => {
  const journey = {
    // this is basically a redirect because I don't want to
    // have to change the URL on the start button all the time
    '/start': {
      '/who-asked-for-it': true
    },
    '/who-asked-for-it': {},
    '/what-is-the-driver': {}
  }
  return wizard(journey, req)
}

module.exports = standardsManagerWizard
