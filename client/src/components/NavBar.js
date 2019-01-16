import React from 'react'
import { NavLink } from 'react-router-dom'
import { Segment, Button, Menu } from 'semantic-ui-react'
import styled from 'styled-components';
import { red } from 'ansi-colors';


const NavBar = () => (
  <Segment as={Transparent}>
    {/* <NavLink activeStyle={styles.active} exact to='/'>Home</NavLink> */}
    
    <Menu secondary>
    <Menu.Menu position='right' >
    
      <Menu.Item>
         <NavLink activeStyle={styles.active} style={{color:'white', fontSize:'20px',}} exact to='/'>
         Home</NavLink>
      </Menu.Item>
      <Menu.Item >
          <NavLink activeStyle={styles.active} style={{color:'white', fontSize:'20px',}} exact to='/Menu'>
          Menu</NavLink>
      </Menu.Item>
      <Menu.Item>
          <NavLink activeStyle={styles.active} style={{color:'white', fontSize:'20px',}} exact to='/reservations'>
          Reservations</NavLink>
      </Menu.Item>
      <Menu.Item>
        <Button primary style={{backgroundColor:'#e0d538', 
          color:'black',
          height:'60px',
          fontSize:'20px'}}>Order Online</Button>
      </Menu.Item>
    </Menu.Menu>
    </Menu>
  </Segment>
)

const Transparent = styled.div`
  padding: 40px 0px !important;
  background: transparent !important;
  // background-color: rgba(52,52,52, 0.5) !important;
  position: sticky;
`

const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#f2f2f2',
    backgroundColor: '#333',
    padding: '12px 20px',
    border: '0.5px dotted black',
    borderRadius: '7px',
  }
}

export default NavBar