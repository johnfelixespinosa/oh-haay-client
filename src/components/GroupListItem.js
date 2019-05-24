import React, { Component } from 'react';
import { Card, Image, Icon, Button, Modal, Header } from 'semantic-ui-react'
// import { connect } from 'react-redux';
// import { setCurrentGroup } from '../actions/groupActions';
import './GroupListItem.css';

class GroupListItem extends Component {
  state = { open: false }

  render() {
    return (
      <Card centered>
        <Image src={this.props.group_key_photo_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{this.props.city}, {this.props.country}</span>
          </Card.Meta>

          <Card.Description textAlign="center"> 
            <Modal trigger={<Button>oh-haay!</Button>} closeIcon>
              <Modal.Header>Members saying haay!</Modal.Header>
              <Modal.Content image>
                <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                <Modal.Description>
                  <Header>Default Profile Image</Header>
                  <p>We've found the following gravatar image associated with your e-mail address.</p>
                  <p>Is it okay to use this photo?</p>
                </Modal.Description>
              </Modal.Content>
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

// const mapDispatchToProps = dispatch => ({
//   setCurrentGroup(id) {
//     return () => {
//       dispatch(setCurrentGroup(id));
//     };
//   },
// });

export default GroupListItem;