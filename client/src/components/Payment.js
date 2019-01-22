import React, { Component } from 'react';
import { Header, Segment, Input, Label, Divider, Image, Button } from 'semantic-ui-react';
import BriantreeDrop from './BraintreeDrop';

class Payment extends Component {
  state = { amount: 55.63 };

  render() {
    const { amount } = this.state;

    return (
      <Segment basic textAlign='center'>
        <Header as='h1' textAlign='center'>Golden Dragon Payment</Header>
        <Label color='yellow'>Amount Due</Label>
        <Input value={amount} disabled style={{ fontSize: '18px' }} />
        <Divider />
        <BriantreeDrop amount={amount} />
      </Segment>
    );
  }
}

export default Payment;
