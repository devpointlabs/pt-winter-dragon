import React from 'react';
import axios from 'axios';
import ItemForm from './ItemForm';

import { Button } from 'semantic-ui-react';

//CHILD COMPONENT

class Items extends React.Component { 
  state = { items: [], item: {}, addItemToggle: false }

  // componentDidMount() {
  //   axios.get(`/api/menus/${this.props.menuId}/categories`)
  //   .then( res => {
  //     this.setState({ categories:res.data })
  //   })
  // }

  submit = (name, price, description, spice, image) => {
    const category = {name, description, price, spice, image}
    axios.post(`/api/categories/${this.props.catId}/items`, {category})
      .then(res => {
        this.setState({items: [...this.state.items, res.data]})
      })
  }

  showItems = () => {
    return this.state.items.map(i => {
      return (
        <ul key={i.id}>
          <h4>Item Name: {i.name}</h4> 
          <h4>Item Price: {i.price}</h4> 
          <h4>Item Description: {i.description}</h4> 
          <h4>Item Spice: {i.spice}</h4>
          <h4>Item Image: {i.image}</h4>
        </ul>
      )
    })
  }

  render () {
    return (
      <div>
        <h3>Items</h3>
        {this.showItems()}
        <Button onClick={(e) => this.setState({ addItemToggle: !this.state.addItemToggle })}>Add Item</Button>
          {this.state.addItemToggle ? <ItemForm submit={this.submit} /> : <div></div>}
      </div>
    )
  }
}

export default Items;