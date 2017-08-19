const Tram = require('tram-one')
const html = Tram.html()

const inputStyle = `
  width: 100%;
  font-size: 1.25em;
  margin-bottom: 1em;
`

module.exports = (attrs) => {
  return html`
    <div>
      <textarea
        style=${inputStyle}
        oninput=${attrs.newInput}
      >
        ${attrs.value}
      </textarea>
    </div>
  `
}
