import axios from 'axios';
import makeActionCreator from '../../utils/ActionHelpers';
import authService from '../../utils/authService';

export const FCH_USER_DONE         = 'APP/FCH_USER_DONE';
export const CLR_USER              = 'APP/CLR_USER'; 
export const fchUserDone           = makeActionCreator(FCH_USER_DONE, 'user');
export const clrUser               = makeActionCreator(CLR_USER);

export const fchUser = () =>
  dispatch => {
    const isLoggedIn = authService.isAuthenticated()
    if(isLoggedIn) {
      const id_token = localStorage.getItem('id_token');
      const payload = JSON.parse( atob(id_token.split('.')[1]) );
      const userProfile = {
        user_id: payload.sub,
        email: payload.email,
      }

      dispatch( fchUserDone(userProfile) )
    }else {
      authService.handleAuthentication((err, authResult) => {
        if(err) {
          console.log(err);
          dispatch( clrUser() )
        }
        if(authResult && authResult.accessToken && authResult.idToken) {
          const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
          const userProfile = {
            user_id: authResult.idTokenPayload.sub,
            email: authResult.idTokenPayload.email
          }

          localStorage.setItem('access_token', authResult.accessToken);
          localStorage.setItem('id_token', authResult.idToken);
          localStorage.setItem('expires_at', expiresAt);

          window.location.hash = '';

          dispatch( fchUserDone(userProfile) );
        }
      })
    }
  }
