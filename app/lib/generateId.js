const { slugify } = require('@x-govuk/govuk-prototype-filters')

// Add your filters here

/**
 *
 * @param {string} string text string to generate an id based up
 * @param {string} prefix thing to be prepended to the string
 * @param {string} suffix things to be appended to the string
 * @returns returns a specially sluggified string using underscores
 */
const generateId = function (string, prefix = '', suffix = '') {
  return `${prefix ? prefix + '_' : ''}${slugify(string).replaceAll('-', '_')}${
    suffix ? '_' + suffix : ''
  }`
}

module.exports = generateId
