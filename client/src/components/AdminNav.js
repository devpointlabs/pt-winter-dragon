import React, { Component, } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import ReservationForm from './ReservationForm';
import { NavLink } from 'react-router-dom';


class AdminNav extends Component {
    state = { activeItem: 'reservations' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Grid>
          <Grid.Column width={4}>
          <Menu fluid secondary vertical>
              <Menu.Item name='Reservations' 
              active={activeItem === 'reservations'} >
               <NavLink  exact to='/reservations'>
              Reservations </NavLink>
              </Menu.Item>

              <Menu.Item name='Menu' 
              active={activeItem === 'menu'} 
              onClick={this.handleItemClick} />

              <Menu.Item
                name='Contact Form'
                active={activeItem === 'contactform'}
                onClick={this.handleItemClick} />

            </Menu>
          </Grid.Column>
  
          <Grid.Column stretched width={12}>
            <Segment>
              <ReservationForm />
            </Segment>
          </Grid.Column>
        </Grid> 

      )
    }
  }

export default AdminNav;