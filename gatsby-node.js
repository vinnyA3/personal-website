/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

var fs = require('fs-extra')
var path = require('path')

exports.postBuild = (pages, callback) => {
  console.log('Copying CNAME file to /public ...')
  fs.copyFileSync(path.join(__dirname, 'CNAME'), path.join(__dirname, '/public/CNAME'))
  callback()
}
