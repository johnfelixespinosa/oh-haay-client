import React from 'react';
import * as userActions from '../actions/userActions';
import { connect } from 'react-redux';

class AuthSwitch extends React.Component{

  componentWillMount(){
    // save url queryString and check if it contains a code or not
    // if so, send to api. If not, simply redirect to home page
    const query = window.location.search.substring(1)
    if (query.includes("token")){
      const token = query.split("=")[1]
      console.log("token", token)
      this.props.fetchAuthorization(token)
      .then(this.props.history.push("/"))
    } else {
      this.props.history.push("/")
    }
  }

  render(){
    return (
      <div></div>
    )
  }
}

const mapDispatchToProps = {
  ...userActions,
};

export default connect(null, mapDispatchToProps)(AuthSwitch)
