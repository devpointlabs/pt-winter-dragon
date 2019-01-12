import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class EditMenu extends React.Component {
  state = { menu: [] }

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

  render() {
    const id = this.props.match.params.id
    return (
      <div>
        {console.log("create menu")}
        <h1>Current Menu:</h1>
        <br />
          <h2>{this.state.menu.name}</h2>
          <Link to={"#"} onClick={(e) => this.deleteMenu(id, e)}>Delete</Link>
      </div>
    )
  }
}

export default EditMenu;