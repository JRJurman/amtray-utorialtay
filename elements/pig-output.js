const Tram = require('tram-one')
const html = Tram.html()
const pig = require('../pig')

module.exports = (attrs) => {
  return html`
    <div>
      ${pig(attrs.value)}
    </div>
  `
}
