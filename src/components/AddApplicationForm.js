import React from 'react';
import PropTypes from 'prop-types';

import {
  Modal,
  Form,
  Input,
} from 'antd';
const FormItem = Form.Item;

class AddApplicationForm extends React.Component {

  handleCreateApplication = () => {
    this.props.form.validateFields((err, values) => {
      if(err) return;

      this.props.tglAddApplication();
      this.props.addApplication(values);
    })
  }

  render() {
    const {
      form,
      isAdding,
      tglAddApplication,
    } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Modal
        visible={isAdding}
        title='新增專案'
        okText="建立"
        cancelText="取消"
        onOk={this.handleCreateApplication}
        onCancel={tglAddApplication}
      >
        <Form layout="vertical">
          <FormItem label="Name">
            {getFieldDecorator('name', {
               rules: [{ required: true, message: 'Please input the title of collection!' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="Domain">
            {getFieldDecorator('domain', {
               rules: [{ required: true, message: 'Please fill me with domain name' }],
            })(
              <Input placeholder='http://localhost:3000' />
            )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

AddApplicationForm.propTypes = {
  isAdding:            PropTypes.bool.isRequired,
  tglAddApplication:   PropTypes.func.isRequired,
  addApplication:      PropTypes.func.isRequired,
}

export default Form.create()(AddApplicationForm);
