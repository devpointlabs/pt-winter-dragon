import React from 'react'
import axios from 'axios'
import TaxnFeeForm from './TaxnFeeForm';
import { Container, Header, Segment, Button, Grid,} from 'semantic-ui-react';

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
      debugger
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
            <Segment>
              <Grid columns={2} style={{width:"50%", margin:"0px auto"}}>
                <Grid.Column>
                  <Header>Taxes</Header>
                    {this.state.taxnfees.tax} %
                </Grid.Column>
                <Grid.Column>
                  <Header>Delivery Fees</Header>
                    $ {this.state.taxnfees.delivery}
                </Grid.Column>
                <Button 
                  color='green' 
                  style={{width:"30%", margin:"0px auto"}}
                  onClick={() => {this.setState({edit: !this.state.edit})}} 
                  content="Edit" 
                />
            </Grid>
          </Segment>
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