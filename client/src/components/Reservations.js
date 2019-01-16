import React from 'react'
import axios from 'axios'
import ReservationForm from './ReservationForm';
import {Link} from 'react-router-dom';
import { Button, Container, Header, Segment } from 'semantic-ui-react';


class Reservations extends React.Component {
    state= { reservations: {} }

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

    // showReservations = () => {
    //     return this.state.reservations.map(d => {
    //         return (
    //             <Button inverted color='red' key={d.id}>
    //             <Link to={`/reservations/${d.id}`}>{d.name}
    //             </Link>
    //       </Button>
    //         )

    //     })
    // }
    showReservations = () => {
        const { reservations: { name, phone, email, date, time, party }} = this.state

        return (
            <div>
                <h1>{name}</h1>
                <h2>{phone}</h2>
                <h2>{email}</h2>
                <h2>{date}</h2>
                <h2>{time}</h2>
                <h2>{party}</h2>
            </div>
        )
    }

    render() {
        return (
            <Container>
                {this.showReservations()}
                <ReservationForm submit={this.addReserv} />
            </Container>
        );
    }
}   


export default Reservations