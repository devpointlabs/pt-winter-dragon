import React from 'react';
import { Button } from 'semantic-ui-react';

const RenderSubmitButton = ({onClick, text}) => {
  return (
    <Button
      primary
      onClick={onClick}
    >{text}</Button>
  )
}

export default RenderSubmitButton;
