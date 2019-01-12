import React from 'react';
import axios from 'axios';
import Menu from './Menu';
import CreateMenu from './CreateMenu';

import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


// PARENT COMPONENT

class Menus extends React.Component { 
  state = { menus: [], active: false, showAllMenus: false}

  componentWillMount() {
    axios.get('/api/menus')
      .then( res => {
        this.setState({ menus:res.data })
      });
  }

 

  showAllMenus = () => {
    // <h2>All Menus</h2>
    return this.state.menus.map(m => {
      return (
        <ul key={m.id}>
        <Link to={`/edit-menu/${m.id}`} key={m.id} id={m.id} name={m.name}>{m.name}</Link>
        </ul>
      )
    })
  }

  toggleAllMenus = () => {
    this.setState({ showAllMenus: !this.state.showAllMenus });
  }

  render() {
    
    return (
      <div>
        <h1>Current Menu:</h1>
          <Menu getCurrMenu={this.state.menus}/>
          <br />
          <a href="#" onClick={this.toggleAllMenus}><Button>View All Created Menus</Button></a>
          {this.state.showAllMenus ? this.showAllMenus() : <div></div>}
          <br />
          {/* <Link to={`/create-new-menu`}><Button>Add New Menu</Button></Link> */}
          <CreateMenu getMenus={this.state.menus}/>
      </div>
    )
  }
}

export default Menus;