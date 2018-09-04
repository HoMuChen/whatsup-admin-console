import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Navigaotr from '../../components/Navigaotr';

import {
  fchUser,
  clrUser,
} from './Actions';

class App extends React.Component{

  componentDidMount() {
    this.props.fchUser()
  }

  render() {
    const {
      user,
      clrUser,
    } = this.props;

    return (
      <div>
        <Navigaotr user={user} clrUser={clrUser}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user:         state.getIn(['app', 'user']),
  }),{
    fchUser,
    clrUser,
  }
)(App);
