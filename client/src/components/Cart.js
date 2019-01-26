import React from 'react';
import axios from 'axios';
// import TaxnFeeForm from './TaxnFeeForm';
// import TaxnFees from './TaxnFees';
import {Container, Grid, Header, Segment, Divider, Icon, Form, Button, Table } from 'semantic-ui-react';

class Cart extends React.Component {
    state = { taxnfees: {}, cartItems: [], allItems:[],  edit:false}
    componentDidMount() {
        if(this.props.location.state.cart){
        this.setState({cartItems: this.props.location.state.cart})
        }
        axios.get('/api/all_items')
        .then(res => {
            this.setState({allItems: res.data})
        })
    }
    showSelectedItems = () => {
     return (
         <div>
             
         </div>
        )
    }
    calculateTotal = () => {
        return (
            <div>
            </div>
        )
    }
    showTotal = () => {
        return (
            <div>
            </div>
        )
    }
 render () {
     const { menuitems, taxnfees} = this.state
    return (
        <Container style={{width:'50%'}}>
        <br/><br/><br/><br/>
        <br/><br/><br/><br/>
        <Segment>
        <Grid>
            <Grid.Row>
            <Grid.Column>
                <Header>The Following Items are added to the Cart: </Header>
                <Divider horizontal>
                <Icon name='food'/>
                </Divider>
                {this.showSelectedItems()}
                <Divider horizontal>
                <Header as='h4'>
                 <Icon name='car' />
                     Delivery/Pickup Option
                 </Header>
                </Divider>
                <Form.Radio
            label='Delivery'
            // value='delivery'
            // checked={value === 'delivery'}
            // onChange={this.handleChange}
          />
          <Form.Radio
            label='Pickup'
            // value='pickup'
            // checked={value === 'pickup'}
            // onChange={this.handleChange}
          />
            <Divider horizontal>
                <Header as='h4'>
                 <Icon name='credit card' />
                     Taxes/Fees
                 </Header>
            </Divider>
            <Container textAlign='justify'>
            <Header as={'h4'}>
            Subtotal :
            </Header>
            <Header as={'h4'}>
            Delivery Fee :
          
            </Header>
            <Header as={'h4'}>
            Tax :
            </Header>
            </Container>
            <Divider horizontal>
                <Header as='h4'>
                 <Icon name='dollar' />
                     Total
                 </Header>
            </Divider>
            <Header as={'h3'}>
            Total:
            </Header>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row  style={{padding:'20px'}}>
            <Button color='teal'>Checkout</Button>
            </Grid.Row>
        </Grid>
        </Segment>
        <br/><br/><br/><br/>
        <br/><br/><br/><br/>
        </Container>
    )
 }
}
  
export default Cart;