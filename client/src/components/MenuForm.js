import React from 'react';

class MenuForm extends React.Component {
  defaultValues = { name: ' '}
  state = {...this.defaultValues}

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submit(menu)
    this.setState({...this.defaultValues})
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }


  render () {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
      <h3>Menu Name</h3>
      <input 
        name="name"
        title="name"
        value={name}
        onChange={this.handleChange}
      />
      </form>
    )
  }
}

export default MenuForm;