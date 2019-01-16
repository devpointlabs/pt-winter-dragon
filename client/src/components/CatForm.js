import React from 'react';

class CatForm extends React.Component {
  state = { 
      name: '', 
      description: '',
    }

  componentWillMount () {
    if(this.props.id) {
      this.setState({name: this.props.name})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, description } = this.state;
    this.props.submit(name, description)
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
        <input 
          name="description"
          title="description"
          value={description}
          onChange={this.handleInputChange}
        />
        <button>Add</button>
      </form>
      )
    }
}

export default CatForm;