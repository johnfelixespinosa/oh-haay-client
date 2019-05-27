import React, { Component } from 'react';
import * as groupActions from '../actions/groupActions';
import { getQueryParams } from '../utils';
import GroupModal from './GroupModal';
import { connect } from 'react-redux';
import { Card, Image, Icon, Button, Modal } from 'semantic-ui-react'
import './GroupListItem.css';
import StatusForm from './StatusForm';

class GroupListItem extends Component {
  constructor() {
    super();

    const params = getQueryParams();
    this.state = { token: params.token };
  }
  state = { statusFormVisible: false }

  render() {
    const { setCurrentGroup } = this.props;
    const showStatusForm = this.state.statusFormVisible ? <StatusForm {...this.props}/> : null

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
                Members saying Haay!
                <Button floated="right" onClick={() => this.setState({ statusFormVisible: !this.state.statusFormVisible })}>
                  Add Status
                </Button>
              </Modal.Header>
              {showStatusForm}
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