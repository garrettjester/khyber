

export function changeAuth(isLoggedIn) {
  return {type: 'CHANGE_AUTH', payload: isLoggedIn}
}