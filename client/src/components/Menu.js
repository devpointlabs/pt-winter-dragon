import React from 'react';
import axios from 'axios';
import { Container, Segment } from 'semantic-ui-react';

// CLIENT SIDE

class Menu extends React.Component { 

  state = { menus: [], menu: {id: null, name: '', categories: [], items: []} }

  componentDidMount = () => {
    axios.get(`api/menus`)
      .then(res => {
        this.setState({menus: res.data})
        this.state.menus.map(m => {
          if (m.isactive) {
            this.setState({menu: {id: m.id, name: m.name}})
            axios.get(`api/menus/${m.id}/categories`)
              .then(res => {
                this.setState({categories: res.data})
                console.log(this.state.categories)
                this.state.categories.map(c => {
                  axios.get(`api/categories/${c.id}/items`)
                    .then(res => {
                      this.setState({items: res.data})
                      })
                  })
              })
          } else {
            return (
              <div>No menu is currently set</div>
            )
          }
        })
      })
  }

  // displayMenu = () => {

  // }

  render() {
    return (
      <Container>
        {/* {this.displayMenu()} */}
      </Container>
    )
  }

}  

export default Menu;