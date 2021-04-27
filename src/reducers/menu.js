const DEFAULT_STATE = {
  mobile_menu_open: false
}


function menu (state, action) {
  switch (action.type) {
    case 'TOGGLE_MOBILE_MENU':
      return {...state, mobile_menu_open: action.payload};
    default:
      return DEFAULT_STATE;
  }
}

export default menu
