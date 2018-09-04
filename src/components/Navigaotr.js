import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import authService from '../utils/authService';
import { Row, Col, Menu, Icon, Button, Avatar, Dropdown } from 'antd';

class Navigaotr extends React.Component {

  Title = () => (
    <h1 style={{ float: 'left', paddingTop: '16px', color: '#fe8019', fontFamily: 'fantasy', marginRight: 32}}>
      Whatsup Admin Console
    </h1>
  )

  handleLogout = () => {
    this.props.clrUser();
  }

  handleLogin = () => {
    authService.login();
  }

  render() {
    const {
      Title,
    } = this;
    const {
      user,
    } = this.props;

    const isLoggedIn = !user.isEmpty();

    const userMenu = (
      <Menu>
        <Menu.Item>使用者設置</Menu.Item>
        <Menu.Item onClick={this.handleLogout}>登出</Menu.Item>
      </Menu>
    )

    return (
      <Row style={{ backgroundColor: '#001529' }}>
        <Col offset={2} span={20}>
          <Title />
          <Menu mode="horizontal" theme='dark' style={{ lineHeight: '72px', borderBottom: '' }}>
            { isLoggedIn && <Menu.Item key='route-applications'><Link to='/applications'>Applications</Link></Menu.Item> }
            { isLoggedIn && <Menu.Item key='route-subscriptions'><Link to='/subscriptions'>Subscriptions</Link></Menu.Item> }
            { isLoggedIn && 
              <Dropdown key='4' overlay={userMenu}>
                <Avatar style={{ backgroundColor: '#fe8019', float: 'right', top: 20 }}>User</Avatar>
              </Dropdown>
            }
            { !isLoggedIn && <Menu.Item style={{ float: 'right' }} key='5'><a href='/admin/signup'>註冊</a></Menu.Item> }
            { !isLoggedIn && <Menu.Item style={{ float: 'right' }} key='6'><a onClick={this.handleLogin}>登入</a></Menu.Item> }
          </Menu>
        </Col>
      </Row>
    )
  }
}

Navigator.propTypes = {
  user:        PropTypes.object.isRequired,
  clrUser:     PropTypes.func.isRequired,
}

export default Navigaotr;
