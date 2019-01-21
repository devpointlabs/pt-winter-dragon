import React from 'react';
import MenuForm from './MenuForm';
import axios from 'axios';

//CHILD COMPONENT

class CreateMenu extends React.Component {
  state = { menus: [] }

  componentWillReceiveProps(menusArr) {
    this.state.props.getMenus.map (m => {
      this.setState({menus: menusArr })
    })
  }

  submit = (name, isactive) => {
    const menu = {name, isactive}
    if (isactive == true) {
      this.state.menus.map(m => {
        if (m.isactive == true){
          //set all actives to inactive
          m.isactive = false
          isactive = false
          axios.put(`/api/menus/${m.id}`, {isactive})
            .then( res => {
              console.log(res.data);
            })
        }
      })
    }

    axios.post(`/api/menus`, { menu })
      .then(res => {
        this.setState({ menus: [res.data, ...this.state.menus ]})
      })
  }

  render() {
    return (
      <div>
        <MenuForm submit={this.submit} />
      </div>
      
    )
  }
}

export default CreateMenu;