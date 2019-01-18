import React from 'react'
import axios from 'axios'
import ReservationForm from './ReservationForm';
import {Link} from 'react-router-dom';
import { Card, Container, Header, Table, Button, Segment } from 'semantic-ui-react';


class Reservations extends React.Component {
    state = { reservations: [] }

    componentDidMount() {
        axios.get('/api/reservations')
        .then(res => {
            this.setState({ reservations: res.data})
        })
    }

    removeReserv = (id) => {
        axios.delete(`/api/reservations'/${id}`)
        const delReserv = this.state.reservations.filter( del => del.id !== id)
        this.setState({ reservations: [...delReserv]})
    }

    showReservations = () => {
        return this.state.reservations.map(d => {
            return (
        //         {/* <Link to={`/reservations/${d.id}`}>{d.name}
    
          <Table singleLine>
              <Table.Header>
                  <Table.Row >
                      <Table.HeaderCell>No. </Table.HeaderCell>
                      <Table.HeaderCell>Name </Table.HeaderCell>
                      <Table.HeaderCell>Phone</Table.HeaderCell>
                      <Table.HeaderCell>Email</Table.HeaderCell>
                      <Table.HeaderCell>Requested Date</Table.HeaderCell>
                      <Table.HeaderCell>Requested Time</Table.HeaderCell>
                      <Table.HeaderCell>Number of People</Table.HeaderCell>
                  </Table.Row>
              </Table.Header>
              <Table.Body>
                  <Table.Cell>{d.id}</Table.Cell>
                  <Table.Cell>{d.name}</Table.Cell>
                  <Table.Cell>{d.phone}</Table.Cell>
                  <Table.Cell>{d.email}</Table.Cell>
                  <Table.Cell>{d.date}</Table.Cell>
                  <Table.Cell>{d.time}</Table.Cell>
                  <Table.Cell>{d.party}</Table.Cell>
                  <Table.Cell>
                      <Button icon color="red" onClick={() => this.removeReserv(d.id)}>Delete</Button>
                  </Table.Cell>
                  {/* <Table.Cell>
                      <Button icon color="green" onClick={() => this.edit()}>Edit</Button>
                  </Table.Cell> */}
              </Table.Body>
          </Table>
            )
        })
    }

    // removeReservation = (id) => {
    //     let delReserv = this.state.reservations.filter()

    // }



    render() {
        return (
            <Container>
                <br/><Header as="h1">Reservation List</Header><br/>
                {this.showReservations()}
                <br/><br/>
            </Container>
            
        );
    }
}


export default Reservations
