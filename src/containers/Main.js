import React, { Component } from 'react';
import { connect } from "react-redux"
import './Main.css'

class Main extends Component {

  render() {
    return (
      <div className="main">
        <div className="card 1">
          <div className="card_image">
            <img 
              src={this.props.user.photo_url} 
              alt='' 
            />
          </div>
          <div className="card_title title-white">
            <p>{this.props.user.name}</p>
          </div>
        </div>
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