import React, { Component } from 'react';
import { Header, Segment, Input, Label, Divider, Container } from 'semantic-ui-react';
import BriantreeDrop from './BraintreeDrop';

class Payment extends Component {
  state = { amount: '' };

  componentDidMount() {
    this.setState({ amount: this.props.location.state.total })
  }

  render() {
    const { amount } = this.state;

    return (
      <Container style={{width:'50%', paddingTop: '10%', paddingBottom: '10%'}}>
        <Segment basic textAlign='center'>
          <Header as='h1' textAlign='center'>Golden Dragon Payment</Header>
          <Label color='yellow'>Amount Due</Label>
          <Input value={amount} disabled style={{ fontSize: '18px' }} />
          <Divider />
          <BriantreeDrop amount={amount} />
        </Segment>
      </Container>
    );
  }
}

export default Payment;
