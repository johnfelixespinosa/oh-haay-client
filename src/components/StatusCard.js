import React from 'react';
import { Card } from 'semantic-ui-react'

const StatusCard = ({ working_on, need, offering }) => (

  <Card
    className="user-card"
    working_on={working_on}
    need={need}
    offering={offering}
  >
    <Card.Content>
      <Card.Header>I'm working on</Card.Header>
      <Card.Description>{working_on}</Card.Description>
      <Card.Header>I'm in need of</Card.Header>
      <Card.Description>{need}</Card.Description>
      <Card.Header>I can help with</Card.Header>
      <Card.Description>{offering}</Card.Description>
    </Card.Content>
  </Card>
)

export default StatusCard;