import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserGroups } from '../actions/groupActions';
import { Container, Image, Menu, Divider, Icon, Button } from 'semantic-ui-react'
import GroupsList from '../containers/GroupsList';
import UserCard from '../components/UserCard';
import './Main.css'

class Main extends Component {

  render() {

    return (
      <div>
        <Container>
          <Menu fixed="top" inverted color="gray">
            <Menu.Item>
              <h1 className="oh-haay-logo">oh-haay!</h1>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button color="gray">Logout</Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Container>

        <Container>
          <UserCard {...this.props.user} />
        </Container>

        <Divider />
        <Container>
          <GroupsList groups={this.props.groups} />
        </Container>
      </div >

    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userData.user,
    groups: state.userData.user.groups
  }
}

export default connect(mapStateToProps)(Main)