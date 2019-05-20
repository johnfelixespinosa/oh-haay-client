import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserGroups } from '../actions/groupActions'
import UserCard from '../components/UserCard';
import './Main.css'

class Main extends Component {

  componentDidMount(){
    console.log('USER GROUPS:', this.props.groups)
    this.props.fetchUserGroups(this.props.token)    
  }

  render() {
    return (
      <div className="main">
        <UserCard {...this.props}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    groups: state.userGroups
  }
}

const mapDispatchToProps = {
  fetchUserGroups
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)