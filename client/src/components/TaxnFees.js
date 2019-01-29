import React from 'react'
import axios from 'axios'
import TaxnFeeForm from './TaxnFeeForm';
import { Container, Header, Table, Button,} from 'semantic-ui-react';

class TaxnFees extends React.Component {
    state = {taxnfees: {id: 1, delivery: 2.00, tax: 2}, edit: false}

    componentDidMount() {
        axios.get('/api/taxnfees')
        .then(res => {
          if(res.data[0]){
            this.setState({taxnfees: {id: res.data[0].id, delivery: res.data[0].delivery, tax: res.data[0].tax }})
          } else {
            this.setState({...this.state.taxnfees})
          }
        })
    }

    showForm = () => {
        return (
            <div>
              <TaxnFeeForm editTaxnFees={this.editTaxnFees} />
            </div>
        )
    }

    editTaxnFees = (taxnfee) => {
        axios.put(`/api/taxnfees/${taxnfee.id}`, {taxnfee})
        .then(res => {
            this.setState({taxnfees: res.data})
            window.location = "/taxnfees";
            this.setState({edit: false})
        });
    }

    showTaxnFees = () => {
        if (this.state.edit === false) {
          return (
            <Table style={{width:'400px'}}>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>Taxes</Table.HeaderCell>
                    <Table.HeaderCell>Delivery Fees</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                    <Table.Body style={{fontSize:'x-large'}}>
                      <Table.Cell>{this.state.taxnfees.tax} %</Table.Cell>
                      <Table.Cell>$ {this.state.taxnfees.delivery}</Table.Cell>
                </Table.Body><br/>
                <Table.Footer>
                    <Button 
                      color='green' 
                      style={{width: '100%'}}
                      onClick={() => {this.setState({edit: !this.state.edit})}} 
                      content="Edit" 
                    />
                </Table.Footer>
            </Table>
          )
        }
        else {
          return (
            <TaxnFeeForm 
              editTaxnFees={this.editTaxnFees} 
              tax={this.state.taxnfees.tax}
              delivery={this.state.taxnfees.delivery} 
              id={this.state.taxnfees.id}
            />
          )
        }
    }


    render() {
        return(
          <div>
            <Header>Setup Taxes and Fees</Header>
            {this.showTaxnFees()}
          </div>
        )
    }
}

export default TaxnFees;