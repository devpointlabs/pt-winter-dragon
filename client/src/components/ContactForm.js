import React, { Component } from 'react';
import { Button, Form, Input, Radio, TextArea, Segment, Container} from 'semantic-ui-react';
import axios from 'axios';

class ContactForm extends Component {
  state = {fname:'', lname:'', email:'', reason:'', comment:''}

  // componentDidMount() {
  //     axios.get('/api/contacts')
  //     .then(res => {
  //         this.setState({ contacts: res.data})
  //     })
  // }

  handleChangeRadio = (e, { value }) => this.setState({ value })


  handleChange = (e) => {
    this.setState({ fname: '', lname: '', email: '', comment: ''});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({ fname: '', lname: '', email: '', reason: '', comment: '', })
  }

  addContactgit  = () => {
      axios.post('/api/contacts')
      .then(res =>{
          this.setState()
      })
  }

  render() {
    const { value } = this.state
    return (
      <Container style={{margin: '90px 25px 25px 50px', textAlign: 'center'}}>
      <Segment>
            <Form action="/confirmation-contact"  enctype="text/plain"> 
              <h1>Contact Golden Dragon</h1>
              <Form.Group widths='equal'>
                <Form.Field control={Input} label='First name' name='fname' placeholder='First name' />
                <Form.Field control={Input} label='Last name' name='lname' placeholder='Last name' />
                <Form.Field control={Input} label='Email' name='email' placeholder='Email' />
              </Form.Group>
              <Form.Group inline>
                <label>Reason for contacting Golden Dragon:</label>
                <Form.Field>
                  <Radio
                  label='Venue Reservation *'
                  name='reason'
                  value='Venue Reservation'
                  checked={this.state.value === 'Venue Reservation'}
                  onChange={this.handleChangeRadio}
                />
                </Form.Field>
                <Form.Field>
                  <Radio
                  label='Suggestion or Comment'
                  name='reason'
                  value='Suggestion or Comment'
                  checked={this.state.value === 'Suggestion or Comment'}
                  onChange={this.handleChangeRadio}
                />
                </Form.Field>
              </Form.Group>
                <Form.Field control={TextArea}
                label='Comment'
                name='comment'
                placeholder='Please leave your comment or venue reservation details here.'
                onChange={this.handleChange}
                />
                <Form.Field control={Button} style={{backgroundColor:'#e0d538',
                    color:'black',
                    height:'60px',
                    fontSize:'20px'}}>
                    Submit
                    </Form.Field>
                <p>* For a venue reservation, please leave the number of people attending and the night you would like to reserve the Golden dragon.
                completing this form does not guarantee reservation</p>
            </Form>
            <br />
            </Segment>
            </Container>
    )
  }
}

export default ContactForm;
