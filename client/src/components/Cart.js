import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
// import TaxnFeeForm from './TaxnFeeForm';
// import TaxnFees from './TaxnFees';
import { Container, Grid, Header, Segment, Divider, Icon, Form, Button, } from 'semantic-ui-react';

class Cart extends React.Component {
    state = { taxnfees: {delivery: '', tax: ''}, cartItems: [], allItems:[],  edit:false, items: [] }

  componentDidMount() {
        if(this.props.location.state.cart){
          this.setState({ cartItems: this.props.location.state.cart })
        }
        axios.get('/api/all_items')
          .then(res => {
            this.setState({ allItems: res.data })
            this.compareItems()
          })       
  }

  compareItems = () => {
      return this.state.cartItems.map(i => {
        return this.state.allItems.map(j => {
          if (i == j.id) {
            this.setState({items: [...this.state.items, j]})
          }
        })
    })
  }

  getTax = () => {
    axios.get('/api/taxnfees')
        .then(res => {
            this.setState({taxnfees: {delivery: res.data[0].delivery, tax: res.data[0].tax }})
        })
  }

  showSelectedItems = () => {
    return this.state.items.map(i => {
      return (
        <Segment style={{marginLeft: '10%', marginRight: '10%'}}>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header as="h3">{i.name}</Header>
              <Header as="h3">Price: ${i.price}</Header>
            </Grid.Column>
            <Grid.Column>
              <Button negative 
                content="Remove from cart"
                style={{marginTop:'5%'}}
                // onClick={}
              />  
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
        </Segment>
      )
    })
  }

    findSubTotal = () => {
      let total = null
      this.state.items.map(i => {
       total += i.price
      })
      return total
    }
 render () {
     const { taxnfees, allItems, cartItems} = this.state
    return (
        <Container style={{width:'50%', paddingTop: '10%', paddingBottom: '10%'}}>
        <Segment>
        <Grid>
            <Grid.Row>
              <Grid.Column>
                  <Header as='h2'>The Following Items are added to the Cart: </Header>
                    <Divider horizontal>
                      <Icon name='food'/>
                    </Divider>
                    {this.showSelectedItems()}
                  <Divider horizontal>
                    <Header as='h2'><Icon name='car' />Delivery/Pickup Option</Header>
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
                    <Header as='h2'><Icon name='credit card' />Taxes/Fees</Header>
                  </Divider>
                <Container textAlign='justify'>
                  <Header as={'h4'}>Subtotal : ${this.findSubTotal()}</Header>
                  <Header as={'h4'}>Delivery Fee :</Header>
                  <Header as={'h4'}>Tax :</Header>
                </Container>
                <Divider horizontal>
                  <Header as='h4'><Icon name='dollar' />Total</Header>
                </Divider>
                <Header as={'h3'}>Total:</Header>
              </Grid.Column>
          </Grid.Row>
          <Grid.Row  style={{padding:'20px'}}>
            <Button color='teal'>Checkout</Button>
          </Grid.Row>
        </Grid>
        </Segment>
        </Container>
    )
 }
}
  
export default Cart;
