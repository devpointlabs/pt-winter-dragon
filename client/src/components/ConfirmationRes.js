import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Header} from 'semantic-ui-react';

const ConfirmationRes =() => (
    <Container textAlign='center' style={{padding:"100px"}}>
        <Header as='h3'>
        Thank you for submitting the Reservation Form! We will contact you shortly.
        </Header>
        <Link to='/'> Home </Link>
    </Container>
)

export default ConfirmationRes