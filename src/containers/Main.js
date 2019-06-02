import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Menu } from 'semantic-ui-react'
import GroupsList from './GroupsList';
import MainUserCard from '../components/MainUserCard';
import './Main.css'
import LogoutButton from '../components/LogoutButton';

class Main extends Component {

  componentDidMount() {
    const token = localStorage.token;
    this.props.fetchUser(token)
    this.props.fetchUserGroups(token)
  }

  render() {

    return (
      <div>
        <Container>
          <Menu fixed="top" inverted>
            <Menu.Item>
              <h1 className="oh-haay-logo">oh-haay!</h1>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <LogoutButton {...this.props}/>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Container>

        <Container>
          <MainUserCard {...this.props.user} />
        </Container>

        <Container>
          <GroupsList groups={this.props.groups} user={this.props.user} />
        </Container>
      </div >

    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userData.user,
    groups: state.userData.user.groups,
    status: state.statusData.currentUserGroupStatus
  }
}

export default connect(mapStateToProps)(Main)