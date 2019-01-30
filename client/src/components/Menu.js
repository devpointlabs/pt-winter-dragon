import React from 'react';
import axios from 'axios';
import { Grid, Segment, Header, Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
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
            <Grid centered style={{marginTop: "10%"}}>
            <Header as='h2' style={{marginTop: "2%", fontFamily: "Passero One, cursive", fontSize: "50px"}}>{this.state.categories[i].category.name}</Header>
              <Grid.Row columns={4}>
                    {this.state.categories[i].items.map(i => {
                      return (
                          <Grid.Column>
                            <div>
                              <div style={{margin: '0px 0px 25px 0px', textAlign: 'center'}}>
                                  <p style={{fontSize: "18px"}}>{i.name} ${i.price} { i.spice ? <img src={Pepper} style={{height: '14.5px', width: '22.5px'}}/> : <p></p> }</p>
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
      <div>
        <div>
            <Hero>
              <h1 style={{fontSize: '50px'}}>MENU</h1>
            </Hero>
          <div style={{margin: '25px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
            {this.displayMenu()}
          </div>
          <Grid centered style={{marginBottom: "10%"}}>
              <Button.Group>
                <Link to="/order-online">
                  <Button
                    primary
                    positive
                    icon="cart"
                    size="huge"
                    content="Order Online"
                  />
                </Link>
                <Button.Or />
                <Button
                    size="huge"
                    icon="text telephone"
                    secondary
                    content="Call To Order"
                  />
              </Button.Group>
            </Grid>
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