import React from 'react';
import axios from 'axios';
import ItemForm from './ItemForm';
import { Grid, Card, Image, Button } from 'semantic-ui-react';
import Pepper from '../assets/pepper.png';

//CHILD COMPONENT

class Items extends React.Component { 
  state = { items: [], item: {}, addItemToggle: false, toggleEditItem: false, file: '' }

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

  submit = (name, price, spice, image, file) => {
    const item = {name, price, spice, image, file}
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

  editItem = (name, price, spice, image, id, file) => {
    const item = { name, price, spice, image, id, file}
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
      return (
        <Grid.Column key={i.id}>
        <Card>
          <Image 
          src={i.image}
          />
          <Card.Content>
          <div style={{float: 'right'}}>
          { i.spice ? <img src={Pepper} style={{height: '20px', width: '20px'}}/> : <p></p> }
          </div>
          <Card.Header>{i.name}</Card.Header> 
          <p>${i.price}</p> 
          {/* <p>Spicy: {spicy}</p> */}
          </Card.Content>
          <Card.Content>

          {this.state.toggleEditItem ? <ItemForm id={i.id} name={i.name} price={i.price} spice={i.spice} image={i.image} editItem={this.editItem}/> : null }
          <Button 
          color='yellow' 
          style={{float: 'left', padding: '10px'}} 
          onClick={() => this.setState({toggleEditItem: !this.state.toggleEditItem})}
          >
          { this.state.toggleEditItem ? 'Cancel' : 'Edit Item' }
          </Button>
          <Button size='small' trash="true" style={{float: 'right', padding: '10px'}} negative onClick={() => this.deleteItem(i.id)}>Delete Item</Button>
          </Card.Content>
        </Card>
        </Grid.Column>
      )
    })
  }

  render () {
    return (
      <div>
        <h3>Items</h3>
        <Grid columns={4} style={{margin: '5px'}}>
        {this.showItems()}
        </Grid>
          {this.state.addItemToggle ? <ItemForm submit={this.submit} /> : <div></div>}
        <Button onClick={(e) => this.setState({ addItemToggle: !this.state.addItemToggle })}>Add Item</Button>
        <br />
      </div>
    )
  }
}


export default Items;