import React from 'react';
import {Header, Container} from 'semantic-ui-react';

class Food extends React.Component {
   
    state = {
        foods: [
            {id: 1, name: 'Rice', price: '2.99', description: 'Steamed Rice'},
            {id: 2, name: 'Chowmein', price: '1.99', description: 'Chicken Chowmein'},
            {id: 3, name: 'Orange Chicken', price: '3.99', description: 'Chicken Item'},
            {id: 4, name: 'Kung Pao Chicken', price: '4.99', description: 'Chicken Item'},
            {id: 5, name: 'Fried Rice', price: '2.00', description: 'Chicken Fried Rice'},
        ]
    }

    showFood = () => {
       return this.state.foods.map (foods => {
           return (
           <Container>
           <Header as="h3">{foods.id} | {foods.name} | {foods.price} | {foods.description}</Header>
           </Container>
           )
       })
    }

    total = () => {
        return this.state.foods.map (total => {
            return(
                <div>{total.price}</div>
            )
        })
    }

    render () {
        return (

            <Container>
                 <br/><br/><br/><br/>
                 <br/><br/><br/><br/>
                 <br/><br/><br/><br/>
                 <br/><br/><br/><br/>
                 <br/><br/><br/><br/>
                 <br/><br/><br/><br/>
                <Header>Food List</Header>
                <Header>{this.showFood()}</Header>
                <Header>{this.total()}</Header>
        
            </Container>
        )
    }
}

export default Food;