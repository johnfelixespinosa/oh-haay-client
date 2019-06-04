import React, { Component } from 'react';
import GroupListItem from '../components/GroupListItem';
import { connect } from 'react-redux';
import { addStatus } from '../actions/statusActions';
import { Card } from 'semantic-ui-react';
import './GroupsList.css';

class GroupsList extends Component {
  render() {
    const groups = this.props.groups
    const user = this.props.user
    const groupsCount = groups && groups.length

    return (
      <div className="group-list">
        <div className="group-list-title">
          <h3>Member of {groupsCount} Groups</h3>
        </div>
        <Card.Group>
          {groups && groups.map((group) => (
            
            <GroupListItem
              key={group.name}
              name={group.name}
              meetup_group_id={group.meetup_group_id}
              group_link={group.link}
              group_key_photo_url={group.group_key_photo_url}
              city={group.city}
              country={group.country}
              group={group}
              user={user}
              addStatus={this.props.addStatus}
            />
          ))}
          
        </Card.Group>
      </div>
    )
  }
}

export default connect(null, {addStatus})(GroupsList);