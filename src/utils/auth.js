
export var accessToken;

export const storeLogin = (token) => {
  if (token) {
    console.log("STORING ACCESS TOKEN", token)
    accessToken = token;
  }
};


export const clearAccessToken = () => {
  accessToken = null;
};


