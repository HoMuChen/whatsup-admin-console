import makeActionCreator from '../../utils/ActionHelpers';
import authRequest from '../../utils/authRequest';

export const FCH_APPLICATIONS_DONE            = 'Applications/FCH_APPLICATIONS_DONE';
export const ADD_APPLICATION_DONE             = 'Applications/ADD_APPLICATION_DONE';
export const DELETE_APPLICATION_DONE          = 'Applications/DELETE_APPLICATION_DONE';
export const TGL_ADD_APPLICATION              = 'Applications/TGL_ADD_APPLICATION';

export const fchApplicationsDone              = makeActionCreator(FCH_APPLICATIONS_DONE, 'applications');
export const addApplicationDone               = makeActionCreator(ADD_APPLICATION_DONE, 'application');
export const deleteApplicationDone            = makeActionCreator(DELETE_APPLICATION_DONE, 'id');
export const tglAddApplication                = makeActionCreator(TGL_ADD_APPLICATION);

export const fchApplications = () => 
  dispatch => {
    authRequest().get('/api/applications')
      .then(res => {
        dispatch(fchApplicationsDone(res.data))
      })
  }

export const addApplication = (doc) => 
  dispatch => {
    authRequest().post('/api/applications', doc)
      .then(res => {
        dispatch(addApplicationDone(res.data))
      })
  }

export const deleteApplication = (id) => 
  dispatch => {
    authRequest().delete(`/api/applications/${id}`)
      .then(res => {
        dispatch(deleteApplicationDone(id))
      })
  }
