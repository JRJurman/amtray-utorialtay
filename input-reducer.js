module.exports = (state, action) => {
  switch (action.type) {
    case 'new-input':
      return action.newInput
    default:
      return state
  }
}
