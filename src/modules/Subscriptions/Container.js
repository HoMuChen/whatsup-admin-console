import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  selectApplication,
  fchSubscriptions,
  pushSubscription,
} from './Actions';
import ApplicationSelect from '../../components/ApplicationSelect';
import SubscriptionsList from '../../components/SubscriptionsList';

class Subscriptions extends React.Component{
  componentWillReceiveProps(nextProps) {
    if(nextProps.selectedApplication !== this.props.selectedApplication) {
      this.props.fchSubscriptions(nextProps.selectedApplication);
    }
  }

  render() {
    const {
      applications,
      subscriptions,
      selectedApplication,
      selectApplication,
      fchSubscriptions,
      pushSubscription,
    } = this.props;

    return <div>
             <ApplicationSelect
               applications={applications}
               selectedApplication={selectedApplication}
               selectApplication={selectApplication}
             />
             <SubscriptionsList
               selectedApplication={selectedApplication}
               subscriptions={subscriptions}
               pushSubscription={pushSubscription}
             />
           </div>
  }
}

export default connect(
  (state) => ({
    applications:           state.getIn(['applications', 'apps']),
    selectedApplication:    state.getIn(['subscriptions', 'selectedApplication']),
    subscriptions:          state.getIn(['subscriptions', 'data']),
  }),{
    selectApplication,
    fchSubscriptions,
    pushSubscription,
  }
)(Subscriptions)
