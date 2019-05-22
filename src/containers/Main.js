import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserGroups } from '../actions/groupActions';
import { Grid, Image } from 'semantic-ui-react'
import GroupsList from '../containers/GroupsList';
import UserCard from '../components/UserCard';
// import './Main.css'

class Main extends Component {

  render() {

    return (
      <Grid>
        <div className="main">
          <Grid.Row>
            <UserCard {...this.props.user} />
          </Grid.Row>
          <Grid.Row>
            <GroupsList groups={this.props.groups} />
          </Grid.Row>
        </div>
      </Grid>
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