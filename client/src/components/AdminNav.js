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



// import React from 'react';
// import { Grid, Menu, Segment } from 'semantic-ui-react';
// import styled from 'styled-components';

// const AdminNav = () => (
//     <Segment>
//         {/* <Grid.Column width={4}> */}
//         <Menu fluid vertical tabular>
//             <Menu.Item name='View Reservations' />
//             <Menu.Item name='View Contact Form' />
//             <Menu.Item name='Menu Items' />
//         </Menu>
//         {/* </Grid.Column> */}
//         {/* <Grid.Column stretched width={12}> */}
//         <Segment>
//             Add Contents...
//         </Segment>
//         {/* </Grid.Column> */}
//     </Segment>
// )

// export default AdminNav;

// const Transparent = styled.div`
//   padding: 40px 0px !important;
//   background: transparent !important;
//   // background-color: rgba(52,52,52, 0.3) !important;
//   // position: sticky;
// `