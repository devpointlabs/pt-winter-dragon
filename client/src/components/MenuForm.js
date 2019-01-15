import React from 'react';

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
        <h3>Menu Name</h3>
        <input 
          name="name"
          title="name"
          value={name}
          onChange={this.handleInputChange}
        />
        <button>Next>></button>
      </form>
      )
    }
    else {
      return (
        <form onSubmit={this.handleSubmit}>
        <h3>Menu Name</h3>
        <input 
          name="name"
          title="name"
          value={name}
          onChange={this.handleInputChange}
        />
        <p>Make current menu</p>
        <input
          name="isActive"
          type="checkbox"
          checked={isActive}
          onChange={this.handleInputChange}
        />
        <br />
        <button>Next>></button>
        </form>
      )
    }
    
  }
}

export default MenuForm;