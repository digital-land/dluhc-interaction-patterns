//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter
const generateId = require('./lib/generateId')

addFilter('generateId', generateId)

/**
 * Check if a value matches true if so to enable checkbox/radio to be checked or not
 * @param {string} value a text value from an input
 * @param {*} params either a string or an array depending on if checkbox or radio
 * @returns true or false
 */
let shouldIBeChecked = function (value, params) {
  if (Array.isArray(params.data[params.question])) {
    return params.data[params.question].includes(value)
  } else {
    return value == params.data[params.question]
  }
}

/**
 *
 * @param {string} value value of an input
 * @param {*} params object of possible parameters passed to the filter
 * @returns an object matching the checkbox/radio nunjucks options
 */
const defaultItem = function (value, params) {
  let itemOptions = {
    text: value,
    value: value
  }
  if (params) {
    itemOptions.checked = shouldIBeChecked(value, params)
  }
  return itemOptions
}

addFilter('radioItem', function (value, params) {
  return defaultItem(value, params)
})

addFilter('checkItem', function (value, params) {
  return defaultItem(value, params)
})

addFilter('addQuestion', function (str) {
  return `questions[${str}]`
})

addFilter('summaryList', function (data) {
  if (data) {
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
  } else {
    return false
  }
})
