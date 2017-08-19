const Tram = require('tram-one')
const html = Tram.html({
  'pig-header': require('./elements/pig-header'),
  'pig-input': require('./elements/pig-input'),
  'pig-output': require('./elements/pig-output')
})

const home = (state) => {
  const newInput = (event) => {
    state.dispatch({
      type: 'new-input',
      newInput: event.currentTarget.value
    })
  }
  return html`
    <div>
      <pig-header></pig-header>
      <pig-input
        newInput=${newInput}
        value=${state.input}>
      </pig-input>
      <pig-output value=${state.input}>
      </pig-output>
    </div>
  `
}

const app = new Tram()
app.addRoute('/', home)
app.addReducer(
  'input',
  require('./input-reducer'),
  'default value'
)
app.start('.main')
