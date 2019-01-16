import React from 'react';
import axios from 'axios';
import CatForm from './CatForm';
import Items from './Items';

import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

//CHILD COMPONENT

class Categories extends React.Component { 
  state = { categories: [], }

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
    console.log(menId)
    // debugger
      axios.delete(`/api/menus/${menId}/categories/${id}`)
          .then(res => {
            debugger
        }) 
        .catch(res => {
          debugger
        })
    return  (
        window.location.href = `/edit-menu/${this.props.menuId}`
      )
  }

  showCategories = () => {
    return this.state.categories.map(c => {
      return (
        <ul key={c.id}>
          <h3>Category Name: {c.name}</h3> 
          <h4>Description: {c.description}</h4>
          <Items catId={c.id}/>
          <Button onClick={(e) => this.deleteCat(c.id)}>Delete</Button>
        </ul>
      )
    })

  }
  render () {
    
    return (
      <div>
        {this.showCategories()}
        <Link to={"#"} onClick={(e) => this.setState({ addCat: !this.state.addCat })}>Add New Category</Link>
        {this.state.addCat ? <CatForm submit={this.submit} /> : <div></div>}
      </div>
    )
  }
}

export default Categories;