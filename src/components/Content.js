import React from 'react';
import PropTypes from 'prop-types';

import {
  Row,
  Col,
}  from 'antd';

class Content extends React.Component{
  render() {
    console.log('render')
    return (
      <Row style={{ marginTop: 32 }}>
        <Col offset={2} span={20}>
          { this.props.children }
        </Col>
      </Row>
    );
  }
}

export default Content;
