import React from 'react';
import axios from 'axios';
import { Grid, Segment, Header, Card } from 'semantic-ui-react';
import styled from 'styled-components';

// CLIENT SIDE

class Menu extends React.Component { 

  state = { menus: [], categories: { items: []} }

  componentDidMount() {
  //get all data from database using sql query
    axios.get(`/api/active_menu`)
      .then(res =>{
        this.setState({categories: res.data})
      })
  }

  displayMenu = () => {
    let menu = []
    for (let i = 0; i < this.state.categories.length; i++) {
      menu.push(
        <div>
          <Grid centered>
          <Header as='h2'>{this.state.categories[i].category.name}</Header>
            <Grid.Row columns={3}>
                  {this.state.categories[i].items.map(i => {
                    return (
                        <Grid.Column>
                          <Card>
                            <Card.Content>
                              <Card.Header>{i.name}</Card.Header>
                              <Card.Meta>{i.price}</Card.Meta>
                            </Card.Content>
                          </Card>
                        </Grid.Column>
                    )
                  })
                }
            </Grid.Row>
          </Grid>
        </div>
      )
    }
    return menu
  }

  render() {
    // debugger
    return (
      <div>
        <div>
          <Section>
            <Segment>
              <Header as='h1'>MENU</Header>
                {this.displayMenu()}
            </Segment>
          </Section>
        </div>
      </div>
    )
  }

}  

//temporary styles
const Section = styled.div`
  margin: 10% 15%
`

export default Menu;