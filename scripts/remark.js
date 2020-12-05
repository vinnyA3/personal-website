var fs = require('fs')
var unified = require('unified')
var markdown = require('remark-parse')
var html = require('remark-html')
var path = require('path')

console.log(__dirname)

unified()
  .use(markdown)
  .use(html)
  // quick dirty .. apparently I can't read and need to go through gatsby
  // tutorials to truly create blog pages from markdown ...
  // TODO: remove this script once gatsby is implemented correctly .. smh 
  .process(fs.readFileSync(path.join(__dirname, '../content/introduction.md')), function (err, file) {
    if (err) throw err
    console.log(String(file))
    fs.writeFileSync(path.join(__dirname, '../content/output.html'), file)
  })
