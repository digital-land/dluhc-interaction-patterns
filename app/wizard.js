// use the x-gov prototype wizard (thanks Paul!)
// see doc: https://github.com/x-govuk/govuk-prototype-wizard
const wizard = require('@x-govuk/govuk-prototype-wizard')
const journey = require('./journey')

const standardsManagerWizard = req => {
  let wizardItems = {}

  Object.keys(journey).forEach(key => {
    Object.assign(wizardItems, journey[key])
  })

  return wizard(wizardItems, req)
}

module.exports = standardsManagerWizard
