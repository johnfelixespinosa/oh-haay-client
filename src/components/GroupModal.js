import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react'
import UserCard from './UserCard';

class GroupModal extends Component {
  render() {
    const members = this.props.members

    return (
      <div className="group modal">

        <Modal.Content>
          {members && members.map((member) => (
            <UserCard
              key={member.meetup_id}
              name={member.name}
              meetup_id={member.meetup_id}
              meetup_profile_url={member.meetup_profile_url}
              photo_url={member.photo_url}
              city={member.city}
              setCurrentStatus={this.props.setCurrentStatus}
            />
          ))}
        </Modal.Content>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    members: state.groupData.currentGroup.members
  }
}

export default connect(mapStateToProps)(GroupModal);