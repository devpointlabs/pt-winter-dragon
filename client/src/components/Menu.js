import React from 'react';
// import MenuForm from './MenuForm';
import { Button } from 'semantic-ui-react';
import Menus from './Menus';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Menu extends React.Component {
  state = { menu: [], showAllMenus: false }

  componentDidMount() {
    axios.get(`/api/menus/${this.props.match.id}`)
      .then( res => {
        this.setState({ menu:res.data })
      })
  }

  showMenu = () => {
    return (
      console.log("menu")
    )
  }

  toggleAllMenus = () => {
    this.setState({ showAllMenus: !this.state.showAllMenus });
    console.log(this.state.showAllMenus);
  }


  render() {
    const { menu } = this.state
    return (
      <div>
        <h1>Current Menu:</h1>
        <Link to={`/edit-menu/${menu.id}`} key={menu.id} id={menu.id} name={menu.name}><Button>Edit this menu</Button></Link>
        <br />
        <a href="#" onClick={this.toggleAllMenus}><Button>View All Created Menus</Button></a>
          {this.state.showAllMenus ? <Menus /> : <div></div>}
      </div>
    )
  }
}

export default Menu;