import React, { Component } from 'react';
import { Card, List } from 'semantic-ui-react';
import * as statusActions from '../actions/statusActions';
import { connect } from 'react-redux';
import { getQueryParams } from '../utils';
import StatusCard from './StatusCard';
import './UserCard.css';

class UserCard extends Component {

  constructor() {
    super();

    const params = getQueryParams();
    this.state = {
      statusVisible: false,
      token: params.token
    };
  }

  render() {
    const showStatus = this.state.statusVisible ?
      <StatusCard
        working_on={this.state.working_on}
        need={this.state.need}
        offering={this.state.offering}
      />
      : null

    return (
      <Card.Group>
        <Card
          centered
          image={this.props.photo_url}
          header={this.props.name}
          meta={this.props.city}
          onClick={(e) => this.props.setCurrentStatus(this.state.token, this.props.group, this.props.member)
            .then((status) => {
              this.setState({
                working_on: status.working_on,
                need: status.need,
                offering: status.offering,
                statusVisible: !this.state.statusVisible,
              })
            })
          }
        />
        {showStatus}
      </Card.Group>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userData.user,
    group: state.groupData.currentGroup,
    status: state.statusData.currentUserGroupStatus
  }
}

export default connect(mapStateToProps, statusActions)(UserCard);