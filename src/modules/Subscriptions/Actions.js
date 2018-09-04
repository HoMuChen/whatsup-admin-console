import makeActionCreator from '../../utils/ActionHelpers';
import authRequest from '../../utils/authRequest';

export const FCH_SUBSCRIPTIONS_DONE            = 'Subscriptions/FCH_SUBSCRIPTIONS_DONE';
export const SELECT_APPLICATION                = 'Subscriptions/SELECT_APPLICATION';

export const fchSubscriptionsDone              = makeActionCreator(FCH_SUBSCRIPTIONS_DONE, 'application_id', 'subscriptions');
export const selectApplication                 = makeActionCreator(SELECT_APPLICATION, 'application_id');

export const fchSubscriptions = (application_id) => 
  dispatch => {
    authRequest().get(`/api/applications/${application_id}/subscriptions`)
      .then(res => {
        dispatch( fchSubscriptionsDone(application_id, res.data) )
      })
  }

export const pushSubscription = (subscription_id, application_id) => 
  dispatch => {
    authRequest()({
      url: `/api/subscriptions/${subscription_id}/push`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        message: 'test',
        application_id,
      }
    })
  }
