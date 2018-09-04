import React from 'react';
import PropTypes from 'prop-types';

import {
  Row,
  Col,
  Select,
}  from 'antd';
const Option = Select.Option;

class ApplicationSelect extends React.Component{

  handleSelectChange = (key) => {
    this.props.selectApplication(key);
  }

  render() {

    const {
      applications,
      selectedApplication,
      selectApplication,
    } = this.props;

    return <div>
             <Select value={selectedApplication} style={{ width: 200 }} onChange={this.handleSelectChange}>
               {
                 applications.valueSeq().map(value => 
                   <Option value={value.get('id')} key={value.get('id')}>{value.get('name')}</Option>
                 )
               }
             </Select>
           </div>
  }
}

ApplicationSelect.propTypes = {
  applications:        PropTypes.object.isRequired,
  selectedApplication: PropTypes.string.isRequired,
  selectApplication:   PropTypes.func.isRequired,
}

export default ApplicationSelect;
