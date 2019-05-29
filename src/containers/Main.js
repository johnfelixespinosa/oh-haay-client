import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Menu, Button } from 'semantic-ui-react'
import GroupsList from './GroupsList';
import MainUserCard from '../components/MainUserCard';
import './Main.css'

class Main extends Component {

  render() {

    return (
      <div>
        <Container>
          <Menu fixed="top" inverted color="black">
            <Menu.Item>
              <h1 className="oh-haay-logo">oh-haay!</h1>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button color="grey">Logout</Button>
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
    groups: state.userData.user.groups
  }
}

export default connect(mapStateToProps)(Main)