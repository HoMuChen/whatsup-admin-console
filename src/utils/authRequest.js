import axios from 'axios';

function authRequest() {
  const token = localStorage.getItem('id_token');

  return axios.create({
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}

export default authRequest;
