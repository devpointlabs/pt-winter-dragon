import React from 'react';
import axios from 'axios';
import ItemForm from './ItemForm';
import { Button } from 'semantic-ui-react';

//CHILD COMPONENT

class Items extends React.Component { 
  state = { items: [], item: {}, addItemToggle: false, toggleEditItem: false }

  componentDidMount() {
    axios.get(`/api/categories/${this.props.catId}/items`)
    .then( res => {
      this.setState({ items:res.data })
    })
  }

  getItems = () => {
    axios.get(`/api/categories/${this.props.catId}/items`)
    .then( res => {
      this.setState({ items:res.data })
    })
  }

  submit = (name, price, spice, image) => {
    const item = {name, price, spice, image}
    axios.post(`/api/categories/${this.props.catId}/items`, {item})
      .then(res => {
        this.setState({items: [...this.state.items, res.data]})
      })
  }

  deleteItem = (id) => {
      axios.delete(`/api/categories/${this.props.catId}/items/${id}`)
          .then(res => {
            this.getItems()
        }) 
  }

  editItem = (name, price, spice, image, id) => {
    const item = { name, price, spice, image, id}
    axios.put(`/api/categories/${this.props.catId}/items/${id}`, { item } )
      .then(() => { 
        axios.get(`/api/categories/${this.props.catId}/items`)
        .then(res => {
          this.setState({ items: res.data })
        })
    })
  }

  showItems = () => {
    return this.state.items.map(i => {
      let spicy = "Yes";
      if (i.spice === false) {
        spicy = "No";
      }
      return (
        <ul key={i.id}>
          <h4>Item Name: {i.name}</h4> 
          <h4>Price: {i.price}</h4> 
          <h4>Spicy: {spicy}</h4>
          <h4>Image: {i.image}</h4>
          {this.state.toggleEditItem ? <ItemForm id={i.id} name={i.name} price={i.price} spice={i.spice} image={i.image} editItem={this.editItem}/> : null }
          <Button color='yellow' onClick={() => this.setState({toggleEditItem: !this.state.toggleEditItem})}>Edit Item</Button>
          <Button trash="true" negative onClick={() => this.deleteItem(i.id)}>Delete Item</Button>
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