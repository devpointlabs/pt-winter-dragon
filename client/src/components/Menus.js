import React from 'react';
import axios from 'axios';
import Menu from './Menu';
// import CreateMenu from './CreateMenu';
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

  addToCurr =(id, name) => {
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
          isactive = false
          axios.put(`/api/menus/${m.id}`, {isactive})
            .then( res => {
              console.log(res.data);
            })
        }
      })
    }
    axios.post(`api/menus`, {menu})
      .then(res => {
        this.setState({menus: [...this.state.menus, res.data]})
      })
  }

  makeActive = (id) => {
    this.state.menus.map(m => {
      if(m.isactive) {
        m.isactive = false
          axios.put(`/api/menus/${m.id}`, {isactive:false})
            .then( res => {
            console.log(m.id + " is now false")
          })
      }
    
    })
    axios.put(`/api/menus/${id}`, {isactive:true})
          .then( res => {
            this.setState({currMenu: res.data})
      })
  }

 

  showAllMenus = () => {
    // <h2>All Menus</h2>
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

  render() {
    
    return (
      <Container>
        <Segment>
          <div>
            <h1>Current Menu:</h1>
              <Menu getCurrMenu={this.state.currMenu}/>
              <br />
              <a href="#" onClick={this.toggleAllMenus}><Button>View All Created Menus</Button></a>
              {this.state.showAllMenus ? this.showAllMenus() : <div></div>}
              <br />
              <h1>Add New Menu</h1>
              <MenuForm submit={this.submit} />
              {/* <CreateMenu getMenus={this.state.menus}/> */}
              {console.log(...this.state.menus)}
          </div>
        </Segment>
      </Container>
    )
  }
}

export default Menus;