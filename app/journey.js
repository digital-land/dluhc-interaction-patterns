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
        // if yes go to /RE04-01
        '/RE04-01': {
          data: "questions['does_it_interact_with_any_other_planning_considerations']",
          value: 'Yes'
        },
        // if no skip to RE05 as no need to add any interactions
        '/RE05': {
          data: "questions['does_it_interact_with_any_other_planning_considerations']",
          value: 'No'
        }
      },
      '/RE04-01': {
        '/RE04-02': { data: 'add_another', value: 'Yes' },
        '/RE05': { data: 'add_another', value: 'No' }
      },
      '/RE04-02': {
        '/RE04-01': true
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
