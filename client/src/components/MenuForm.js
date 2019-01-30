import React from 'react';
import { Button, Form, Checkbox, } from 'semantic-ui-react';

class MenuForm extends React.Component {
  state = { 
      name: '', 
      isActive:false,
      nameError:false,
    }

  componentWillMount () {
    if(this.props.id) {
      this.setState({name: this.props.name})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name === ''){
      this.setState({nameError:true});
      return 
    } else {
      const { name, isActive } = this.state;
      this.props.submit(name, isActive)
      this.setState( {name: ''})
    }
  };

  handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  };

  toggleCheck = () => {
    this.setState({isActive: !this.state.isActive })
  }

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
              error={this.state.menuError}
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
              type="checkbox"
              onChange={this.toggleCheck}
            />
          </Form.Field>
          <Button positive onClick={this.handleSubmit}>Add Menu</Button>
        </Form>
      )
    }
    
  }
}

export default MenuForm;