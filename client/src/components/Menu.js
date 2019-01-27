import React from 'react';
import axios from 'axios';
import { Grid, Segment, Header, Card, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import Pepper from '../assets/pepper.png';
import heroimg from '../assets/bamboo.jpg'


// CLIENT SIDE

class Menu extends React.Component { 

  state = { menus: [], categories: { items: []}, cart: [] }

  componentDidMount() {
  //get all data from database using sql query
    axios.get(`/api/active_menu`)
      .then(res =>{
        this.setState({categories: res.data})
    })
  }

  handleAddCart = (id) => {
    this.setState({cart: [...this.state.cart, id]})
  }

  checkout = () => {
    this.props.history.push({
      pathname: '/cart',
      state: { cart: [...this.state.cart] }
    })
  }

  displayMenu = () => {
    let menu = []
    for (let i = 0; i < this.state.categories.length; i++) {
      menu.push(
        <div>
          <Grid centered>
          <Header as='h2'>{this.state.categories[i].category.name}</Header>
            <Grid.Row columns={2}>
                  {this.state.categories[i].items.map(i => {
                    return (
                        <Grid.Column>
                          <div>
                            <div style={{margin: '0px 0px 25px 0px', textAlign: 'center'}}>
                                <p>{i.name} ${i.price} { i.spice ? <img src={Pepper} style={{height: '14.5px', width: '22.5px'}}/> : <p></p> }</p>
                                {/* <Button 
                                  positive
                                  content="Add To Cart"
                                  onClick={() => this.handleAddCart(i.id)}
                                /> */}
                            </div>
                          </div>
                        </Grid.Column>
                    )
                  })
                }
            </Grid.Row>
          </Grid>
        </div>
      )
    }
    return menu
  }

  render() {
    // debugger
    return (
      <div style={{}}>
        <div>
            <Hero>
              <h1 style={{fontSize: '50px'}}>MENU</h1>
            </Hero>
          <div style={{margin: '25px', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto'}}>
                {this.displayMenu()}
                {/* <Button
                  positive 
                  content="Checkout"
                  onClick={this.checkout}
                /> */}
          </div>
        </div>
      </div>
    )
  }

}  

//temporary styles
const Section = styled.div`
  margin: 10% 15%
`
const Hero = styled.div`
background-image: url(${heroimg});
text-align: center;
color: white;
min-height: 200px;
padding: 265px 0px;
height: 100% !important;
position: relative;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export default Menu;