import React, { Component } from 'react';
import { Popup, Grid, Header, Card } from 'semantic-ui-react';
import * as statusActions from '../actions/statusActions'; 
import { connect } from 'react-redux';
import { getQueryParams } from '../utils';
import './UserCard.css';

class UserCard extends Component {
  constructor() {
    super();

    const params = getQueryParams();
    this.state = { token: params.token };
  }

  render() {
    const setCurrentStatus = this.props.setCurrentStatus
    console.log('GROUP', this.props.group)

    return (
      <Popup
        position='right center'
        flowing hoverable
        trigger={
          <Card
            className="user-card"
            centered image={this.props.photo_url}
            header={this.props.name}
            meta={this.props.city}
            onMouseOver={() => setCurrentStatus(this.state.token, this.props.group)}
          />
        }
      >
        <Grid centered divided columns={3}>
          <Grid.Column textAlign='center'>
            <Header as='h4'>Working on</Header>

            <p>{this.props.status.currentUserGroupStatus.status.working_on}</p> 
            
            
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <Header as='h4'>Need help with</Header>
            
            
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <Header as='h4'>Expert on</Header>
            
            
          </Grid.Column>
        </Grid>
      </Popup>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    group: state.groupData.currentGroup,
    status: state.statusData
  }
}

export default connect(mapStateToProps, statusActions)(UserCard);