import React from 'react';
import axios from 'axios';
import {Form, Container, Button, List, Header, Segment } from 'semantic-ui-react';


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

    // handlePageChange() {
    //     window.location = "/taxnfees";
    //   }

    render () {
        const { tax, delivery } = this.state
        return(
            <Container style={{width:'60%'}}> <br/><br/><br/><br/><br/><br/><br/>
            <Segment style={{width:'60%'}}>
            <Header as='h2'>Enter the Tax and Delivery Fee</Header>
            <Form onSubmit={this.handleSubmit}>
                <Form.Input fluid width="6"
                label="Taxes in %"
                placeholder= "Enter the Tax %"
                name={"tax"}
                value={tax}
                onChange={this.handleChange}
                required
                /> 
                <Form.Input fluid width="6"
                label="Delivery Fee in $"
                placeholder= "Enter the Delivery Fees"
                name={"delivery"}
                value={delivery}
                onChange={this.handleChange}
                required
                /> 
                <Form.Button color='instagram'>Submit</Form.Button>
            </Form>
            </Segment>
            <br/><br/><br/><br/><br/>
            </Container>
        )
    }
}

export default TaxnFeeForm;