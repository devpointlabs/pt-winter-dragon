import React from 'react'
import axios from 'axios'
import ReservationForm from './ReservationForm';
import {Link} from 'react-router-dom';
import { Card, Container, Header, Table, Segment } from 'semantic-ui-react';


class Reservations extends React.Component {
    state= { reservations: [] }

    componentDidMount() {
        axios.get('/api/reservations')
        .then(res => {
            this.setState({ reservations: res.data})
        })
    }

    showReservations = () => {
        return this.state.reservations.map(d => {
            return (
        //         {/* <Link to={`/reservations/${d.id}`}>{d.name}

          <Table singleLine>
              <Table.Header>
                  <Table.Row>
                      <Table.HeaderCell>Name </Table.HeaderCell>
                      <Table.HeaderCell>Phone</Table.HeaderCell>
                      <Table.HeaderCell>Email</Table.HeaderCell>
                      <Table.HeaderCell>Requested Date</Table.HeaderCell>
                      <Table.HeaderCell>Requested Time</Table.HeaderCell>
                      <Table.HeaderCell>Number of People</Table.HeaderCell>
                  </Table.Row>
              </Table.Header>
              <Table.Body>
                  <Table.Cell>{d.name}</Table.Cell>
                  <Table.Cell>{d.phone}</Table.Cell>
                  <Table.Cell>{d.email}</Table.Cell>
                  <Table.Cell>{d.date}</Table.Cell>
                  <Table.Cell>{d.time}</Table.Cell>
                  <Table.Cell>{d.party}</Table.Cell>
              </Table.Body>
          </Table>
            )
        })
    }

    render() {
        return (
            <Container>
                {this.showReservations()}
            </Container>
        );
    }
}   


export default Reservations