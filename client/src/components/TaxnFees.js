import React from 'react'
import axios from 'axios'
import TaxnFeeForm from './TaxnFeeForm';
import { Container, Header, Table, Button,} from 'semantic-ui-react';

class TaxnFees extends React.Component {
    state = {taxnfees: { }, edit: false}

    componentDidMount() {
        axios.get('/api/taxnfees')
        .then(res => {
            this.setState({ taxnfees: res.data})
        })
    }

    showForm = () => {
        return (
            <div>
            <TaxnFeeForm editTaxnFees={this.editTaxnFees} />
            </div>
        )
    }

    reload = () => {
        if (this.state.taxnfee){
            this.setState({edit: false})
        }
        else {
            this.reload()
        }
    }

    editTaxnFees = (taxnfee) => {
        axios.put(`/api/taxnfees/${taxnfee.id}`, {taxnfee})
        .then(res => {
            this.setState({taxnfee: res.data})
            window.location.reload();
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
                        <Button color='green' style={{width: '100%'}}
                        onClick={() => {this.setState({edit: !this.state.edit})}} content="Edit" />
                    </Table.Footer>
                </Table>
            )
        }
        else {
            return (
                <Container>
                 <TaxnFeeForm editTaxnFees={this.editTaxnFees} tax={this.state.taxnfees.tax}
                    delivery={this.state.taxnfees.delivery} id={this.state.taxnfees.id}/>
                </Container>
            )
        }
        
    }


    render() {
        return(
            <Container style={{width:'400px'}}>
                <br/><br/><br/><br/><br/><br/><br/>
                <Header>Setup Taxes and Fees</Header>
                <Table >
                   {this.showTaxnFees()}
                   </Table>
                   <br/><br/><br/><br/><br/><br/><br/>

            </Container>
        )
    }
}

export default TaxnFees;