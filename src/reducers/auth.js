function auth (state = false, action) {
  switch (action.type) {
    case "CHANGE_AUTH":
      return action.payload;
    default:
      return state;
  }
}

export default auth
