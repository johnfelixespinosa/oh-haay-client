import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserGroups } from '../actions/groupActions';
import GroupsList from '../containers/GroupsList';
import UserCard from '../components/UserCard';
import './Main.css'

class Main extends Component {

  render() {

    return (
      <div className="main">
        <UserCard {...this.props.user} />
        <GroupsList groups={this.props.groups} />
      </div>
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