import React from 'react';

class MenuForm extends React.Component {
<<<<<<< HEAD
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
=======
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
>>>>>>> 114ded194ede54988150cb5146155c24915771dd
  }


  render () {
<<<<<<< HEAD
    const { menu: {name, isactive}} = this.state;
=======
    const { name } = this.state;
>>>>>>> 114ded194ede54988150cb5146155c24915771dd
    return (
      <form onSubmit={this.handleSubmit}>
      <h3>Menu Name</h3>
      <input 
        name="name"
        title="name"
        value={name}
        onChange={this.handleChange}
      />
<<<<<<< HEAD
      <input
        name="isActive"
        type="checkbox"
        checked={this.state.isActive}
        onChange={this.handleChange}
      />
      <button>Submit</button>
=======
>>>>>>> 114ded194ede54988150cb5146155c24915771dd
      </form>
    )
  }
}

export default MenuForm;