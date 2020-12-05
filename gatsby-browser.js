/**
 * Gatsby's Browser APIs implementation.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

const React = require('react')
const { ThemeProvider } = require('./src/context/themeContext')

require("prismjs/themes/prism-tomorrow.css")

exports.wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      {element}
    </ThemeProvider>
  )
}

