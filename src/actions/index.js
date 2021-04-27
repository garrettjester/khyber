

export function changeAuth(isLoggedIn) {
  return {type: 'CHANGE_AUTH', payload: isLoggedIn}
}

export function toggleMobileMenu(open) {
  return {type: 'TOGGLE_MOBILE_MENU', payload: open}
}

export function toggleDarkMode(dark) {
  console.log('CALLING DARK MODE ACTION')
  return {type: 'TOGGLE_DARK_MODE', payload: dark}
}