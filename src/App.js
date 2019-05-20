import React, { Component } from 'react';
import { getQueryParams } from './utils';
import { connect } from 'react-redux';
import { fetchUser } from './actions/authActions'
import Login from './containers/Login';
import Main from './containers/Main';
import './App.css';

class App extends Component {
  constructor() {
    super();

    const params = getQueryParams();
    this.state = { token: params.token };
  }

  isLoggedIn() {
    return !!this.state.token;
  }

  componentDidMount(){
    console.log('USER TOKEN:', this.state.token)
    this.props.fetchUser(this.state.token)    
  }

  render() {
    return (
      <div className='App'>
        {this.isLoggedIn()
          ? <Main token={this.state.token} />
          : <Login />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.token
  }
}

const mapDispatchToProps = {
  fetchUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

