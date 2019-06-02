import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from "react-router";
import * as userActions from './actions/userActions';
import * as groupActions from './actions/groupActions';
import * as statusActions from './actions/statusActions';
import Login from './containers/Login';
import Main from './containers/Main';

class App extends Component {

  componentDidMount() {
    if (window.location.href.indexOf("token") > -1) {
      this.props.fetchToken();
    }
  }

  render() {
    
    return (
      <div className='App'>
        
          {this.props.isLoggedIn
            ? <Route exact path="/main" component={() => <Main {...this.props} />} />
            : <Route path="/" component={Login} />
          }
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.userData.isLoggedIn
  }
}

const mapDispatchToProps = {
  ...userActions,
  ...groupActions,
  ...statusActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);