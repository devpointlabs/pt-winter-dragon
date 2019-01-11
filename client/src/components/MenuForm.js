import React from 'react';

class MenuForm extends React.Component {
  state = { menu: {name: '', isActive:false} };

  handleSubmit = (e) => {
    e.preventDefault();
    const { menu } = this.state
    this.props.submit(menu)
    this.setState({menu: {name: ''}})
  }

  handleChange = (e) => {
    // const target = e.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;

    if (e.target.type === "checkbox") {
      this.setState({menu: {isActive:true}})
    }

    this.setState({menu: {name:e.target.value}})
  }


  render () {
    const { menu: {name, isactive}} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
      <h3>Menu Name</h3>
      <input 
        name="name"
        title="name"
        value={name}
        onChange={this.handleChange}
      />
      <input
        name="isActive"
        type="checkbox"
        checked={this.state.isActive}
        onChange={this.handleChange}
      />
      <button>Submit</button>
      </form>
    )
  }
}

export default MenuForm;