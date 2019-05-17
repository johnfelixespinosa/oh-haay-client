import React, { Component } from 'react';
import {connect} from "react-redux"

class Main extends Component {

  render() {
    return (
      <div className="main">
      MAIN
      {this.props.user.name}
      {this.props.user.name}
      {this.props.user.name}
      {this.props.user.name}
      {this.props.user.name}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(Main)