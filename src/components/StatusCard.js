import React from 'react';
import { Card } from 'semantic-ui-react'
import './StatusCard.css'

const StatusCard = ({ working_on, need, offering }) => (

  <Card
    centered
    working_on={working_on}
    need={need}
    offering={offering}
  >
    <Card.Content header="I'm working on" />
    <Card.Content description={working_on} />

    <Card.Content header="I'm in need of" />
    <Card.Content description={need} />

    <Card.Content header="I can help with" />
    <Card.Content description={offering} />

  </Card>
)

export default StatusCard;