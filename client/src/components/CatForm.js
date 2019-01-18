import React from 'react';
import { Button } from 'semantic-ui-react';

class CatForm extends React.Component {
  state = { 
      name: '', 
      description: '',
    }

  componentWillMount () {
    if(this.props.id) {
      this.setState({name: this.props.name})
      this.setState({description: this.props.description})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, description } = this.state;
    if (this.props.id) {
      this.props.editCategory(name, description)
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
        <form onSubmit={this.handleSubmit}>
        <h3>Category Name</h3>
        <input 
          name="name"
          title="name"
          value={name}
          onChange={this.handleInputChange}
        />
        <h3>Description</h3>
        <input 
          name="description"
          title="description"
          value={description}
          onChange={this.handleInputChange}
        />
        <br />
        <Button positive>Add</Button>
      </form>
      )
    }
}

export default CatForm;