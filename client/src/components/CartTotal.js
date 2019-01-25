import React from 'react'
import axios from 'axios';
import {Container, Table, Button, Header} from 'semantic-ui-react'
import TaxnFeeForm from './TaxnFeeForm';
import TaxnFees from './TaxnFees';

class CartTotal extends React.Component{

    state = { taxnfees: {}, ctotal: [] }

    componentDidMount() {
        axios.get(`/api/taxnfees/${this.props.match.params.id}`)
        .then(res => {
            this.setState({ taxnfees: res.data})
        })
    }

    // showInfo = () => {
    //     return this.state.ctotal.map(p => {
    //         return (
    //             <ul key={p.id}>


                
    //             </ul>
    //         )
    //     })
    // }


    // state = {
    //  orders: [
    //     {name: 'Chowmein', count: 1, price: 10},
    //     {name: 'Rice', count: 2, price: 5},
    //     {name: 'Chicken', count: 2, price: 20},

    //     ]
    // }
    render() {
        return(
            <Container>
                <br/><br/><br/><br/>
                <br/><br/><br/><br/>
                <Header>Adding Subtotal, Taxes, and Fees </Header>
                <h2>Tax: {this.state.taxnfees.tax}</h2>
                <h2>Delivery Fee: {this.state.taxnfees.delivery}</h2>
                {/* <Total orders={this.state.orders} /> */}
                <br/><br/><br/><br/><br/><br/><br/><br/>
            </Container>
        )
    }

}
// const Total = ({cartTotal}) => (
//     <Header as="h2">
//     Your Total is: 
//     {orders.reduce((sum,i) =>
//         (sum += i.count * i.price), 0)}
//     </Header>
// )

export default CartTotal;