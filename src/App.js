import React, { Component } from 'react';
import { getQueryParams } from './utils';
import { connect } from 'react-redux';
import * as userActions from './actions/userActions';
import * as groupActions from './actions/groupActions'; 
import * as statusActions from './actions/statusActions'; 
import Login from './containers/Login';
import Main from './containers/Main';

class App extends Component {
  constructor() {
    super();

    const params = getQueryParams();
    localStorage.setItem("token", params)
    this.state = { token: params.token };
  }

  isLoggedIn() {
    return !!this.state.token;
  }

  render() {
    return (
      <div className='App'>
        {this.isLoggedIn()
          ? <Main {...this.props} token={this.state.token}/>
          : <Login />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.token,
  }
}

const mapDispatchToProps = {
  ...userActions,
  ...groupActions,
  ...statusActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);