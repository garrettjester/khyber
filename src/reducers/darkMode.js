const DEFAULT_STATE = {
  dark_mode: false
}


function darkMode (state, action) {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      const newState = {...state, dark_mode: action.payload};
      console.log(newState)
      return newState
    default:
      return state || DEFAULT_STATE;
  }
}

export default darkMode
