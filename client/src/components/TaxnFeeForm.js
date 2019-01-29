import React from 'react';
import { Form, Table, Container, Segment } from 'semantic-ui-react';


class TaxnFeeForm extends React.Component {
    formValues = { tax: 2, delivery: 1, id: 1}
    state = {...this.formValues} 


    componentDidMount() {
        this.setState({tax: this.props.tax, delivery: this.props.delivery})
    }

    handleChange = (e) =>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
            
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const taxnfee = { ...this.state }
        this.props.editTaxnFees(taxnfee)
        this.setState({...this.formValues})
    }

    render () {
        const { tax, delivery } = this.state
        return (
          <Container>
            <Table style={{width:'400px'}}>
              <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Taxes</Table.HeaderCell>
                    <Table.HeaderCell>Delivery Fees</Table.HeaderCell>
                  </Table.Row>
              </Table.Header>
            </Table>
            <Segment>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                  <Form.Input fluid width="6"
                    placeholder= "Tax (%)"
                    name={"tax"}
                    value={tax}
                    onChange={this.handleChange}
                    required
                    /> 
                    <Form.Input fluid width="6"
                    placeholder= "Delivery Fees ($)"
                    name={"delivery"}
                    value={delivery}
                    onChange={this.handleChange}
                    required
                    /> 
                </Form.Group>
                <Form.Button positive>Submit</Form.Button>
              </Form>
            </Segment>
          </Container>
        )
    }
}

export default TaxnFeeForm;