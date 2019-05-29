import React  from 'react';
import { TextArea, Header } from 'semantic-ui-react'

const TextInput = ({onChange, title, value, name}) => (
  <div>
    <br/>
    <Header>{title}</Header>
    <br/>
    <TextArea type="text" value={value} onChange={onChange} name={name} />
    <br/>
  </div>
);

export default TextInput;