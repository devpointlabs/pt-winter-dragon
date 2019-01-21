import React from 'react';
import axios from 'axios';
import MenuForm from './MenuForm';

import { Link } from 'react-router-dom';
import { Container, Button, Segment, Icon, Confirm } from 'semantic-ui-react';
import Categories from './Categories';

class EditMenu extends React.Component {
  state = { menu: {}, categories: [], editName: false, addCat: false, open: false, result: '' }

  componentDidMount() {
    axios.get(`/api/menus/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ menu:res.data })
      })
  }

  deleteMenu = (id) => {
    if(this.state.result == 'confirmed'){
      this.setState({ open: true })
      axios.delete(`/api/menus/${id}`)
          .then(res => {
            console.log(res.data + " deleted");
        }) 
      return  (
        window.location.href = "/menu"
      )
    } else {
      return null
    }
  }

  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ result: 'confirmed', open: false })
  handleCancel = () => this.setState({ result: 'cancelled', open: false })

  submit = (name) => {
    const menu = {name}
    axios.put(`/api/menus/${this.state.menu.id}`, {menu})
      .then(res => {
        this.setState({menu: res.data})
      })
  }

  render() {
    const id = this.props.match.params.id
    const { menu } = this.state
    return (
      <Container>
        <Segment>
        <div>
          <h1>Active Menu</h1>
          <hr />
            <h2>{this.state.menu.name}</h2>
              <Link to={"#"} onClick={() => this.setState({ editName: !this.state.editName })}>Edit Menu Name</Link>
              {this.state.editName ? <MenuForm id={menu.id} name={menu.name} submit={this.submit} /> : <div></div>}
              <br />
              <h2>Categories</h2>
              <Categories menuId={id} />
              <br />
              <Button trash='true' negative onClick={() => this.show()}><Icon name='trash' />Delete Menu</Button>
              <Confirm open={this.state.open} onCancel={this.handleCancel} onConfirm={this.handleConfirm} deleteMenu={this.deleteMenu(menu.id)}/>
        </div>
        </Segment>
      </Container>
    )
    
  }
}

export default EditMenu;