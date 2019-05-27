import React  from 'react';
import { TextArea, Header } from 'semantic-ui-react'

const TextInput = ({handleChange, title, value}) => (
  <div>
    <br/>
    <Header>{title}</Header>
    <br/>
    <TextArea type="text" value={value} onChange={(event) => handleChange(event.target.value)} />
    <br/>
  </div>
);

export default TextInput;