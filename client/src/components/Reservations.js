import React from 'react'
import axios from 'axios'
import ReservationForm from './ReservationForm';
import {Link} from 'react-router-dom';
import { Button, Container, Header, Segment } from 'semantic-ui-react';


class Reservations extends React.Component {
    state= { reservations: [] }

    componentDidMount() {
        axios.get('/api/reservations')
        .then(res => {
            this.setState({ reservations: res.data})
        })
    }

    addReserv = (reservation) => {
        axios.post('/api/reservations', { reservation })
        .then(res =>{
            this.setState({ reservations: [...this.state.reservations, res.data]})
        })
    }

    showReservations = () => {
        return this.state.reservations.map(d => {
            return (
                <Button inverted color='red' key={d.id}>
                <Link to={`/reservations/${d.id}`}>{d.name}
                </Link>
          </Button>
            )
        })
    }

    render() {
        return (
            <Container>
                {/* {this.showReservations()} */}
                <ReservationForm submit={this.addReserv} />
            </Container>
        );
    }
}   


export default Reservations