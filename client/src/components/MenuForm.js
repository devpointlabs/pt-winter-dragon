import React from 'react';
import { Button, Form, Checkbox } from 'semantic-ui-react';

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
    const value = target.type === undefined ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render () {
    const { name, isActive } = this.state;
      if (this.props.id) {
      return (
        <Form>
          <Form.Field>
            <label>Menu Name</label>
            <input 
              name="name"
              title="name"
              value={name}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Button positive onClick={this.handleSubmit}>Update</Button>
        </Form>
      )
    }
    else {
      return (
        <Form>
          <Form.Field>
            <label>Menu Name</label>
            <input 
              name="name"
              title="name"
              value={name}
              required
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              label='Make current menu'
              name="isActive"
              checked={isActive}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Button positive onClick={this.handleSubmit}>Add Menu</Button>
        </Form>
      )
    }
    
  }
}

export default MenuForm;