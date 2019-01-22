import React from 'react';
import { Button, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

//CHILD COMPONENT


class Menu extends React.Component {

  currMenu = () => {
      return(
      <div>
        <h2>{this.props.getCurrMenu.name}</h2>
        <Link to={`/edit-menu/${this.props.getCurrMenu.id}`} key={this.props.getCurrMenu.id} id={this.props.getCurrMenu.id} name={this.props.getCurrMenu.name}><Button>Edit current menu</Button></Link>
      </div>
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