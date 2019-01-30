import React from 'react';
import { Button, Form, Checkbox } from 'semantic-ui-react';

class ItemForm extends React.Component {
  state = { 
      name: '',
      price: '', 
      spice: false,
      image: [],
      file: ''
    }

  componentWillMount () {
    if(this.props.id) {
      this.setState({name: this.props.name, price: this.props.price, image: this.props.image, spice: this.props.spice, id: this.props.id })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, price, spice, image, id, file } = this.state;
    if (this.props.id) {
      this.props.editItem(name, price, spice, image, id, file)
    } else {
      this.props.submit(name, price, spice, image, file)
    };
    this.updateItem(id, name, price, spice, image, id, file)
    this.setState( {name: '', price: '' })
  };

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleToggle = () => this.setState({spice: !this.state.spice })

  checkToggle = () => { return "checked" ? this.state.spice : !this.state.spice }

  onDrop = (files) => {
    this.setState({ ...this.state, file: files[0] })
  }

  render () {
    const { name, price } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Item Name</label>
          <input 
            name="name"
            title="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <input 
            name="price"
            title="price"
            value={price}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Spicy</label>
          <Checkbox toggle 
            name="spice"
            title="spice"
            checked={this.checkToggle()}
            onChange={this.handleToggle}
          />
        </Form.Field>
        <Button positive>Add</Button>
        <br />
        <br />
      </Form>
      )
    }
}

export default ItemForm;