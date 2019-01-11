import React from 'react';
import axios from 'axios';
import MenuForm from './MenuForm';

class Menus extends React.Component { 
  state = { menus: [], active: false}

  componentDidMount() {
    axios.get('/api/menus')
      .then( res => {
        this.setState({ menus:res.data })
      })
  }

  showAllMenus = () => {
    return this.state.menus.map(m => {
      return (
        <ul key={m.id}>
          <p>{m.name}</p>
        </ul>
      )
    })
  }

  submit = (menu) => {
    console.log(menu)
    axios.post(`/api/menus`, { menu })
      .then(res => {
        this.setState({ menus: [res.data, ...this.state.menus ]})
        console.log(menu)
      })
  }

  render() {
    return (
      <div>
        <h2>All Menus</h2>
          {this.showAllMenus()}
        <h2>Add A New Menu</h2>
        <MenuForm submit={this.submit} />
      </div>
    )
  }
}

export default Menus;