import React from 'react';
import axios from 'axios';
import { Grid, Segment, Header } from 'semantic-ui-react';
import styled from 'styled-components';

// CLIENT SIDE

class Menu extends React.Component { 

  state = { menus: [], categories: { items: []} }

  componentWillMount = () => {
  //   axios.get(`api/menus`)
  //     .then(res => {
  //       this.setState({menus: res.data})
  //       this.state.menus.map(m => {
  //         if (m.isactive) {
  //           this.setState({menu: {...this.state.menu, id: m.id, name: m.name}})
  //           axios.get(`api/menus/${m.id}/categories`)
  //             .then(res => {
  //               this.setState({menu: {...this.state.menu, categories: res.data}})
  //               this.state.menu.categories.map(c => {
  //                 axios.get(`api/categories/${c.id}/items`)
  //                   .then(res => {
  //                     debugger
  //                     this.setState({menu: {...this.state.menu, items: res.data}})
  //                     })
  //                 })
  //             })
  //         } else {
  //           return (
  //             <div>No menu is currently set</div>
  //           )
  //         }
  //       })
  //     })

  //get all data from database using sql query
    axios.get(`/api/active_menu`)
      .then(res =>{
        this.setState({categories: res.data})
      })
  }

  menuGrid = () => {

    let grid = []

    //build out grid
    for (let i = 0; i < this.state.categories.length; i++) {
      let column = []
        for (let j = 0; j < 2; j++) {
          column.push(
          <Grid.Column>
            <Header as='h2'>{this.state.categories[i].category.name}</Header>
            <Header as='h3'><i>{this.state.categories[i].category.description}</i></Header>
              {this.state.categories[i].items.map(i => {
                return (
                  <div>
                    <p>{i.name}</p>
                    <p>{i.price}</p>
                  </div>
                )
              })
            }
          </Grid.Column>)
          i++
        }
        grid.push(<Grid.Row>{column}</Grid.Row>)
        i--
    }
  return (
      <Grid columns={2} divided>
        {grid}
      </Grid>
    )

  }

  render() {
    // debugger
    return (
      <div>
        <div>
          <Section>
            <Segment>
              <Header as='h1'>MENU</Header>
                {this.menuGrid()}
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