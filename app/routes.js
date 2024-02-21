//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const wizard = require('@x-govuk/govuk-prototype-wizard')
const journey = require('./journey')

const standardsManagerWizard = req => {
  let wizardItems = {}
  /**
   * Loop through each key (stage) within the journey
   * then merge into a flattened wizard object
   */
  Object.keys(journey).forEach(key => {
    Object.assign(wizardItems, journey[key])
  })
  return wizard(wizardItems, req)
}

// Add your routes here

router.all('/:view', (req, res, next) => {
  const { data } = req.session
  const { view } = req.params
  console.log(view)
  res.locals.paths = standardsManagerWizard(req)
  res.locals.stage = Object.keys(journey).find(function (key) {
    console.log(journey[key])
    return journey[key] === '/' + view
  })

  // handle the start page
  if (view === 'start') {
    res.redirect(res.locals.paths.next)
  } else {
    next()
  }
})

router.post('/:view', (req, res) => {
  res.redirect(res.locals.paths.next)
})
