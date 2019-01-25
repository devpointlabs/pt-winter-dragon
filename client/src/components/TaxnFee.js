import React from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import TaxnFeeForm from './TaxnFeeForm';
import {Container, Table, Button, Modal} from 'semantic-ui-react';

const TaxnFee = ({id, tax, delivery, remove, edit }) => (
    <Container>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Table.Row id={id}> 
        <Table.Cell>{tax}</Table.Cell>
        <Table.Cell>{delivery}</Table.Cell>
        <Table.Cell>
      <Button color="red" onClick={() => remove(id)}>
        Delete
      </Button>
      <Modal trigger={
      <Button color="green">
        Edit
      </Button>
      }>
      <Modal.Header>Edit Form</Modal.Header>
      <TaxnFeeForm
        id={id}
        tax={tax}
        delivery={delivery}
        edit={edit}
      />
      </Modal>
    </Table.Cell>
    </Table.Row>
    <br/><br/><br/><br/><br/><br/><br/><br/>
    </Container>
)

export default TaxnFee;