import React, { Component } from 'react';
import * as groupActions from '../actions/groupActions';
import { getQueryParams } from '../utils';
import GroupModal from './GroupModal';
import { connect } from 'react-redux';
import { Card, Image, Icon, Button, Modal } from 'semantic-ui-react'
import './GroupListItem.css';

class GroupListItem extends Component {
  constructor() {
    super();

    const params = getQueryParams();
    this.state = { token: params.token };
  }
  state = { open: false }

  render() {
    const { setCurrentGroup } = this.props;
    return (
      <Card centered>
        <Image src={this.props.group_key_photo_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{this.props.city}, {this.props.country}</span>
          </Card.Meta>

          <Card.Description textAlign="center">
            <Modal trigger={<Button onClick={() => setCurrentGroup(this.state.token, this.props.group)}>oh-haay!</Button>} closeIcon>
              <Modal.Header>
                Members saying haay!
                <Button floated="right">
                  {/* onClick={() => setUserStatus(this.state.token, this.props.group)}> */}
                  Add Status for this group
                </Button>
              </Modal.Header>
              <GroupModal />
            </Modal>
          </Card.Description>

        </Card.Content>
        <Card.Content extra>
          <Icon name='barcode' />
          {this.props.meetup_group_id}
        </Card.Content>
      </Card>
    );
  }
}

export default connect(null, groupActions)(GroupListItem);