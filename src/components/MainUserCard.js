import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getQueryParams } from '../utils';
import './UserCard.css';

class MainUserCard extends Component {
  constructor() {
    super();

    const params = getQueryParams();
    this.state = { token: params.token };
  }

  render() {

    return (
      <Card
        className="user-card"
        centered image={this.props.photo_url}
        header={this.props.name}
        meta={this.props.city}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    group: state.groupData.currentGroup,
  }
}

export default connect(mapStateToProps)(MainUserCard);