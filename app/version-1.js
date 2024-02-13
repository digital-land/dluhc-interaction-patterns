// use the x-gov prototype wizard (thanks Paul!)
// see doc: https://github.com/x-govuk/govuk-prototype-wizard
const wizard = require('@x-govuk/govuk-prototype-wizard')

const standardsManagerWizard = req => {
  const journey = {
    '/start': {
      '/who-asked-for-it': true
    },
    '/who-asked-for-it': {},
    '/next': {}
  }
  return wizard(journey, req)
}

module.exports = standardsManagerWizard
