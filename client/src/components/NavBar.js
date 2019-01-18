import React from 'react'
import { NavLink } from 'react-router-dom'
import { Segment, Button, Menu } from 'semantic-ui-react'
import styled from 'styled-components';
import logo_test from '../assets/logo_test.jpg';


const NavBar = () => (
  <Segment as={Transparent}>
    {/* <NavLink activeStyle={styles.active} exact to='/'>Home</NavLink> */}

    <Menu secondary>
    <Logo />
    <Menu.Menu position='right'>
      <Menu.Item>
         <NavLink activeStyle={styles.active} style={{color:'grey', fontSize:'20px',}} exact to='/'>
         Home</NavLink>
      </Menu.Item>
      <Menu.Item >
          <NavLink activeStyle={styles.active} style={{color:'grey', fontSize:'20px',}} exact to='/Menu'>
          Menu</NavLink>
      </Menu.Item>
      <Menu.Item>
          <NavLink activeStyle={styles.active} style={{color:'grey', fontSize:'20px',}} exact to='/reservationform'>
          Reservations</NavLink>
      </Menu.Item>
      <Menu.Item>
          <NavLink activeStyle={styles.active} style={{color:'grey', fontSize:'20px',}} exact to='/contacts'>
          Contact Us</NavLink>
      </Menu.Item>
      <Menu.Item>
        <Button primary style={{backgroundColor:'#e0d538',
          color:'black',
          height:'75px',
          fontSize:'20px'}}>Order Online</Button>
      </Menu.Item>
    </Menu.Menu>
    </Menu>
  </Segment>
)

const Transparent = styled.div`
  padding: 40px 0px !important;
  background: transparent !important;
  // background-color: rgba(52,52,52, 0.3) !important;
  // position: sticky;
`

const Logo = styled.div`
  background-image: url(${logo_test});
  display: flex;
  // border: 0.5px #f2f2f2 solid;
  height: 115px;
  width: 115px;
  border-radius: 50%;
  justify-content: center;
  text-align:center;
  background-color: #e0d538;
  position: relative;
  left: 40px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
