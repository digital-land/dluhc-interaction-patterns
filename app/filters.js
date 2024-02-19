//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter
const { slugify } = require('@x-govuk/govuk-prototype-filters')

// Add your filters here

addFilter('generateId', function (string, prefix = '', suffix = '') {
  return `${
    prefix ? prefix + '_' : ''
  }${slugify(string).replaceAll('-', '_')}${suffix ? '_' + suffix : ''}`
})

let defaultItem = function (text, value) {
  let itemObject = {}
  if (text) {
    itemObject.text = text
  }
  if (value) {
    itemObject.value = value
  } else {
    itemObject.value = text
  }
  return itemObject
}

addFilter('radioItem', defaultItem)
addFilter('checkItem', defaultItem)

addFilter('summaryList', function (data) {
  let summaryListObject = {
    rows: []
  }
  for (const [key, value] of Object.entries(data)) {
    summaryListObject.rows.push({
      key: {
        text: key.charAt(0).toUpperCase() + key.slice(1).replaceAll('_', ' ')
      },
      value: {
        text: value
      }
    })
  }
  return summaryListObject
})
