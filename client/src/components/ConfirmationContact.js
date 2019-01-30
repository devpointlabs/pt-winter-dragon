import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Header} from 'semantic-ui-react';

const ConfirmationContact =() => (
    <Container textAlign='center' style={{padding:"18%"}}>
        <Header as='h3'>
        Thank you for submitting the Contact Form! We will contact you soon...
        </Header>
        <Link to='/'> Home </Link>
    </Container>
)

export default ConfirmationContact;