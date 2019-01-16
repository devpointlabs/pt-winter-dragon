import React from 'react';

class CatForm extends React.Component {
  state = { 
      name: ''
    }

  componentWillMount () {
    if(this.props.id) {
      this.setState({name: this.props.name})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    this.props.submit(name)
    this.setState( {name: ''})
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
    const { name } = this.state;

    return (
        <form onSubmit={this.handleSubmit}>
        <h3>Category Name</h3>
        <input 
          name="name"
          title="name"
          value={name}
          onChange={this.handleInputChange}
        />
        <button>Add</button>
      </form>
      )
    }
}

export default CatForm;