import React from 'react';
import styled from 'styled-components';
import {Grid} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import facebook_icon from '../assets/facebook_icon.png';

const Footer = () => (
<Main>
    <Grid columns={4}>
    <Container>
        <Header>Location</Header>
        <div style={{margin: '10px 0px'}}>
        <p>New Golden Dragon Restaurant</p>
        <p>1716 South State Street</p>
        <p>Salt Lake City, Utah 84115</p>
        </div>
    </Container>
    <Container>
        <Header>Hours</Header>
        <div style={{margin: '10px 0px'}}>
        <p>Weekday Hours: Mon - Thurs: 11am - 10pm - Fri: 11am - 10:30pm</p>
        <p>Weekend Hours: Sat: 11am - 10:30pm - Sun 10:30am - 9:30pm</p>
        </div>
    </Container>
    <Grid.Column floated="right">
    <Container>
     <p><a href="https://www.facebook.com/slcnewgoldendragon/" target="_blank"><Facebook  /></a></p>
     <p>{"\u00A9"}2018 New Golden Dragon Restaurant</p>
     <p>All Rights Reserved</p>
     <Link to="/admin" style={{color: 'grey'}}>Admin Dashboard</Link>
     <br />
     <Link to="/login" style={{color: 'grey'}}>Admin Login</Link>

    </Container>
    </Grid.Column>
    </Grid>
</Main>
);

export default Footer;

const Main = styled.div`
height: 250px;
background-color: #171616;
width: 100%;
// position: fixed;
bottom: 0;
`
const Container = styled.div`
    margin: 25px;
    padding: 30px;
    color: white;
    max-width: 250px;
`
const Header = styled.p`
font-size: 20px !important;
border-bottom: solid 1px white;
display: inline;
padding-bottom: 3px;
`
const Facebook = styled.div`
background-image: url(${facebook_icon});
height: 35px;
width: 35px;
background-size: cover;
`