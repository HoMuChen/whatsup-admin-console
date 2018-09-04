import React from 'react';
import PropTypes from 'prop-types';

import {
  Row,
  Col,
  Card,
  Table,
  Button,
}  from 'antd';

class SubscriptionsList extends React.Component{
  handlePush = (id) => () => {
    this.props.pushSubscription(id, this.props.selectedApplication);
  }

  render() {

    const {
      subscriptions,
      selectedApplication,
    } = this.props;

    const columns = [
      { title: 'Id', dataIndex: 'id',  key: 'id' },
      { title: 'Push', key: 'push', render: (text, record) => {
        return <Button type='primary' onClick={this.handlePush(record.id)}>Push</Button>
      } }
    ]

    const dataSource = subscriptions.has(selectedApplication)
      ? subscriptions.get(selectedApplication).toJS().map(doc => ({ ...doc, key: doc.id }))
      : []

    return <Card title='Subscriptions' style={{ marginTop: 30 }} bordered={false}>
             <Table dataSource={dataSource} columns={columns} />
           </Card>
  }
}

SubscriptionsList.propTypes = {
  subscriptions:        PropTypes.object.isRequired,
  selectedApplication:  PropTypes.string.isRequired,
  pushSubscription:     PropTypes.func.isRequired,
}

export default SubscriptionsList;
