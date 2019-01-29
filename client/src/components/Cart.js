import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
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
        return this.state.allItems.map( a => {
            return (
                <ul key={a.id}>
                    <li>{a.name} : $ {a.price}</li>
                </ul>
            )
        })
    }

    showCartItems = () => {

        return this.state.cartItems.map( c => {
            return (
                <ul key={c.id}>
                    <li>{c.name} - $$ {c.price}</li>
                </ul>
            )
        })
    }


    // removeItems = (id) => {
    //     axios.delete(`/api/all_items/${id}`)
    //     .then(res => {
    //         this.setState({cartItems: res.data})
    //     });
    //     return (
    //         window.location.href="/cart"
    //     )
    // }


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
     const { taxnfees, allItems, cartItems} = this.state
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
                
                <div>
                  {this.showSelectedItems()}
                  {this.showCartItems()}
                </div>
                
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
            Tax : 6.85 %
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
