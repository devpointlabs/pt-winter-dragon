import React from 'react';
import axios from 'axios';
import CatForm from './CatForm';
import Items from './Items';

import { Button, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

//CHILD COMPONENT

class Categories extends React.Component { 
  state = { categories: [], toggleEditCat: false,  }

  componentDidMount() {
    axios.get(`/api/menus/${this.props.menuId}/categories`)
    .then( res => {
      this.setState({ categories:res.data })
    })
  }

  submit = (name, description) => {
    const category = {name, description}
    axios.post(`/api/menus/${this.props.menuId}/categories`, {category})
      .then(res => {
        this.setState({categories: [...this.state.categories, res.data]})
      })
  }

  deleteCat = (id) => {
    let menId = parseInt(this.props.menuId)
    axios.delete(`/api/menus/${menId}/categories/${id}`)
    return  (
        window.location.href = `/edit-menu/${this.props.menuId}`
      )
  }

  editCategory = (name, description, id) => {
    const category = { name, description}
    axios.put(
      `/api/menus/${this.props.menuId}/categories/${id}`, { category } )
      .then(() => { 
        axios.get(`/api/menus/${this.props.menuId}/categories`)
        .then(res => {
          this.setState({ categories: res.data })
        })
    })
  }

  showCategories = () => {
    return this.state.categories.map(c => {
      return (
        <ul key={c.id}>
          <h3>Category Name: {c.name}</h3> 
          <h4>Description: {c.description}</h4>
          <Items catId={c.id}/>
          {this.state.toggleEditCat ? <CatForm id={c.id} name={c.name} description={c.description} editCategory={this.editCategory}/> : null }
          <Button color='yellow' onClick={() => this.setState({toggleEditCat: !this.state.toggleEditCat})}>Edit Category</Button>
          <Button trash="true" negative onClick={() => this.deleteCat(c.id)}><Icon name='trash' />Delete Category</Button>
        </ul>
      )
    })
  }

  render () {
    return (
      <Segment>
        <div>
          {this.showCategories()}
          <Link to={"#"} onClick={(e) => this.setState({ addCat: !this.state.addCat })}><Button>+ Add New Category</Button></Link>
          {this.state.addCat ? <CatForm submit={this.submit} /> : <div></div>}
        </div>
      </Segment>
    )
  }
}

export default Categories;