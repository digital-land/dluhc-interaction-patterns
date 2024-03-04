//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const wizard = require('@x-govuk/govuk-prototype-wizard')

// Add your routes here

router.get('/RE04-01', (req, res, next) => {
  const { data } = req.session

  next()
})

router.get('/RE04-01', (req, res, next) => {
  const { data } = req.session
  // console.log('/RE04-01 Get Request')
  // console.log(data)
  let newInteraction = data.questions.add_a_planning_consideration || false
  if (!data.interactions) {
    data.interactions = []
  }
  if (newInteraction) {
    if (!data.interactions.includes(newInteraction)) {
      data.interactions.push(newInteraction)
    }
  }
  // if there are no existing interactions - assume we are adding the first
  if (data.interactions.length < 1) {
    res.redirect('/RE04-02')
  } else {
    next()
  }
})

router.all('/:view', (req, res, next) => {
  // get data needed for all
  const journey = require('./journey')(req)
  const { data } = req.session
  const { view } = req.params

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

  res.locals.paths = standardsManagerWizard(req)

  /**
   *
   */
  res.locals.stage = Object.keys(journey).find(function (key) {
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
