import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserGroups } from '../actions/groupActions';
import { Container, Image } from 'semantic-ui-react'
import GroupsList from '../containers/GroupsList';
import UserCard from '../components/UserCard';
// import './Main.css'

class Main extends Component {

  render() {

    return (
      <div>
        <Container>
          <div>
            <UserCard {...this.props.user} />
          </div>
        </Container>
        <Container>
          <div>
            <GroupsList groups={this.props.groups} />
          </div>
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