import React from 'react';
import axios from 'axios';
import MenuForm from './MenuForm';

import { Link } from 'react-router-dom';

class EditMenu extends React.Component {
  state = { menu: [], editName: false }

  componentDidMount() {
    axios.get(`/api/menus/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ menu:res.data })
      })
  }

  deleteMenu = (id, e) => {
    e.preventDefault();
      axios.delete(`/api/menus/${id}`)
          .then(res => {
            console.log(res.data + " deleted");
        }) 
    return  (
        window.location.href = "/menu"
      )
  }

  submit = (name) => {
    const menu = {name}
    axios.put(`/api/menus/${this.state.menu.id}`, {menu})
      .then(res => {
        this.setState({menu: res.data})
      })
  }

  addCat = () => {
    //ADD NEW CATEGORY
  }

  render() {
    const id = this.props.match.params.id
    const { menu } = this.state
    return (
      <div>
        <h1>Current Menu:</h1>
        <br />
          <h2>Menu Name: {this.state.menu.name}</h2>
            <Link to={"#"} onClick={() => this.setState({ editName: !this.state.editName })}>Edit Menu Name</Link>
            {this.state.editName ? <MenuForm id={menu.id} name={menu.name} submit={this.submit} /> : <div></div>}
            <br />
            <h2>Categories</h2>
    
            <Link to={"#"} onClick={(e) => this.addCat(id, e)}>Add New Category</Link>
            <br />
            <Link to={"#"} onClick={(e) => this.deleteMenu(id, e)}>Delete</Link>
      </div>
    )
  }
}

export default EditMenu;