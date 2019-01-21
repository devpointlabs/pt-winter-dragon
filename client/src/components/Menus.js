import React from 'react';
import axios from 'axios';
import MenuForm from './MenuForm';

import { Button, Container, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// PARENT COMPONENT

class Menus extends React.Component { 
  state = { menus: [], active: false, showAllMenus: false, currMenu: {}}

  componentWillMount() {
    axios.get('/api/menus')
      .then( res => {
        this.setState({ menus:res.data }, () => {
          this.state.menus.map(m => {
            if (m.isactive == true) {
              this.addToCurr(m.id, m.name);
            }
          })
        })
      }); 
    }

  addToCurr = (id, name) => {
    return(
      this.setState({currMenu: {id, name}})
    )
  }

  submit = (name, isactive) => {
    const menu = {name, isactive}
    if (isactive == true) {
      this.state.menus.map(m => {
        if (m.isactive == true){
          //set all actives to inactive
          m.isactive = false
          axios.put(`/api/menus/${m.id}`, {isactive:false})
        }
      })
    }
    axios.post(`api/menus`, {menu})
      .then(res => {
        this.setState({menus: [...this.state.menus, res.data]}, () => {
          if (res.data.isactive == true) {
            this.setState({currMenu: res.data})
          } else {
            this.currMenu()
          }
        })
      })
  }

  makeActive = (id) => {
    this.state.menus.map(m => {
      if(m.isactive) {
        m.isactive = false
          axios.put(`/api/menus/${m.id}`, {isactive:false})
      }
    
    })
    axios.put(`/api/menus/${id}`, {isactive:true})
          .then( res => {
            this.setState({currMenu: res.data})
      })
  }

  showAllMenus = () => {
    return this.state.menus.map(m => {
      return (
        <ul key={m.id}>
        <h3><Link to={`/edit-menu/${m.id}`} key={m.id} id={m.id} name={m.name}>{m.name}</Link></h3>
        <Button onClick={(e) => this.makeActive(m.id, e)}>Make Active</Button>
        </ul>
      )
    })
  }

  toggleAllMenus = () => {
    this.setState({ showAllMenus: !this.state.showAllMenus });
  }

  currMenu = () => {
    if (this.state.currMenu){
      return(
        <div>
          <Link to={`/edit-menu/${this.state.currMenu.id}`} key={this.state.currMenu.id} id={this.state.currMenu.id} name={this.state.currMenu.name}><h2>{this.state.currMenu.name}</h2></Link>
        </div>
        )
    } else {
      return (
        <div>
          <i>No active menu currently set</i>
        </div>
      )  
    }
    
}

  render() {
    return (
      <Container>
        <Segment>
          <div>
            <h1>Active Menu</h1>
            <hr />
              {this.currMenu()}
              <br />
              <a href="#" onClick={this.toggleAllMenus}><Button>View All Created Menus</Button></a>
              {this.state.showAllMenus ? this.showAllMenus() : <div></div>}
              <br />
              <h1>Add New Menu</h1>
              <hr />
              <MenuForm submit={this.submit} />
          </div>
        </Segment>
      </Container>
    )
  }
}

export default Menus;