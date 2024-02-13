//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

const version = `version-1`
const standardsManagerWizard = require(`./${version}.js`)

router.all('/:view', (req, res, next) => {
  const { data } = req.session
  const { view } = req.params
  res.locals.paths = standardsManagerWizard(req)
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
