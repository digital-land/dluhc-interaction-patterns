//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here

addFilter('summaryList', function (data) {
  let summaryListObject = {
    rows: []
  }
  for (const [key, value] of Object.entries(data)) {
    summaryListObject.rows.push({
      key: {
        text: key
      },
      value: {
        text: value
      }
    })
  }
  return summaryListObject
})
