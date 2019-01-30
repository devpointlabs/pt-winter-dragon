import React, { Component } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import braintree from 'braintree-web-drop-in';
import BraintreeDropin from 'braintree-dropin-react';
import BraintreeSubmitButton from './BraintreeSubmitButton';
import axios from 'axios';

class BraintreeDrop extends Component {
  state = {
    loaded: false,
    token: '',
    redirect: false,
    transactionId: '',
  };

  componentDidMount() {

    axios.get('/api/braintree_token')
      .then( res => {
        const { data: token } = res;
        this.setState({ token, loaded: true });
      })
      .catch( res => {
        console.log('Error Setting Up Payments. Try Again!')
    });
  }

  handlePaymentMethod = (payload) => {
    const { amount } = this.props;

    axios.post('/api/payment', { amount, ...payload })
      .then(res => {
        const { data: transactionId } = res;
        this.setState({ redirect: true, transactionId });
      })
      .catch(res => {
        console.log('Error Posting Payment. Try Again!')
        window.location.reload();
    });
  }

  render () {
    const { loaded, token, redirect, transactionId } = this.state;

    if(redirect)
      return(
        <Redirect to={{
          pathname: '/paymentsuccess',
          state: { amount: this.props.amount, transactionId }
        }}/>
      );
    if(loaded)
      return (
        <Segment basic textAlign='center'>
          <BraintreeDropin
            braintree={braintree}
            authorizationToken={token}
            handlePaymentMethod={this.handlePaymentMethod}
            renderSubmitButton={BraintreeSubmitButton}
          />
        </Segment>
      );
    else
      return(
        <Dimmer active>
          <Loader>Loading Payment Experience. Please Wait...</Loader>
        </Dimmer>
      )
  }
}

export default BraintreeDrop;
