// use the x-gov prototype wizard (thanks Paul!)
// see doc: https://github.com/x-govuk/govuk-prototype-wizard
const wizard = require('@x-govuk/govuk-prototype-wizard')

const standardsManagerWizard = req => {
  const journey = {
    // this is basically a redirect because I don't want to
    // have to change the URL on the start button all the time
    '/start': {
      '/BA1': true
    },
    '/BA1': {},
    '/BA2': {},
    '/BA3': {},
    '/RE1': {},
    '/RE2': {},
    '/RE3': {},
    '/RE4': {},
    '/RE5': {},
    '/RE6': {},
    '/RE7': {},
    '/RE8': {},
    '/RE9': {},
    '/RE10': {},
    '/RE11': {},
    '/RE12': {},
    '/RE13': {}
  }
  return wizard(journey, req)
}

module.exports = standardsManagerWizard
