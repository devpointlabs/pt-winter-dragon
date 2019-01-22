import React from 'react';
import { Button, Form } from 'semantic-ui-react';

class CatForm extends React.Component {
  state = { 
      name: '', 
      description: '',
      id: '',
    }

  componentWillMount () {
    if(this.props.id) {
      this.setState({name: this.props.name})
      this.setState({description: this.props.description})
      this.setState({id: this.props.id})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, id } = this.state;
    if (this.props.id) {
      this.props.editCategory(name, description, id)
    } else {
      this.props.submit(name, description)
    }
    this.setState( {name: '', description: ''})
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
    const { name, description } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Category Name</label>
          <input 
            name="name"
            title="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input 
            name="description"
            title="description"
            value={description}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Button positive>Add</Button>
      </Form>
      )
    }
}

export default CatForm;