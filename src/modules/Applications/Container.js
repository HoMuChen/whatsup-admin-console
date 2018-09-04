import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ApplicationsList from '../../components/ApplicationsList';
import {
  fchApplications,
  tglAddApplication,
  addApplication,
  deleteApplication,
} from './Actions';

class Applications extends React.Component{
  componentDidMount() {
    this.props.fchApplications();
  }

  render() {
    const {
      applications,
      isAdding,
      tglAddApplication,
      addApplication,
      deleteApplication,
    } = this.props;

    return <div>
             <ApplicationsList
               applications={applications}
               isAdding={isAdding}
               tglAddApplication={tglAddApplication}
               addApplication={addApplication}
               deleteApplication={deleteApplication}
             />
           </div>
  }
}

export default connect(
  (state) => ({
    applications:    state.getIn(['applications', 'apps']),
    isAdding:        state.getIn(['applications', 'isAdding']),
  }),{
    fchApplications,
    tglAddApplication,
    addApplication,
    deleteApplication,
  }
)(Applications)
