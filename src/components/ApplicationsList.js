import React from 'react';
import PropTypes from 'prop-types';

import {
  Row,
  Col,
  Table,
  Card,
  Button,
  Icon,
  Popconfirm,
}  from 'antd';
import AddApplicationForm from './AddApplicationForm';

class ApplicationsList extends React.Component{
  handleShowAddingApplicationForm = () => {
    this.props.tglAddApplication();
  }

  handleCreateApplication = () => {
    const form = this.formRef.props.form;
  }

  handleDeleteApp = (id) => () => {
    console.log(id);
    this.props.deleteApplication(id);
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  render() {

    const {
      applications,
      isAdding,
      tglAddApplication,
      addApplication,
    } = this.props;

    const dataSource = applications.valueSeq().toJS().map(x => ({...x, key: x.id}));
    const columns = [
      { title: 'Name',
        key: 'name',
        dataIndex: 'name',
        render: (text, record) => 
          <a>{text}</a>
      },
      { title: 'Application ID', key: 'application_id', dataIndex: 'id' },
      { title: 'Domain', key: 'domain', dataIndex: 'domain' },
      { title: 'Delete',
        key: 'delete_app', 
        render: (text, record) => 
          <Popconfirm onConfirm={this.handleDeleteApp(record.id)} title='確定刪除此專案?'>
            <a><Icon type='close' /></a>
          </Popconfirm>
      },
    ];

    return <div>
             <Card
               title='Applications'
               bordered={false}
               extra={<Button
                        onClick={this.handleShowAddingApplicationForm}
                        type='primary'
                      >
                        <Icon type='plus' />新增
                      </Button>
                     }
             >
               <Table dataSource={dataSource} columns={columns} />
             </Card>
             <AddApplicationForm
               wrappedComponentRef={this.saveFormRef}
               isAdding={isAdding}
               tglAddApplication={tglAddApplication}
               addApplication={addApplication}
             />
           </div>
  }
}

ApplicationsList.propTypes = {
  applications:        PropTypes.object.isRequired,
  isAdding:            PropTypes.bool.isRequired,
  tglAddApplication:   PropTypes.func.isRequired,
  deleteApplication:   PropTypes.func.isRequired,
}

export default ApplicationsList;
