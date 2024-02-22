const generateId = require('./lib/generateId')

module.exports = req => {
  return {
    // this is basically a redirect because I don't want to
    // have to change the URL on the start button all the time
    start: {
      '/start': {
        '/BA01': true
      }
    },
    backlog: {
      '/BA01': {},
      '/BA02': {},
      '/BA03': {}
    },
    research: {
      '/RE01': {},
      '/RE02': {},
      '/RE03': {},
      '/RE04': {
        '/RE04-01': { data: 'RM04', value: 'Yes' }
      },
      '/RE04-01': {
        '/RE04-01': () => {
          return req.session.data.key != ''
        }
      },
      '/RE05': {},
      '/RE06': {},
      '/RE07': {},
      '/RE08': {},
      '/RE09': {},
      '/RE10': {},
      '/RE11': {},
      '/RE12': {}
    },
    screening: {
      '/SC01': {},
      '/SC02': {}
    },
    modelling: {}
  }
}
