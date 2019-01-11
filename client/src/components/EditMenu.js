import React from 'react';
import Menus from './Menus';

class Menu extends React.Component {
  state = { menu: [] }

  componentDidMount() {
    axios.get(`/api/menus/${this.props.match.id}`)
      .then( res => {
        this.setState({ menu:res.data })
      })
  }

  render() {
    return (
      <div>
        <h1>Current Menu:</h1>
        <br />
          {this.state.menu.name}
      </div>
    )
  }
}

export default Menu;