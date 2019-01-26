import React, { Component } from 'react';
import { Button, Form, Input, Radio, TextArea, } from 'semantic-ui-react';
import axios from 'axios';

class ContactForm extends Component {
  state = {fname:'', lname:'', email:'', reason:'', comment:''}

  componentDidMount() {
      axios.get('/api/contacts')
      .then(res => {
          this.setState({ contacts: res.data})
      })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({ fname: '', lname: '', email: '', reason: '', comment: '', })
  }

  addContact = () => {
      axios.post('/api/contacts')
      .then(res =>{
          this.setState()
      })
  }

  render() {
    const { value } = this.state
    return (
            <Form>
              <h1>Contact Golden Dragon</h1>
              <Form.Group widths='equal'>
                <Form.Field control={Input} label='First name' name='fname' placeholder='First name' />
                <Form.Field control={Input} label='Last name' name='lname' placeholder='Last name' />
                <Form.Field control={Input} label='Email' name='email' placeholder='Email' />
              </Form.Group>
              <Form.Group inline>
                <label>Reason for contacting Golden Dragon:</label>
                <Form.Field
                  control={Radio}
                  label='Venue Reservation *'
                  name='reason'
                  value='Venue Reservation'
                  checked={value === 'Venue Reservation'}
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={Radio}
                  label='Suggestion or Comment'
                  name='reason'
                  value='Suggestion or Comment'
                  checked={value === 'Suggestion or Comment'}
                  onChange={this.handleChange}
                />
              </Form.Group>
                <Form.Field control={TextArea}
                label='Comment'
                name='comment'
                placeholder='Please leave your comment or venue reservation details here.'
                />
                <Form.Field control={Button}>Submit</Form.Field>
                <p>* For a venue reservation, please leave the number of people attending and the night you would like to reserve the Golden dragon.
                completing this form does not guarantee reservation</p>
            </Form>
    )
  }
}

export default ContactForm;
