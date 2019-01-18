import React from 'react';
import { Button } from 'semantic-ui-react';

class ItemForm extends React.Component {
  state = { 
      name: '',
      price: '', 
      image: '',
      spice: false,
    }

  // componentWillMount () {
  //   if(this.props.id) {
  //     this.setState({name: this.props.name})
  //   }
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, price, spice, image } = this.state;
    this.props.submit(name, price, image, spice)
    this.setState( {name: '', price: '', spice: false })
  };

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };



  render () {
    const { name, price, spice, image } = this.state;

    return (
        <form onSubmit={this.handleSubmit}>
        <h4>Item Name</h4>
        <input 
          name="name"
          title="name"
          value={name}
          onChange={this.handleInputChange}
        />
        <br />
        <h4>Item Price</h4>
        <input 
          name="price"
          title="price"
          value={price}
          onChange={this.handleInputChange}
        />
         <br />
        <h4>Item Spice</h4>
        <input 
          name="spice"
          title="spice"
          value={spice}
          onChange={this.handleInputChange}
        />
         <br />
        <h4>Item Image</h4>
        <input 
          name="image"
          title="image"
          value={image}
          onChange={this.handleInputChange}
        />
        <br />
        <Button positive>Add</Button>
      </form>
      )
    }
}

export default ItemForm;