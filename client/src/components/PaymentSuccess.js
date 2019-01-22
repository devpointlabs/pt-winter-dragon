import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

const PaymentSuccess = ({ location: { state } }) => {
  if(state && state.transactionId)
    return(
      <Segment basic textAlign='center'>
        <Header as='h1' color='green'>Your order has been placed!</Header>
        <p>You have been successfully charged: ${state.amount}</p>
        <p>Your Transcation Id is: {state.transactionId}</p>
        <Link to='/'>Back to Home Page</Link>
      </Segment>
    )
  else
    return(<Redirect to='/Payment' />);
}

export default PaymentSuccess;
