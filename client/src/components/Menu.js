import React from 'react';
// import MenuForm from './MenuForm';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import axios from 'axios';

//CHILD COMPONENT

class Menu extends React.Component {
  state = { menu: [], menus: [] }

  currMenu = () => {
    return(
    this.props.getCurrMenu.map(m => {
        if (m.isactive == true) {
          return (
            <div>
            <h2>{m.name}</h2>
              <Link to={`/edit-menu/${m.id}`} key={m.id} id={m.id} name={m.name}><Button>Edit current menu</Button></Link>
            </div>
          )
        }
        else 
          return (
            console.log(m.name)
          )
      })
    )
  }


  render() {
    return (
      <div>
        {this.currMenu()}
      </div>
    )
  }
}

export default Menu;