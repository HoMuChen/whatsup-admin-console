import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Row,
  Col,
} from 'antd';

import {
} from './Actions';

class Home extends React.Component{
  componentDidMount() {
  }

  render() {
    return <h1>Hello</h1>
  }
}

export default connect(
  (state) => ({
  }),{
  }
)(Home)
