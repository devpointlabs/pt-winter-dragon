import React from 'react';
import { Button } from 'semantic-ui-react';

class MenuForm extends React.Component {
  state = { 
      name: '', 
      isActive:false
    }

  componentWillMount () {
    if(this.props.id) {
      this.setState({name: this.props.name})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, isActive } = this.state;
    this.props.submit(name, isActive)
    this.setState( {name: ''})
  };

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };



  render () {
    const { name, isActive } = this.state;

    if (this.props.id) {
      return (
        <form onSubmit={this.handleSubmit}>
        <input 
          name="name"
          title="name"
          value={name}
          onChange={this.handleInputChange}
        />
        <Button positive>Update</Button>
      </form>
      )
    }
    else {
      return (
        <form onSubmit={this.handleSubmit}>
        <h4>Menu Name</h4>
        <input 
          name="name"
          title="name"
          value={name}
          required
          onChange={this.handleInputChange}
        />
        <h4>Make current menu</h4>
        <input
          name="isActive"
          type="checkbox"
          checked={isActive}
          onChange={this.handleInputChange}
        />
        <br />
        <Button positive>Add Menu</Button>
        </form>
      )
    }
    
  }
}

export default MenuForm;