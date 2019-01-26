import React from 'react';
import { Button, Form, Checkbox } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
// import ImageUploader from 'react-images-upload';

class ItemForm extends React.Component {
  state = { 
      name: '',
      price: '', 
      spice: false,
      image: [],
      file: ''
    }

  componentWillMount () {
    if(this.props.id) {
      this.setState({name: this.props.name, price: this.props.price, image: this.props.image, spice: this.props.spice, id: this.props.id })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, price, spice, image, id, file } = this.state;
    if (this.props.id) {
      this.props.editItem(name, price, spice, image, id, file)
    } else {
      this.props.submit(name, price, spice, image, file)
    };
    this.updateItem(id, name, price, spice, image, id, file)
    this.setState( {name: '', price: '' })
  };

  updateItem = (id, item) => {
    let data = new FormData();
    data.append('file', item.file);
    axios.put(`/api/items/${id}`)
    .then( res => this.setState({item: res.data, file: ''}) )
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleToggle = () => this.setState({spice: !this.state.spice })

  checkToggle = () => { return "checked" ? this.state.spice : !this.state.spice }

  // imageUpload = (pic) => {
  //   this.setState({image:pic})
  // }

  onDrop = (files) => {
    this.setState({ ...this.state, file: files[0] })
  }

  render () {
    const { name, price } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Item Name</label>
          <input 
            name="name"
            title="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <input 
            name="price"
            title="price"
            value={price}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Spicy</label>
          <Checkbox toggle 
            name="spice"
            title="spice"
            checked={this.checkToggle()}
            onChange={this.handleToggle}
          />
        </Form.Field>
        <Dropzone
          onDrop={this.onDrop}
          multiple={false}
        >
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div
                {...getRootProps()}
                style={styles.dropzone}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop files here...</p> 
                  :
                    <p>Try dropping an image here, or click to select an image to upload.</p>
                }
              </div>
            )
          }}
        </Dropzone>
        <Button positive>Add</Button>
        <br />
        <br />
      </Form>
      )
    }
}

const styles = { 
  dropzone: { height: '50px', textAlign: 'center' }
}

export default ItemForm;