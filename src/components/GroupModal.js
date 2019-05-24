import React, { Component } from 'react';
import { Image, Modal, Header } from 'semantic-ui-react'

class GroupModal extends Component {

  // componentDidMount(){
  //   console.log('CURRENT GROUP:', this.props.currentGroup)
  //   fetchGroupOhHaays(this.props.token, this.props.currentGroup)
  //   // this.props.fetchUserGroups(this.state.token)
  //   // this.props.fetchUserGroupsEvents(this.state.token)
  // }
  render() {
    return (
      <div className="group modal">
        <Modal.Header>Members saying haay!</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </div>
    );
  }
}


export default GroupModal;