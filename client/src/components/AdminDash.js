import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import { Container, Header, Button} from 'semantic-ui-react';
import Reservations from './Reservations';

const AdminDash = () => (
    <Container>
        <Header as="h1">Admin Dashboard</Header>
        <Link>View All Reservations</Link>

    
    <br/><br/>
    </Container>
)



export default AdminDash;