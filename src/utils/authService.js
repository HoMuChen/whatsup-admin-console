import auth0 from 'auth0-js';

const auth = new auth0.WebAuth({
  domain: process.env['AUTH0_DOMAIN'],
  clientID: process.env['AUTH0_CLIENT_ID'],
  redirectUri: process.env['AUTH0_CALLBACK_URL'],
  responseType: 'token id_token',
  scope: 'openid email'
})

function login() {
  auth.authorize();
}

function logout() {
  localStorage.removeItem('access_token');
  localStorage.removeItem('id_token');
  localStorage.removeItem('user_id');
  localStorage.removeItem('expires_at');
}

function isAuthenticated() {
  const expiresAt = JSON.parse(localStorage.getItem('expires_at'));

  return new Date().getTime() < expiresAt;
}

function handleAuthentication(callback) {
   auth.parseHash(callback);
}

export default {
  login,
  logout,
  isAuthenticated,
  handleAuthentication,
}
