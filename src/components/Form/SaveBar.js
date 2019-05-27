import React  from 'react';

const SaveBar = ({
  onDiscardAction,
  open,
  onSaveAction,
}) => (
  open ?
      <div className="SaveBar">
        <span>You modified your status, want to save it ?</span>
        <button onClick={onDiscardAction}>DISCARD</button>
        <button onClick={onSaveAction}>SAVE</button>
      </div>
      :
      null
);

export default SaveBar;