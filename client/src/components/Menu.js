import React from 'react';
import MenuForm from './components/MenuForm';

class Menu extends React.Component {
  state = { menu: [] }

  showMenu = () => {
    return (
      <div>Menu</div>
    )
  }

  submit = (menu) => {
    console.log(menu);
  }

  render() {
    return (
      <div>
        {this.showMenu()}
        <br />
        <h2>Add a new menu</h2>
        <MenuForm submit={this.submit} />
      </div>
    )
  }
}

export default Menu;