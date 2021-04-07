import {useState} from 'react';

export default function useToken() {

  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const accessToken = JSON.parse(tokenString);
    return accessToken?.token
  }

  const [token, setToken] = useState(getToken());

  const saveToken = accessToken => {
    localStorage.setItem('token', JSON.stringify(accessToken));
    setToken(accessToken.token);
  }


  return {
    setToken: saveToken, 
    token
  }
}